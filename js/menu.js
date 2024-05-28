// Fitur Navbar
const mobile = document.querySelector('#hamburger');
const mobilelink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active");
});

// Jika yang diklik bukan bagian dari navbar dan navbar serta hamburger sedang terbuka, tutup navbar
document.addEventListener("click", function(event) {
    const isMobileActive = mobile.classList.contains("is-active");
    const isSidebarActive = mobilelink.classList.contains("active");
    if (!mobile.contains(event.target) && !mobilelink.contains(event.target) && isMobileActive && isSidebarActive) {
        mobile.classList.remove("is-active");
        mobilelink.classList.remove("active");
    }
});

// Ketika melakukan scroll saat membuka navbar, navbar akan ditutup
window.onscroll = () => {
    mobile.classList.remove("is-active");
    mobilelink.classList.remove("active");
}

// Fix Bug CSS tidaK ke load dari shop.html
document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Cart
function toggleCart() {
    var cartPopup = document.getElementById("cart-popup");
    var body = document.body;
    if (cartPopup.style.display === "block") {
        cartPopup.style.display = "none";
        body.classList.remove("blur");
    } else {
        cartPopup.style.display = "block";
        // Menampilkan informasi keranjang Dengan Fungsi
        displayCartItems();
    }
}

// Fungsi Periksa jika keranjang kosong akan muncul notifikasi
function validateCheckout() {
    // Periksa apakah keranjang kosong
    if (listCart.length === 0) {
        showCheckoutNotification();
    } else {
        window.location.href = "checkout.html";
    }
}

// Fungsi Notifikasi muncul jika keranjang muncul
function showCheckoutNotification() {
    const notification = document.getElementById('checkout-notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000); // Notifikasi akan hilang setelah 3 detik
}