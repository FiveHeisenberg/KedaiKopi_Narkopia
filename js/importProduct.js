const mysql = require('mysql');
const fs = require('fs');

// Baca file JSON
const products = JSON.parse(fs.readFileSync('product.json', 'utf8'));

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_narkopia'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');

  const productQueries = products.map(product => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO tbproduct (id_product, productname, id_category, price) VALUES (?, ?, ?, ?)';
      db.query(query, [product.id, product.name, product.category, product.price], (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  });

  Promise.all(productQueries)
    .then(() => {
      console.log('Products imported successfully');
      db.end();
    })
    .catch(err => {
      console.error('Error importing products:', err);
      db.end();
    });
});
