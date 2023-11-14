<template>
	<div
		@click="$emit('close')"
		class="background-div"
	></div>
	<div class="cart">
		<header
			class="d-flex justify-content-between align-items-center bg-yellow w-100 p-4"
		>
			<h4 class="color-white m-0">Your Cart</h4>
			<button
				class="close-btn"
				@click="$emit('close')"
			>
				x
			</button>
		</header>
		<div class="p-3">
			<div class="w-100">
				<ul>
					<p
						v-if="!productsInCart"
						class="text-center"
					>
						No Items In Your Card
					</p>
					<cart-item-row
						v-else
						v-for="item in cartItems"
						:key="item.product.id"
						:id="item.product.id"
						:title="item.product.title"
						:img="item.product.img"
						:price="price(item)"
						:quantity="item.quantity"
						@remove-item="removeItem(item)"
						@update-quantity="updateQuantity(item, $event)"
					></cart-item-row>
				</ul>
			</div>
			<div>
				<div class="d-flex justify-content-between">
					<p>Subtotal</p>
					<strong>$ {{ totalPrice }} USD</strong>
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
import CartItem from "@/classes/CartItem";
import CartItemRow from "./CartItemRow.vue";
import Cart from "@/classes/Cart";
import { defineComponent, inject, computed } from 'vue';
export default defineComponent({
	components: {
		CartItemRow,
	},

	emits: ["close"],

	setup() {
		const orderedProducts = inject("orderedProducts") as Cart;

		const cartItems = computed(() => {
			return orderedProducts.getItems()
		})

		const productsInCart = computed(() => {
			return orderedProducts.getItems().length > 0 ? 1 : 0;
		});

		const price = computed(() => {
			return (item: CartItem) => {
				return +(item.product.price * item.quantity).toFixed(2)
			};
		});

		const totalPrice = computed(() => {
			return orderedProducts.getTotal()
		})

		const removeItem = (item: CartItem) => {
			return item
		}

		const updateQuantity = (item: CartItem, newQuantity: number) => {
			return item.quantity + newQuantity
		};

		return {
			cartItems,
			productsInCart,
			removeItem,
			updateQuantity,
			price,
			totalPrice
		}
	}
})
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
