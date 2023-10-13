<template>
	<div @click="$emit('close')" class="background-div"></div>
	<div class="cart">
		<header
			class="d-flex justify-content-between align-items-center bg-yellow w-100 p-4"
		>
			<h4 class="color-white m-0">Your Cart</h4>
			<button class="close-btn" @click="$emit('close')">x</button>
		</header>
		<div class="p-3">
			<div class="w-100">
				<ul>
					<p v-if="!productsInCart" class="text-center">
						No Items In Your Card
					</p>
					<cart-item
						v-else
						v-for="product in orderedProducts"
						:key="product.id"
						:id="product.id"
						:title="product.title"
						:img="product.img"
						:price="price(product)"
						:quantity="product.quantity"
						@remove-item="removeItem(product.id)"
						@update-quantity="
                            updateQuantity(product, $event)
                        "
					></cart-item>
				</ul>
			</div>
			<div>
				<div class="d-flex justify-content-between">
					<p>Subtotal</p>
					<strong>$ {{ calculatedSubtotal.toFixed(2) }} USD</strong>
				</div>
				<base-button class="btn-yellow btn-xxl"
					>Continue To Checkout</base-button
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Product from "@/classes/Product";
import ListOfProducts from "../../types/ListOfProducts";
import CartItem from "./CartItem.vue";
import { defineComponent, inject, computed } from "vue";
export default defineComponent({
	components: {
		CartItem,
	},

	emits: ["close"],

	setup() {
		const orderedProducts = inject("orderedProducts") as ListOfProducts;

		const productsInCart = computed(() => {
			return orderedProducts.length > 0 ? 1 : 0;
		});

		const price = computed(() => {
			return (product: Product) => {
				return +(product.price * product.quantity).toFixed(2);
			};
		});

		const calculatedSubtotal = computed(() => {
			console.log(price.value)
			return orderedProducts.reduce((acc, product) => {
				return acc + price.value(product);
			}, 0);
		});

		const updateQuantity = (product: Product, newQuantity: number) => {
			const index = orderedProducts.findIndex(
				(item) => item.id === product.id
			);

			return orderedProducts[index].quantity = newQuantity;
		};

		const removeItem = (productId: string) => {
			const index = orderedProducts.findIndex(
				(item) => item.id === productId
			);

			return orderedProducts.splice(index, 1)
		};

		return {
			orderedProducts,
			removeItem,
			updateQuantity,
			calculatedSubtotal,
			productsInCart,
			price,
		};
	},
});
</script>

<style scoped>
.background-div {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}

.cart {
	position: fixed;
	top: 20%;
	left: 50%;
	transform: translateX(-50%);
	min-width: 480px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	background-color: var(--color-white);
	padding: 0;
}

.close-btn {
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 32px;
	font-weight: 700;
	color: var(--color-blue);
	padding-bottom: 10px;
}

ul {
	width: 100%;
	list-style: none;
	padding: 0;
}

@media (max-width: 576px) {
	.cart {
		position: fixed;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		min-width: 98%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		background-color: var(--color-white);
		padding: 0;
	}
}
</style>
