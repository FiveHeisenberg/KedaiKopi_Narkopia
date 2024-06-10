<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_narkopia";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Memeriksa apakah data POST tersedia
if (isset($_POST['id_customer']) && isset($_POST['rating'])) {
    $id_customer = (int)$_POST['id_customer'];
    $rating = (int)$_POST['rating'];

    if ($id_customer > 0 && $rating > 0) {
        // Menyimpan rating ke dalam tabel tbrating
        $sql = "INSERT INTO tbrating (id_customer, rating) VALUES ('$id_customer', '$rating')";

        if ($conn->query($sql) === TRUE) {
            echo "Rating berhasil disimpan";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        echo "Invalid id_customer or rating";
    }
} else {
    echo "Data id_customer atau rating tidak tersedia";
}

// Menutup koneksi
$conn->close();
?>
