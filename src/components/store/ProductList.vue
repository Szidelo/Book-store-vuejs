<template>
	<base-dialog
		v-if="productIsAdded"
		@close="closeDialog"
		title="Info"
	>
		<h6>{{ productTitle }} Was Added To Your Cart!</h6>
	</base-dialog>
	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1"
	>
		<div class="container row px-0 px-md-2 px-xxl-5 py-5">
			<div class="category-links d-flex flex-column flex-sm-row gap-3 ms-sm-4 mb-3 p-0">
				<base-button
					:class="setActiveLink('all')"
					@click="category = 'all'"
					>All</base-button
				>
				<base-button
					:class="setActiveLink('Printed Book')"
					@click="category = 'Printed Book'"
					>Printed</base-button
				>
				<base-button
					:class="setActiveLink('Audio')"
					@click="category = 'Audio'"
					>Audio</base-button
				>
				<base-button
					:class="setActiveLink('Audio CD + Printed Book')"
					@click="category = 'Audio CD + Printed Book'"
				>
					Audio & Printed
				</base-button>
			</div>
			<hr />
			<product-card
				v-for="product in products.sortByCategory(category)"
				:key="product.id"
				:id="product.id"
				:title="product.title"
				:description="product.description"
				:format="product.format"
				:price="product.price"
				:img="product.img"
				@add-product="addProduct(product)"
				@set-format="category = product.format"
			></product-card>
		</div>
	</section>
</template>

<script lang="ts">
import ProductCard from "@/components/store/ProductCard.vue";
import ProductList from "@/classes/ProductList";
import Cart from "@/classes/Cart";
import CartItem from "@/classes/CartItem";
import Product from "@/classes/Product";
import { defineComponent, onMounted, ref, inject } from "vue";
export default defineComponent({
	components: {
		ProductCard,
	},

	setup() {
		const productIsAdded = ref(false);

		const closeDialog = () => {
			return (productIsAdded.value = false);
		};

		const productTitle = ref("");

		const orderedProducts = inject("orderedProducts") as Cart;

		const addProduct = (product: Product) => {
			const item = new CartItem(product, 1);
			orderedProducts.addItem(item);
			productTitle.value = product.title;
			productIsAdded.value = true;
		};

		const products = new ProductList();

		const category = ref("all");

		const setActiveLink = (val: string) => {
			return category.value === val
				? "btn-link btn-link-active"
				: "btn-link";
		};

		products.setProducts();

		onMounted(() => {
			products.saveProducts();
			products.sortByCategory(category.value);
		});

		return {
			productTitle,
			productIsAdded,
			products,
			orderedProducts,
			category,
			closeDialog,
			setActiveLink,
			addProduct,
		};
	},
});
</script>

<style scoped>
.category-links {
	overflow-x: scroll;
}

@media (max-width: 400px) {
	a {
		font-size: 8px !important;
	}
}
</style>
