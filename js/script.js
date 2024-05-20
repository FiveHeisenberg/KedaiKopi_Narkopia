// Fitur Humberger
let navbar = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger');

hamburger.onclick = (e) => {
    e.preventDefault(); // Menghentikan default action dari link
    navbar.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
}); 

// Ketika melakukan scroll saat membuka navbar, navbar akan ditutup
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Ketika discroll, muncul box shadow di bawah hero
let header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// Swipper JS
let swiperCards = new Swiper('.card__content', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Slide Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });
