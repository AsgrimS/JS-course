const productList = {
	products: [
		{
			title: 'Pillow',
			imageUrl:
				'https://media.sheridanoutlet.com.au/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/1/7/1700x1700_fresh-loft-pillow-white.jpg?impolicy=original',
			price: 19.99,
			description: 'A soft pillow!',
		},
		{
			title: 'Carpet',
			imageUrl:
				'https://kilimmalatya.com/content/images/thumbs/0001160_sivas-prison-carpet.jpeg',
			price: 89.99,
			description: 'A colorfull carpet!',
		},
		{
			title: 'Chair',
			imageUrl:
				'https://cdn-images.article.com/products/SKU238/2890x1500/image42441.jpg?fit=max&w=1920&q=50',
			price: 30,
			description: 'A comfortable chair!',
		},
	],
	redner() {
		const renderHook = document.getElementById('app');
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';
		for (const prod of this.products) {
			const prodEl = document.createElement('li');
			prodEl.className = 'product-item';
			prodEl.innerHTML = `
            <div>
                <img src="${prod.imageUrl}" alt="${prod.title}">
                <div class="product-item__content">
                <h2>${prod.title}</h2>
                <h3>\$${prod.price}</h3>
                <p>${prod.description}</p>
                <button>Add to Cart</button>
                </div>
            </div>
            `;
			prodList.append(prodEl);
		}
		renderHook.append(prodList);
	},
};

productList.redner();