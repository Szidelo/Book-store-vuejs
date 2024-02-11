import CartItem from "./CartItem";
import { ref } from "vue";

class Cart {
	private items = ref<CartItem[]>([]);
	private key = "cart-items";
	private shipmentCost = 30;

	constructor() {
		this.items.value = this.getItems();
	}

	private saveToLocalStorage() {
		localStorage.setItem(this.key, JSON.stringify(this.items.value));
	}

	public addItem(item: CartItem) {
		const existingItemIndex = this.items.value.findIndex((cartItem) => cartItem.id === item.id);

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

	public getItemPrice(item: CartItem) {
		return +(item.price * item.quantity).toFixed(2);
	}

	public getShipmentCost() {
		return this.getTotal() < 100 && this.getTotal() !== 0 ? this.shipmentCost : 0;
	}

	public getTotal() {
		const total = this.items.value.reduce((acc, item) => {
			const itemPrice = +(item.price * item.quantity).toFixed(2);
			return acc + itemPrice;
		}, 0);

		return total;
	}

	public getTotalWithShipment() {
		return this.getTotal() < 100 ? this.getTotal() + this.getShipmentCost() : this.getTotal();
	}

	public getTotalQuantity() {
		return this.items.value.reduce((total, item) => {
			return (total += item.quantity);
		}, 0);
	}

	public removeItem(itemId: string) {
		const index = this.items.value.findIndex((item) => {
			return item.id === itemId;
		});

		this.items.value.splice(index, 1);

		if (this.items.value.length > 0) {
			this.saveToLocalStorage();
		} else {
			localStorage.removeItem(this.key);
		}
	}

	public updateQuantity(item: CartItem, newQuantity: number) {
		const index = this.items.value.findIndex((book) => {
			return book.id === item.id;
		});

		newQuantity < 1 ? 1 : newQuantity;

		this.items.value[index].quantity = newQuantity;

		this.saveToLocalStorage();
	}
}

export default Cart;
