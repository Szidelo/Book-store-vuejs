<template>
	<footer class="bg-blue d-flex flex-column align-items-center p-3 p-sm-5">
		<div
			class="container d-flex flex-column flex-xl-row justify-content-center gap-5 w-100"
		>
			<div class="me-0 pe-0 me-sm-5 pe-sm-5">
				<base-logo></base-logo>
				<the-footer-socials></the-footer-socials>
			</div>
			<explore-links></explore-links>
			<utility-links></utility-links>
			<address-links></address-links>
		</div>
	</footer>
</template>

<script lang="ts">
import ExploreLinks from "./footer-links/ExploreLinks.vue";
import UtilityLinks from "./footer-links/UtilityLinks.vue";
import AddressLinks from "./footer-links/AddressLinks.vue";
import TheFooterSocials from "./TheFooterSocials.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ExploreLinks,
		UtilityLinks,
		AddressLinks,
		TheFooterSocials,
	},
});
</script>
