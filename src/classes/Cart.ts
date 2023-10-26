import Product from "./Product";

class Cart {
	private products: Product[] = [];

	private key = "orderedProducts";

	public setProducts() {
		this.products = this.getProducts();
	}

	public addItem(product: Product) {
		this.products.push(product);
		this.saveProducts();
	}

	public removeItem(productId: string) {
		const index = this.products.findIndex((product) => {
			return product.id === productId;
		});

		return this.products.slice(index, 1);
	}

	public saveProducts() {
		localStorage.setItem(this.key, JSON.stringify(this.products));
	}

	public getProducts() {
		return JSON.parse(localStorage.getItem(this.key) || "[]") as Product[];
	}
}

export default Cart;
