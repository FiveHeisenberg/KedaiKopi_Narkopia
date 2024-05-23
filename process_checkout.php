<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_narkopia";

$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Mengambil data dari form
$customername = $_POST['name'];
$telephone = $_POST['phone'];
$status = $_POST['status'];

// Menyimpan data pelanggan ke tabel tbcustomer
$sql_customer = "INSERT INTO tbcustomer (customername, telephone) VALUES ('$customername', '$telephone')";
if ($conn->query($sql_customer) === TRUE) {
    $id_customer = $conn->insert_id; // Mendapatkan id_customer yang baru dimasukkan
} else {
    echo "Error: " . $sql_customer . "<br>" . $conn->error;
    exit();
}

// Mengambil data produk dari cookie
$listCart = json_decode($_COOKIE['listCart'], true);

// Memeriksa apakah semua produk ada di tabel tbproduct
foreach ($listCart as $product) {
    $id_product = $product['id'];
    $check_product = "SELECT id_product FROM tbproduct WHERE id_product = $id_product";
    $result = $conn->query($check_product);

    if ($result->num_rows == 0) {
        echo "Product with id $id_product does not exist in the database.";
        exit();
    }
}

// Menyimpan data penjualan ke tabel tbsales
foreach ($listCart as $product) {
    $id_product = $product['id'];
    $sql_sales = "INSERT INTO tbsales (id_product, id_customer, status) VALUES ($id_product, $id_customer, '$status')";
    if ($conn->query($sql_sales) === TRUE) {
        echo "Record inserted successfully for product ID: $id_product<br>";
    } else {
        echo "Error: " . $sql_sales . "<br>" . $conn->error;
    }
}

$conn->close();
?>
