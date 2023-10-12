<template>
	<div
		v-for="product in products"
		:key="product.id"
		class="col-12 col-lg-6 col-xxl-4 p-4"
	>
		<div class="card mb-4">
			<div class="card__img-container">
				<img class="img-fluid" :src="product.img" alt="" />
			</div>
			<div
				class="card-body d-flex flex-column justify-content-between h-100 p-3"
			>
				<div class="card__header">
					<h5 class="color-blue py-3">{{ product.title }}</h5>
				</div>
				<div>
					<strong>${{ product.price }} USD</strong>
				</div>
				<div>
					<p>
						{{ product.description }}
					</p>
				</div>
				<div class="d-flex">
					<div class="mt-3 me-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<circle cx="8" cy="8" r="8" fill="#FFCA42" />
						</svg>
					</div>

					<h5 class="color-blue py-3">{{ product.format }}</h5>
				</div>
				<div>
					<router-link :to="'/store/' + product.id">
						<base-button class="btn-white btn-sm">Order Now</base-button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import ListOfProducts from "../../types/ListOfProducts";
import { defineComponent, PropType } from "vue";
export default defineComponent({
	props: {
		products: {
			type: Object as PropType<ListOfProducts>,
			required: true,
		},
	},
});
</script>

<style scoped>
.card {
	border: none;
}

h5 {
	font-size: 26px;
}

strong {
	font-size: 22px;
	color: var(--color-yellow);
	font-family: Inter;
	font-weight: 700;
}

a {
	text-decoration: none;
}

img {
	height: auto;
	width: 100%;
}
</style>
