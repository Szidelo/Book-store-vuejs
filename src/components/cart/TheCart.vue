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
			<div class="cart-content w-100">
				<ul>
					<p
						v-if="!productsInCart"
						class="text-center"
					>
						No Items In Your Card
					</p>
					<cart-item-row
						v-else
						v-for="item in orderedProducts.getItems()"
						:key="item.product.id"
						:id="item.product.id"
						:title="item.product.title"
						:img="item.product.img"
						:price="price(item)"
						:quantity="item.quantity"
						@remove-item="
							orderedProducts.removeItem(item.product.id)
						"
						@update-quantity="
							orderedProducts.updateQuantity(item, $event)
						"
					></cart-item-row>
				</ul>
			</div>
			<div>

				<div class="d-flex justify-content-between">
					<p class="mb-1">Books cost with VAT</p>
					<strong>$ {{ orderedProducts.getTotal().toFixed(2) }} USD</strong>
				</div>
				<div class="d-flex justify-content-between">
					<p class="mb-1">Shipping cost</p>
					<strong>$ {{ orderedProducts.getShipmentCost() }} USD</strong>
				</div>
				<div class="d-flex justify-content-between">
					<p class="mb-1">VAT amount (5%)</p>
					<strong>$ {{ (orderedProducts.getTotalWithShipment() * 0.05).toFixed(2) }} USD</strong>
				</div>
				<div class="d-flex justify-content-between">
					<p class="mb-1">Total cost</p>
					<strong>$ {{ orderedProducts.getTotalWithShipment().toFixed(2) }} USD</strong>
				</div>
				<base-button class="btn-yellow btn-xxl mt-2"
					>Continue To Checkout</base-button
				>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import CartItem from "@/classes/CartItem";
import CartItemRow from "./CartItemRow.vue";
import Cart from "@/classes/Cart";
import { defineComponent, inject, computed } from "vue";
export default defineComponent({
	components: {
		CartItemRow,
	},

	emits: ["close"],

	setup() {
		const orderedProducts = inject("orderedProducts") as Cart;
		
		const productsInCart = computed(() => {
			return orderedProducts.getTotal() > 0 ? 1 : 0;
		});
		
		const price = computed(() => {
			return (item: CartItem) => {
				return +(item.product.price * item.quantity).toFixed(2);
			};
		});

		return {
			orderedProducts,
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
	top: 15%;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	max-width: 600px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	background-color: var(--color-white);
	padding: 0;
}

.cart-content {
	max-height: 40vh;
	overflow-y: scroll;
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
</style>
