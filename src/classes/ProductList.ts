import Product from "./Product";
import data from "../utils/data.json";

class ProductList {
	private products: Product[] = [];

	public setProducts() {
		this.products = data.products;
	}

	public getProducts() {
		return JSON.parse(
			localStorage.getItem("products") || "[]"
		) as Product[];
	}

	public saveProducts() {
		const localProducts = this.getProducts();

		if (localProducts.length < 6) {
			return localStorage.setItem(
				"products",
				JSON.stringify(this.products)
			);
		}
	}

    public sortByCategory(format: string) {
        if(format === 'all') {
            return this.products
        }
        const sortedProducts = this.products.filter((product) => {
            return product.format === format
        })

        console.log(sortedProducts)

        return sortedProducts
    }
}

export default ProductList;
