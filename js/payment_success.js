document.addEventListener('DOMContentLoaded', function() {
    const customerName = sessionStorage.getItem('customerName');
    const customerPhone = sessionStorage.getItem('customerPhone');
    const pickupMethod = sessionStorage.getItem('pickupMethod');
    const totalItems = sessionStorage.getItem('totalItems');
    const totalPrice = sessionStorage.getItem('totalPrice');

    document.getElementById('customerName').innerText = customerName;
    document.getElementById('customerPhone').innerText = customerPhone;
    document.getElementById('pickupMethod').innerText = pickupMethod;
    document.getElementById('totalItems').innerText = totalItems;
    document.getElementById('totalPrice').innerText = totalPrice;
});
