import Product from "./Product";

class CartItem {
    public product: Product;
    public quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    getPrice() {
        return +(this.product.price * this.quantity).toFixed(2)
    }
}

export default CartItem;
