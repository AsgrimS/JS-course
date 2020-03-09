const ballBtn = document.getElementById('ball');
const sodaBtn = document.getElementById('soda');
const cartList = document.getElementById('cart-list');
const cartHeader = document.getElementById('cart-header');

const BALL = 'ball';
const SODA = 'soda';


function addItemToCart(item) {
	const node = document.createElement('LI');
	const itemNameNode = document.createTextNode(item);

	node.classList.add('item-cart');
	node.appendChild(itemNameNode);
	cartList.appendChild(node);
}

function increaseCounter() {
	const itemsInCart = document.querySelectorAll(".item-cart")
	cartHeader.textContent = 'items in cart: ' + itemsInCart;
}

ballBtn.addEventListener('click', function() {
	addItemToCart(BALL);
	increaseCounter();
});
sodaBtn.addEventListener('click', function() {
	addItemToCart(SODA);
	increaseCounter();
});
