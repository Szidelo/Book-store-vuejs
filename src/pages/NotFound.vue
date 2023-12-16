<template>
	<the-header title="Page Error">
		<template v-slot:text>
			<p class="text-center">
				The page you are looking for doesn't exist. Please try searching
				for some other page, <br />or return to the website's homepage
				to find what you're looking for.
			</p>
		</template>
	</the-header>
	<section
		class="container-fluid d-flex flex-column justify-content-center align-items-center py-0 px-0"
	>
		<img
			:src="notFoundImg"
			alt="not found"
		/>
		<h3 class="color-blue font-cardo text-center my-4">Page Not Found!</h3>
		<p class="text-center">
			The page you are looking for doesn't exist. Please try searching for
			some other page, or return to the website's homepage to find what
			you're looking for.
		</p>
		<router-link to="/">
			<base-button class="btn-yellow btn-sm">
				Back To Homepage
			</base-button>
		</router-link>
	</section>
	<the-footer />
</template>

<script lang="ts">
import notFoundImg from "../assets/404-images/404.svg";
import { defineComponent } from "vue";
export default defineComponent({
	setup() {
		return { notFoundImg };
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
</style>
