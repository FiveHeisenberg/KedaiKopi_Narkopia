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

// Fix Bug CSS tida ke load dari shop.html
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
        // Tambahkan kelas "blur" hanya jika popup keranjang ditampilkan
        body.classList.add("blur");
        // Tambahkan logika untuk menampilkan informasi keranjang di sini
        displayCartItems();
    }
}