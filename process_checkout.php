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
    $sql_sales = "INSERT INTO tbsales (id_product, id_customer, status, dates, times) VALUES ($id_product, $id_customer, '$status', CURDATE(), DATE_FORMAT(CURTIME(), '%H:%i'))";
    if ($conn->query($sql_sales) === TRUE) {
        echo "Record inserted successfully for product ID: $id_product<br>";
    } else {
        echo "Error: " . $sql_sales . "<br>" . $conn->error;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $status = $_POST['status'];
    $orders = json_decode($_COOKIE['listCart'], true); // Mengambil data Cookie dari JSON

    // Menginisialisasi variabel untuk menampung total items dan price
    $totalItems = 0;
    $totalPrice = 0;

    // Kalkulasi total items dan total Price
    foreach ($orders as $order) {
        $totalItems += $order['quantity'];
        $totalPrice += $order['quantity'] * $order['price'];
    }

    // Simpan data di sessionStorage pakai JavaScript dan arahkan ke halaman struk
    echo "<script>
        sessionStorage.setItem('customerName', '$name');
        sessionStorage.setItem('customerPhone', '$phone');
        sessionStorage.setItem('pickupMethod', '$status');
        sessionStorage.setItem('totalItems', '$totalItems');
        sessionStorage.setItem('totalPrice', '$totalPrice');
        window.location.href = 'payment_success.html';
    </script>";
}

$conn->close();
?>