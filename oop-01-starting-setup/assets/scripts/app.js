class Product {
	constructor(title, image, desc, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = desc;
		this.price = price;
	}
}

class ShoppingCart {
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
	}

	get totalAmount() {
		const sum = this.items.reduce(function (prevValue, curItem) {
			return prevValue + curItem.price;
		}, 0);
		return sum;
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.unshift(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = document.createElement('section');
		cartEl.innerHTML = `
			<h2>Total: \$${0}</h2>
			<button>Order Now!</button>
		`;
		cartEl.className = 'cart';
		this.totalOutput = cartEl.querySelector('h2');
		return cartEl;
	}
}

class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log('Adding product to cart...');
		console.log(this.product);
		App.addProductToCart(this.product);
	}

	render() {
		const prodEl = document.createElement('li');
		prodEl.className = 'product-item';
		prodEl.innerHTML = `
		  <div>
			<img src="${this.product.imageUrl}" alt="${this.product.title}" >
			<div class="product-item__content">
			  <h2>${this.product.title}</h2>
			  <h3>\$${this.product.price}</h3>
			  <p>${this.product.description}</p>
			  <button>Add to Cart</button>
			</div>
		  </div>
		`;
		const addCartBtn = prodEl.querySelector('button');
		addCartBtn.addEventListener('click', this.addToCart.bind(this));
		return prodEl;
	}
}

class ProductList {
	products = [
		new Product(
			'A Pillow',
			'https://media.sheridanoutlet.com.au/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/1/7/1700x1700_fresh-loft-pillow-white.jpg?impolicy=original',
			'A soft pillow!',
			19.99
		),
		new Product(
			'A Carpet',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
			'A carpet which you might like - or not.',
			89.99
		),
	];

	constructor() {}

	render() {
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';
		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.append(prodEl);
		}
		return prodList;
	}
}

class Shop {
	render() {
		const renderHook = document.getElementById('app');

		this.cart = new ShoppingCart();
		const cartEl = this.cart.render();
		const productList = new ProductList();
		const prodListEl = productList.render();

		renderHook.append(cartEl);
		renderHook.append(prodListEl);
	}
}

class App {
	static cart;

	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.cart;
	}

	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();
