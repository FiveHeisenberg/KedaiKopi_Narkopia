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
    
    // Custom format for time
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

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

document.getElementById('backToMenu').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    deleteCookie('listCart'); // Delete the cookie
});

document.getElementById('submitRating').addEventListener('click', function() {
    if (selectedRating > 0) {
        console.log('Rating submitted:', selectedRating);
        // Kirim rating ke server
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "submit_rating.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        let idCustomer = sessionStorage.getItem('idCustomer'); // Pastikan idCustomer tersedia di sessionStorage
        xhr.send("id_customer=" + idCustomer + "&rating=" + selectedRating);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('ratingModal').style.display = 'none'; // Hide the rating modal
                document.getElementById('thankYouModal').style.display = 'block'; // Show the thank you modal
            }
        };
    } else {
        alert('Please select a rating before submitting.');
    }
});

