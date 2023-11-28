import Product from "./Product";

class CartItem extends Product {
	public quantity: number;

	constructor(product: Product, quantity: number) {
		super(
			product.id,
			product.title,
			product.img,
			product.price,
			product.description,
			product.format
		);
		this.quantity = quantity;
	}
}

export default CartItem;
