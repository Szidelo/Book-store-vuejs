<template>
	
	<section
		class="container-fluid d-flex flex-column justify-content-center align-items-center py-0 px-0"
	>
		<img
			:src="successImg"
			alt="not found"
		/>
		<h3 class="color-blue font-cardo text-center my-4">Thank you for the purchase!</h3>
		<router-link to="/">
			<base-button class="btn-yellow btn-sm">
				Back To Homepage
			</base-button>
		</router-link>
	</section>
	<the-footer />
</template>

<script lang="ts">
import successImg from '../assets/check.svg'
import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		return { successImg };
	},
});
</script>

<style scoped>
section {
	background-image: url("../assets/404-images/404-bg.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 800px;
}

section p {
	max-width: 600px;
}

img {
    height: auto;
    width: 80px;
}
</style>
