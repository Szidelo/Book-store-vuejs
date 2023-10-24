import Product from "./Product";

class Cart {
    private products: Product[] = []

    private key = 'orderedProducts'

    setProducts() {
        this.products = this.getProducts()
    }
    
    addItem(product: Product) {
        this.products.push(product)
        this.saveProducts()
    }

    removeItem(productId: string) {
        const index = this.products.findIndex((product) => {
            return product.id === productId
        })

        return this.products.slice(index, 1)
    }

    saveProducts() {
        localStorage.setItem(this.key, JSON.stringify(this.products))
    }

    getProducts() {
        return JSON.parse(localStorage.getItem(this.key) || '[]') as Product[]
    }
}

export default Cart