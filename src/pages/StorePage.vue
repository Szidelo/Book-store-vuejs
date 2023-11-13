<template>
	<the-header title="Our Store">
		<template v-slot:text>
			<p class="text-center">
				We believe that bookstores are essential to a healthy <br />
				culture around readers & authors.
			</p>
		</template>
	</the-header>
	<product-list></product-list>
	<SubscribeSection />
	<TheChapter />
	<the-footer />
</template>

<script lang="ts">
import ProductList from "../components/store/ProductList.vue";
import SubscribeSection from "@/components/homepage/SubscribeSection.vue";
import TheChapter from "@/components/homepage/TheChapter.vue";
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ProductList,
		SubscribeSection,
		TheChapter,
	},
});
</script>
