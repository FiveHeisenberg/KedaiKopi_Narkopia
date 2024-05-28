let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
        console.log("listCart from cookie:", listCart); // Debugging
    }
}

checkCart();
addCartToHTML();

function addCartToHTML() {
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';
    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    if (listCart.length) {
        listCart.forEach(product => {
            if (product) {
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = `
                <img src="img/item/${product.image}" loading="lazy">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="price">${product.price}K / ${product.quantity} product</div>
                </div>
                <div class="quantity">${product.quantity}</div>
                <div class="returnPrice">
                    ${product.price * product.quantity}K
                </div>`;
                listCartHTML.appendChild(newP);
                totalQuantity += product.quantity;
                totalPrice += product.price * product.quantity;
            }
        });
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerHTML = totalPrice + 'K';
}

function setCartCookie() {
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; path=/";
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('checkoutForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const orders = JSON.parse(localStorage.getItem('listCart'));

        console.log('listCart:', orders); // Debugging

        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]); 
        }

        formData.append('orders', JSON.stringify(orders));

        fetch('process_checkout.php', {
            method: 'POST',
            body: formData
        }).then(response => response.text()).then(response => {
            console.log('Response from server:', response); // Debugging
            // Create a temporary div to parse the response
            let tempDiv = document.createElement('div');
            tempDiv.innerHTML = response;
            
            // Append the parsed HTML content to the body
            document.body.innerHTML = tempDiv.innerHTML;

            // Extract and execute scripts from the response
            tempDiv.querySelectorAll('script').forEach(script => {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            });
        }).catch(error => {
            console.error('Error:', error);
        });
    });
});
