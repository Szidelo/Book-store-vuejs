<template>
	<section
		class="container-fluid d-flex flex-column align-items-center py-5 px-1"
	>
		<div class="container row px-0 px-md-2 px-xxl-5 py-5">
			<div class="d-flex gap-4 ms-4 mb-4">
				<base-button
					:class="
						category === 'all'
							? 'btn-link btn-link-active'
							: 'btn-link'
					"
					@click="category = 'all'"
					>All</base-button
				>
				<base-button
					:class="
						category === 'Printed Book'
							? 'btn-link btn-link-active'
							: 'btn-link'
					"
					@click="category = 'Printed Book'"
					>Printed</base-button
				>
				<base-button
					:class="
						category === 'Audio'
							? 'btn-link btn-link-active'
							: 'btn-link'
					"
					@click="category = 'Audio'"
					>Audio</base-button
				>
				<base-button
					:class="
						category === 'Audio CD + Printed Book'
							? 'btn-link btn-link-active'
							: 'btn-link'
					"
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
import { computed, defineComponent, onMounted, ref } from "vue";
import ProductList from "@/classes/ProductList";
export default defineComponent({
	components: {
		ProductCard,
	},

	setup() {
		// const products = ref<ListOfProducts>([]);

		// products.value = [
		// 	new Product(
		// 		"product1",
		// 		"Atomic One’s",
		// 		"assets/product-images/atomic1.jpg",
		// 		13.84,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Printed Book",
		// 		1
		// 	),
		// 	new Product(
		// 		"product2",
		// 		"Atomic One’s - Audio",
		// 		"assets/product-images/atomic2.png",
		// 		68.97,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Audio",
		// 		1
		// 	),
		// 	new Product(
		// 		"product3",
		// 		"Atomic One’s - CD",
		// 		"assets/product-images/atomic3.png",
		// 		27.95,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Audio CD + Printed Book",
		// 		1
		// 	),
		// 	new Product(
		// 		"product4",
		// 		"The Dark Light",
		// 		"assets/product-images/dark1.jpg",
		// 		86.11,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Printed Book",
		// 		1
		// 	),
		// 	new Product(
		// 		"product5",
		// 		"The Dark Light - Audio",
		// 		"assets/product-images/dark2.png",
		// 		73.22,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Audio",
		// 		1
		// 	),
		// 	new Product(
		// 		"product6",
		// 		"The Dark Light - CD",
		// 		"assets/product-images/dark3.png",
		// 		83.55,
		// 		"As the book contains theoretical content as well as solved questions.",
		// 		"Audio CD + Printed Book",
		// 		1
		// 	),
		// ];

		// const visibleProducts = ref<ListOfProducts>([]);

		const products = new ProductList();

		const category = ref("all");

		products.setProducts();

		console.log(products);

		// const showCategory = (category: string) => {
		// 	if (category === "all") {
		// 		return (visibleProducts.value = products.value);
		// 	}
		// 	visibleProducts.value = products.value.filter(
		// 		(product) => product.format === category
		// 	);

		// 	return visibleProducts.value;
		// };

		// onMounted(() => {
		// 	if (!localStorage.getItem("products")) {
		// 		setStorage("products", products.value);
		// 	}
		// 	showCategory("all");
		// });

		// return { products: visibleProducts, showCategory };

		onMounted(() => {
			products.saveProducts();
			products.sortByCategory(category.value);
		});

		return { products, category };
	},
});
</script>
