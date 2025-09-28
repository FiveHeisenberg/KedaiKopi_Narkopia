# ☕ Narkopia - Coffee Shop Website

![Narkopia Banner](https://i.imgur.com/HuA9qB3.jpeg)


> **Narkopia** adalah website kedai kopi modern yang dibangun dengan teknologi web fundamental tanpa framework, menawarkan pengalaman berbelanja kopi dan makanan secara online yang elegan dan user-friendly.

## 🌐 Live Demo

- **GitHub Pages**: [https://fiveheisenberg.github.io/KedaiKopi_Narkopia](https://fiveheisenberg.github.io/KedaiKopi_Narkopia)
- **Vercel**: [https://kedai-kopi-narkopia.vercel.app/](https://kedai-kopi-narkopia.vercel.app/)

## 📸 Preview

![Screenshot](https://i.imgur.com/WMNzIAA.png)
![ss](https://i.imgur.com/i5LzY9b.png)


## ✨ Fitur Utama

### 🎯 **Konten Interaktif**
- **Slide Review & Testimoni** - Menampilkan testimoni dari tokoh-tokoh terkenal dengan animasi slide yang smooth
- **Slide Menu Populer** - Showcase makanan dan minuman yang paling banyak dipesan dengan navigasi yang intuitif
- **Banner Promo** - Penawaran diskon dan promosi menarik yang dinamis

### 🛍️ **Sistem E-commerce**
- **Filter Menu Berdasarkan Kategori**:
  - ☕ Coffee
  - 🥤 Non Coffee  
  - 🍕 Food
  - 🍦 Ice Cream
  - 🌱 Coffee at Home (Beans/Biji Kopi)
  - 🎁 Merchandise (Tumbler, dll)
- **Keranjang Belanja** - Sistem keranjang yang responsif dan mudah digunakan
- **Checkout** - Proses pembayaran yang streamlined
- **Struk Pembelian** - Generate receipt untuk setiap transaksi

### 👥 **Fitur Tambahan**
- **Membership System** - Tersedia (belum difungsikan sepenuhnya)
- **Responsive Design** - Optimal di semua perangkat

### 🎨 **Pendekatan Pengembangan**
- **Vanilla JavaScript** - Tanpa framework, menggunakan JavaScript murni
- **Custom CSS** - Styling handcrafted tanpa framework CSS
- **Progressive Enhancement** - Pengalaman yang tetap baik meski JavaScript dinonaktifkan
- **Mobile-First Design** - Responsif dari mobile hingga desktop

## 📁 Struktur Proyek

```
KedaiKopi_Narkopia/
├── index.html              # Halaman utama
├── css/                    # Styling Page
├── img/                    # Asset Gambar
├── js/
│   ├── checkout.js         # Fitur Checkout
│   ├── menu.js             # Logika Menu
│   ├── payment_success.js  # Cetak Struk Pembelian
│   ├── script.js           # Script Halaman Utama
│   ├── shop.js             # Logika Halaman kedua
│   └──swiper-bundle.min.js # Fitur Slides Menu dan Testimoni
├── checkout.html           # Halaman Checkout Keranjang
├── menu.html               # Halaman Menu Product
├── menu.json               # Dataset lokal informasi product
├── payment_success.html    # Halaman Struk Belanja
├── process_checkout.php    # Koneksi dan Input data database
└── README.md               # Dokumentasi proyek
```

## 🚀 Cara Menjalankan Proyek

### Prerequisites
- Web server dengan dukungan PHP (Laragon atau Xampp)
- Database MySQL
- Browser modern

### Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/fiveheisenberg/KedaiKopi_Narkopia.git
   cd KedaiKopi_Narkopia
   ```

2. **Setup database**
   - Import file database SQL (jika ada)
   - Konfigurasi koneksi database di `php/config.php`

3. **Jalankan server**
   ```bash
   # Jika menggunakan PHP built-in server
   php -S localhost:8000
   
   # Atau letakkan di folder htdocs XAMPP
   # dan akses melalui http://localhost/KedaiKopi_Narkopia
   ```

4. **Buka di browser**
   ```
   http://localhost:8000
   ```

## 🎯 Roadmap & Fitur Mendatang

- [ ] Implementasi penuh sistem membership
- [ ] Integrasi payment gateway
- [ ] Admin dashboard untuk manajemen produk
- [ ] Sistem notifikasi real-time
- [ ] PWA (Progressive Web App) support
- [ ] Multi-language support


## 👨‍💻 Developer

**Five Heisenberg**
- GitHub: [@fiveheisenberg](https://github.com/fiveheisenberg)
- Website: [Narkopia Coffee Shop](https://fiveheisenberg.github.io/KedaiKopi_Narkopia)

## 📞 Kontak & Dukungan

Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk:
- Membuka issue di repository ini
- Menghubungi melalui GitHub

---

⭐ **Jika proyek ini membantu Anda, berikan star pada repository ini!** ⭐

---

<div align="center">

**Made with ❤️ and ☕ by Five Heisenberg**

*Bringing the best coffee experience to your fingertips*

</div>
