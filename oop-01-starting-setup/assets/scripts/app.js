class Product {
	constructor(title, image, desc, price) {
	  this.title = title;
	  this.imageUrl = image;
	  this.description = desc;
	  this.price = price;
	}
  }
  
  class ProductItem {
	constructor(product) {
	  this.product = product;
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
	  )
	];
  
	constructor() {}
  
	render() {
	  const renderHook = document.getElementById('app');
	  const prodList = document.createElement('ul');
	  prodList.className = 'product-list';
	  for (const prod of this.products) {
		const productItem = new ProductItem(prod);
		const prodEl = productItem.render();
		prodList.append(prodEl);
	  }
	  renderHook.append(prodList);
	}
  }
  
  const productList = new ProductList();
  productList.render();
  