<template>
	<footer class="bg-blue d-flex flex-column align-items-center p-3 p-sm-5">
		<div class="container">
			<div class="container d-flex flex-column flex-xl-row gap-5 px-4">
				<div class="me-0 pe-0 me-sm-5 pe-sm-5">
					<base-logo></base-logo>
					<the-footer-socials></the-footer-socials>
				</div>
				<explore-links></explore-links>
				<address-links class="ms-xl-auto"></address-links>
			</div>
			<hr class="color-yellow" />
			<div class="container d-flex justify-content-center align-items-center">
				<p class="color-light">
					All rights reserved
					<span class="color-yellow">Szidelo Claudiu</span> @2023
				</p>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
import ExploreLinks from "./footer-links/ExploreLinks.vue";
import AddressLinks from "./footer-links/AddressLinks.vue";
import TheFooterSocials from "./TheFooterSocials.vue";

import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ExploreLinks,
		AddressLinks,
		TheFooterSocials,
	},
});
</script>

<style scoped>
.icon {
	width: 40px !important;
	height: 40px !important;
	color: var(--color-yellow);
	background-color: transparent;
	cursor: pointer;
}

.icon:hover {
	scale: 1.2;
}
</style>
