document.addEventListener('DOMContentLoaded', function() {
    let customerName = sessionStorage.getItem('customerName');
    let customerPhone = sessionStorage.getItem('customerPhone');
    let pickupMethod = sessionStorage.getItem('pickupMethod');
    let totalItems = sessionStorage.getItem('totalItems');
    let totalPrice = sessionStorage.getItem('totalPrice');
    
    let currentDateTime = new Date();
    let formattedDate = currentDateTime.toLocaleDateString('id-ID', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    
    // Custom format waktu
    let hours = currentDateTime.getHours().toString().padStart(2, '0');
    let minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    let formattedTime = `${hours}.${minutes} WIB`;

    document.getElementById('customerName').innerText = customerName;
    document.getElementById('customerPhone').innerText = customerPhone;
    document.getElementById('pickupMethod').innerText = pickupMethod;
    document.getElementById('totalItems').innerText = totalItems + ' Pcs';
    document.getElementById('totalPrice').innerText = totalPrice + 'K';
    document.getElementById('paymentDate').innerText = formattedDate;
    document.getElementById('paymentTime').innerText = formattedTime;
});

// Ketika ingin print struk, tombol akan menghilang
function handlePrintClick() {
    document.getElementById("button").style.display = "none";
    window.print();
}

// Ketika sudah print struk, tombol akan mencul kembali
window.addEventListener("afterprint", function() {
    document.getElementById("button").style.display = "block";
});

// Ketika tombol "Kembali ke menu di klik, akan muncul pop up"
document.getElementById('backToMenu').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.getElementById('ratingModal').style.display = 'block'; // Menampilkan Popup Rating
});

const stars = document.querySelectorAll('.rating i');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        selectedRating = this.getAttribute('data-value');
        updateStars(selectedRating);
    });

    star.addEventListener('mouseover', function() {
        updateStars(this.getAttribute('data-value'));
    });

    star.addEventListener('mouseout', function() {
        updateStars(selectedRating);
    });
});

function updateStars(rating) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected');
            star.classList.remove('hovered');
        } else {
            star.classList.remove('selected');
            star.classList.remove('hovered');
        }
    });
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('ratingModal').style.display = 'none'; // Hide the modal
});

document.getElementById('submitRating').addEventListener('click', function() {
    let customerId = sessionStorage.getItem('customerId'); // Pastikan customerId sudah disimpan di sessionStorage
    
    if (!customerId) {
        alert('Customer ID not found.');
        return;
    }

    if (selectedRating > 0) {
        fetch('submit_rating.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `id_customer=${customerId}&rating=${selectedRating}`
        })
        .then(response => response.text())
        .then(data => {
            console.log('Rating submitted:', data);
            document.getElementById('ratingModal').style.display = 'none'; // Hide pop rating
            document.getElementById('thankYouModal').style.display = 'block'; // menampilkan pop up ucapan
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    } else {
        alert('Please select a rating before submitting.');
    }
});

document.getElementById('goToMenu').addEventListener('click', function() {
    document.getElementById('thankYouModal').style.display = 'none'; // Hide pop up 
    deleteCookie('listCart'); // menghapus cookie
    window.location.href = 'menu.html'; // menggarah ke menu.html
});

window.onclick = function(event) {
    if (event.target == document.getElementById('ratingModal')) {
        document.getElementById('ratingModal').style.display = 'none'; // Hide the modal
    }
};

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}
