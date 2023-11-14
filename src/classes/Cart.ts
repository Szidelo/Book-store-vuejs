import CartItem from "./CartItem";
import { ref } from "vue";

class Cart {
    private items = ref<CartItem[]>([]);
    private key = "cart-items";

    constructor() {
        this.items.value = this.getItems();
    }

    private saveToLocalStorage() {
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
            const itemPrice = +(item.product.price * item.quantity).toFixed(2);
            return acc + itemPrice;
        }, 0);
    }

    public loadItems() {
        return this.getItems();
    }
}

export default Cart;
