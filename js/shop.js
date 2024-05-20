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



let swiperCards = new Swiper('.pro-container.swiper', {
    pagination: '.pro-container.swiper',
    slidesPerView: 3,
    slideToClickedSlide: true,
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView : 'auto',
  
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
        430: {
            slidesPerView: 4,
        },
        268: {
            slidesPerView : 3,
        },
        
    },

    // breakpoints: {
    //     1000: {
    //         slidesPerView: 3,
    //     },
    //     968: {
    //         slidesPerView: 3,
    //     },
    //     948: {
    //         slidesPerView: 3,
    //     },
    //     936: {
    //         slidesPerView: 3,
    //     },
    //     914: {
    //         slidesPerView: 3,
    //     },
    //     857: {
    //         slidesPerView: 4,
    //     },
        // 768: {
        //     slidesPerView : 2,
        // },
    // },
});

