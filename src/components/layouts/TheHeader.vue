<template>
	<header class="bg-blue d-flex flex-column justify-content-center">
		<slot>
			<h2 class="banner-title">{{ title }}</h2>
		</slot>
		<div class="d-flex">
			<img
				src="../../assets/Line.png"
				alt=""
			/>
		</div>
		<slot name="text"> </slot>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
header {
	min-height: 45vh;
	gap: 30px;
	padding: 60px;
}
.banner-title {
	color: #f5f8fc;
	text-align: center;
	font-size: 50px !important;
	line-height: 55px;
	letter-spacing: -1px;
	max-width: 700px;
	margin: 0 auto;
}

img {
	margin: 0 auto;
}

@media (max-width: 350px) {
	header {
		padding: 20px;
	}
}
</style>
