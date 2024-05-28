document.addEventListener('DOMContentLoaded', function() {
    let customerName = sessionStorage.getItem('customerName');
    let customerPhone = sessionStorage.getItem('customerPhone');
    let pickupMethod = sessionStorage.getItem('pickupMethod');
    let totalItems = sessionStorage.getItem('totalItems');
    let totalPrice = sessionStorage.getItem('totalPrice');

    document.getElementById('customerName').innerText = customerName;
    document.getElementById('customerPhone').innerText = customerPhone;
    document.getElementById('pickupMethod').innerText = pickupMethod;
    document.getElementById('totalItems').innerText = totalItems;
    document.getElementById('totalPrice').innerText = totalPrice;
});

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}

document.getElementById('backToMenu').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action
    deleteCookie('listCart'); // Delete the cookie
    window.location.href = 'menu.html'; // Redirect to the menu page
});