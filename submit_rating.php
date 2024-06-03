<?php
// Koneksi ke database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Dapatkan data dari AJAX
$id_customer = $_POST['id_customer'];
$rating = $_POST['rating'];

// Masukkan data ke tabel tbrating
$sql = "INSERT INTO tbrating (id_customer, rating) VALUES ('$id_customer', '$rating')";

if ($conn->query($sql) === TRUE) {
    echo "Rating submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
