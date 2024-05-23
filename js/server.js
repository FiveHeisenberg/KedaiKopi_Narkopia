const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_narkopia'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to database');
});

// Menyajikan file statis
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rute untuk menangani checkout
app.post('/checkout', (req, res) => {
  console.log('Received checkout request:', req.body); // Logging data yang diterima
  const { name, phone, status, products } = req.body;

  if (!name || !phone || !status || !products || products.length === 0) {
    return res.status(400).send('Invalid request data');
  }

  const date = new Date().toISOString().slice(0, 10); // Format tanggal

  // Masukkan data pelanggan
  const customerQuery = 'INSERT INTO tbcustomer (customername, telephone) VALUES (?, ?)';
  db.query(customerQuery, [name, phone], (err, result) => {
    if (err) {
      console.error('Error inserting customer:', err);
      return res.status(500).send('Error inserting customer');
    }
    const customerId = result.insertId;
    console.log('Customer inserted with ID:', customerId); // Logging ID customer

    // Masukkan data penjualan
    const salesQueries = products.map(product => {
      return new Promise((resolve, reject) => {
        const salesQuery = 'INSERT INTO tbsales (id_product, id_customer, status, dates) VALUES (?, ?, ?, ?)';
        db.query(salesQuery, [product.id, customerId, status, date], (err, result) => {
          if (err) {
            console.error('Error inserting sales:', err);
            return reject(err);
          }
          resolve(result);
        });
      });
    });

    Promise.all(salesQueries)
      .then(() => res.send('Checkout successful'))
      .catch(err => {
        console.error('Error in sales transactions:', err);
        res.status(500).send('Checkout failed');
      });
  });
});

// Jalankan server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
