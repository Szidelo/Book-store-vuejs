<template>
	<div class="d-flex gap-2 me-2 me-xl-5 align-items-center">
		<a href="">
			<img class="mb-2" :src="logo" alt="" />
		</a>
		<h5>Pages</h5>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Logo from "../../assets/logo.png";
export default defineComponent({
	setup() {
		const logo = Logo;

		return { logo };
	},
});
</script>

<style scoped>
h5 {
	color: var(--color-white);
	font-family: Inter;
	font-size: 28px;
	font-style: normal;
	font-weight: 700;
	line-height: 35px;
}
</style>
