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
    window.location.href = 'menu.html'; // Redirect to the menu page
});
