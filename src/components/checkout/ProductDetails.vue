<template>
	<h2 class="color-blue text-center mb-5">Cart Detials</h2>
	<div class="cart-detials bg-grayish-blue p-4">
		<div>
			<ul>
				<ProductDetialsCard
					v-for="item in orderedProducts.getItems()"
					:key="item.id"
					:img="item.img"
					:price="orderedProducts.getItemPrice(item)"
					:title="item.title"
					:description="item.description"
					:quantity="item.quantity"
				/>
			</ul>
		</div>
		<div>
			<div class="d-flex justify-content-between">
				<p class="mb-1">Books cost with VAT</p>
				<strong
					>$ {{ orderedProducts.getTotal().toFixed(2) }} USD</strong
				>
			</div>
			<div class="d-flex justify-content-between">
				<p class="mb-1">Shipping cost</p>
				<strong>$ {{ orderedProducts.getShipmentCost() }} USD</strong>
			</div>
			<div class="d-flex justify-content-between">
				<p class="mb-1">VAT amount (5%)</p>
				<strong
					>$
					{{
						(orderedProducts.getTotalWithShipment() * 0.05).toFixed(
							2
						)
					}}
					USD</strong
				>
			</div>
			<div class="d-flex justify-content-between">
				<p class="mb-1">Total cost</p>
				<strong
					>$
					{{ orderedProducts.getTotalWithShipment().toFixed(2) }}
					USD</strong
				>
			</div>
			
		</div>
	</div>
</template>

<script lang="ts">
import ProductDetialsCard from "./ProductDetialsCard.vue";
import Cart from "@/classes/Cart";
import { defineComponent, inject } from "vue";
export default defineComponent({
	components: {
		ProductDetialsCard,
	},

	setup() {
		const orderedProducts = inject("orderedProducts") as Cart;

		return { orderedProducts };
	},
});
</script>

<style scoped>
ul {
	list-style: none;
	padding: 0;
	max-height: 350px;
	overflow-y: scroll;
}
.cart-detials {
	box-shadow: 0px 5px 10px 0px rgba(4, 11, 20, 0.15);
    height: 550px;
}
</style>
