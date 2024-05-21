let listCart = [];

function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
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

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newP = document.createElement('div');
                newP.classList.add('item');
                newP.innerHTML = `
                <img src="img/item/${product.image}">
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
