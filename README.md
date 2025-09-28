# ☕ Narkopia - Coffee Shop Website

![Narkopia Banner](https://imgur.com/HuA9qB3)

> **Narkopia** adalah website kedai kopi modern yang dibangun dengan teknologi web fundamental tanpa framework, menawarkan pengalaman berbelanja kopi dan makanan secara online yang elegan dan user-friendly.

## 🌐 Live Demo

- **GitHub Pages**: [https://fiveheisenberg.github.io/KedaiKopi_Narkopia](https://fiveheisenberg.github.io/KedaiKopi_Narkopia)
- **Vercel**: [https://kedai-kopi-narkopia.vercel.app/](https://kedai-kopi-narkopia.vercel.app/)

## 📸 Preview

![Screenshot](https://imgur.com/WMNzIAA)

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
├── css/
│   ├── style.css          # Main stylesheet
│   └── responsive.css     # Media queries
├── js/
│   ├── main.js           # JavaScript utama
│   ├── cart.js           # Logika keranjang
│   └── filter.js         # Filter menu
├── php/
│   ├── config.php        # Konfigurasi database
│   └── process.php       # Pemrosesan data
├── assets/
│   ├── images/           # Gambar produk dan aset
│   └── icons/            # Icon dan logo
└── README.md             # Dokumentasi proyek
```

## 🚀 Cara Menjalankan Proyek

### Prerequisites
- Web server dengan dukungan PHP (XAMPP, WAMP, atau hosting)
- Database MySQL/MariaDB
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

## 🤝 Kontribusi

Kontribusi selalu diterima! Untuk berkontribusi:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request


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
