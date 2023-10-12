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
</template>

<script lang="ts">
import ProductList from '../components/store/ProductList.vue'
import { defineComponent } from "vue";
export default defineComponent({
	components: {
		ProductList,
	},
});
</script>
