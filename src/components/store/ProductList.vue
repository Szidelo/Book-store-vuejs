<template>
	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1"
	>
		<div class="container row px-0 px-md-2 px-xxl-5 py-5">
			<div class="d-flex gap-4 ms-4 mb-4">
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
			></product-card>
		</div>
	</section>
</template>

<script lang="ts">
import ProductCard from "@/components/store/ProductCard.vue";
import {defineComponent, onMounted, ref } from "vue";
import ProductList from "@/classes/ProductList";
export default defineComponent({
	components: {
		ProductCard,
	},

	setup() {
		const products = new ProductList();

		const category = ref("all");

		const setActiveLink = (val: string) => {
			return category.value === val ? 'btn-link btn-link-active' : 'btn-link'
		}

		products.setProducts();

		onMounted(() => {
			products.saveProducts();
			products.sortByCategory(category.value);
		});

		return { products, category, setActiveLink };
	},
});
</script>
