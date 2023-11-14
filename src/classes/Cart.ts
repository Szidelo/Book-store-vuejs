import CartItem from "./CartItem";
import { ref } from "vue";

class Cart {
	public items = ref<CartItem[]>([]);

	private key = "orderedProducts";

	public saveToLocalStorage() {
		localStorage.setItem(this.key, JSON.stringify(this.items.value));
	}

	public addItem(item: CartItem) {
		const existingItemIndex = this.items.value.findIndex(
			(cartItem) => cartItem.product.id === item.product.id
		);

		if (existingItemIndex !== -1) {
			this.items.value[existingItemIndex].quantity += item.quantity;
		} else {
			this.items.value.push(item);
		}

		this.saveToLocalStorage();
	}

	public getItems() {
		return JSON.parse(localStorage.getItem(this.key) || "[]") as CartItem[];
	}

	public getTotal() {
		return this.items.value.reduce((acc, item) => {
			return acc + item.getPrice();
		}, 0);
	}

	public loadItems() {
		return this.getItems();
	}
}

// class Cart {
// 	private products: Product[] = [];

// 	private key = "orderedProducts";

// 	public setProducts() {
// 		this.products = this.getProducts();
// 	}

// 	public addItem(product: Product) {
// 		this.products.push(product);
// 		this.saveProducts();
// 	}

// 	public removeItem(productId: string) {
// 		const index = this.products.findIndex((product) => {
// 			return product.id === productId;
// 		});

// 		return this.products.slice(index, 1);
// 	}

// 	public saveProducts() {
// 		localStorage.setItem(this.key, JSON.stringify(this.products));
// 	}

// 	public getProducts() {
// 		return JSON.parse(localStorage.getItem(this.key) || "[]") as Product[];
// 	}
// }

export default Cart;
