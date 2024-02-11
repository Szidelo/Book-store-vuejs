<template>
	<section class="container-fluid py-5 px-0">
		<div class="container row mx-auto">
			<div class="col-12 col-xl-8">
				<CheckoutForm />
			</div>
			<div class="col-12 col-xl-4">
				<ProductDetails />
			</div>
		</div>
	</section>
	<the-footer />
</template>

<script lang="ts">
import CheckoutForm from "@/components/checkout/CheckoutForm.vue";
import ProductDetails from "@/components/checkout/ProductDetails.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: { CheckoutForm, ProductDetails },
});
</script>
