<template>
	<section>
		<base-dialog
			v-if="productIsAdded"
			@close="closeDialog"
			title="Info"
		>
			<h6>{{ currentProduct.title }} Was Added To Your Cart!</h6>
		</base-dialog>
		<div
			:id="currentProduct.id"
			class="d-flex flex-column flex-xl-row align-items-center justify-content-center column-gap-4 my-5 py-4"
		>
			<div class="img-container">
				<img
					class="img-fluid product-book"
					:src="currentProduct.img"
					alt=""
				/>
			</div>
			<div class="p-3">
				<h2>{{ currentProduct.title }}</h2>
				<strong class="py-4">$ {{ currentProduct.price }} USD</strong>
				<p>{{ currentProduct.description }}</p>
				<div>
					<p><span>Book Type: </span>{{ currentProduct.format }}</p>
					<p><span>Publisher: </span>The Hilton Book</p>
					<p><span>Language: </span>English</p>
					<p><span>Paperback: </span>254</p>
					<p><span>ISBN-10: </span>98547152365</p>
					<p><span>Dimension: </span>20 x 14 x 4cm</p>
				</div>
				<div class="row row-gap-3">
					<div class="col-12 col-md-3">
						<input
							class="fw-bold"
							type="number"
							placeholder="0"
							v-model="enteredNumberOfProducts"
							min="1"
						/>
					</div>
					<div class="col-12 col-md-9">
						<base-button
							@click="addToCart"
							class="btn-yellow btn-xxl"
							>Add To Cart</base-button
						>
					</div>
				</div>
			</div>
		</div>
	</section>
	<ProductExtra/>
	<ProductShipment/>
	<the-footer></the-footer>
</template>

<script lang="ts">
import ProductExtra from "./ProductExtra.vue";
import ProductShipment from "./ProductShipment.vue";
import Product from "@/classes/Product";
import { useRoute } from "vue-router";
import { defineComponent, ref, reactive, inject } from "vue";
import ListOfProducts from "@/types/ListOfProducts";
export default defineComponent({
	name: "ProductContent",
	components: {
		ProductExtra,
		ProductShipment
	},
	setup() {
		const products = JSON.parse(
			localStorage.getItem("products") || "[]"
		) as ListOfProducts;

		const orderedProducts = inject("orderedProducts") as ListOfProducts;

		const productIsAdded = ref<boolean>(false);

		const enteredNumberOfProducts = ref<number>(1);

		let currentProduct = reactive<Product>({
			id: "",
			title: "",
			img: "",
			price: 0,
			description: "",
			format: "",
			quantity: 0,
		});

		const route = useRoute();

		const findProducts = () => {
			const foundProducts = products.filter((product) => {
				return product.id === route.params.productId;
			});

			return (currentProduct = { ...foundProducts[0] });
		};

		const addToCart = () => {
			const product: Product = {
				id: currentProduct.id,
				title: currentProduct.title,
				img: currentProduct.img,
				price: currentProduct.price,
				description: currentProduct.description,
				format: currentProduct.format,
				quantity: enteredNumberOfProducts.value,
			};

			const index = orderedProducts.findIndex(
				(item) => item.id === product.id
			);

			if (index !== -1) {
				orderedProducts[index].quantity +=
					enteredNumberOfProducts.value;
				localStorage.setItem(
					"orderedProducts",
					JSON.stringify(orderedProducts)
				);
				return (productIsAdded.value = true);
			}

			orderedProducts.push(product);

			localStorage.setItem(
				"orderedProducts",
				JSON.stringify(orderedProducts)
			);

			return (productIsAdded.value = true);
		};

		const closeDialog = () => {
			return (productIsAdded.value = false);
		};

		findProducts();

		return {
			productIsAdded,
			currentProduct,
			enteredNumberOfProducts,
			addToCart,
			closeDialog,
		};
	},
});
</script>

<style scoped>
.product-book {
	height: auto;
	width: 600px;
}

span {
	color: var(--color-blue);
	font-weight: 700;
	margin-right: 10px;
}

strong {
	font-size: 30px;
	color: var(--color-yellow);
	font-family: Inter;
	font-weight: 700;
}

input {
	font-family: "Inter", sans-serif;
	font-size: 24px;
	border: 2px solid var(--color-yellow);
	height: 100%;
	min-height: 65px;
	width: 100%;
	color: var(--color-blue);
	text-align: center;
}
</style>
