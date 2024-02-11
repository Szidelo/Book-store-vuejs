<template>
	<li class="mb-3">
		<div class="cart-item d-flex">
			<div class="image-wrapper me-3">
				<img class="cart-image image-fluid" :src="img" alt="product image" />
			</div>
			<div class="cart-content d-flex flex-column justify-content-center">
				<h5>{{ price }} USD</h5>
				<h4>{{ title }}</h4>
				<strong>Quantity: {{ quantity }}</strong>
			</div>
		</div>
	</li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: ["img", "price", "title", "quantity"],
});
</script>

<style scoped>
li {
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.cart-image {
	height: 150px;
	width: auto;
	object-fit: cover;
}

h4 {
	font-size: 21px;
}
</style>
