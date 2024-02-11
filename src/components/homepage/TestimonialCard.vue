<template>
	<div class="custom-card wrapper bg-blue p-3 p-sm-4 me-0 me-md-4">
		<div
			class="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start align-items-center gap-3 mb-2 mx-auto mx-sm-0">
			<img class="avatar" :src="img" alt="avatar" />
			<div class="d-flex flex-column align-items-start">
				<h5 class="color-white font-cardo">{{ name }}</h5>
				<img class="mx-auto mx-sm-0" src="../../assets/home-imgs/rate.svg" alt="rate" />
			</div>
		</div>
		<h5 class="quote color-white font-cardo text-center text-sm-start">" {{ review }} "</h5>
		<p class="text-center text-sm-start">{{ comment }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "TestimonialCard",
	props: {
		img: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		review: {
			type: String,
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
.wrapper {
	width: 100%;
	height: 100%;
	max-width: 370px;
	max-height: 309px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 10px;
}

.avatar {
	width: 85px;
	height: 85px;
	border-radius: 100px;
}

.quote {
	color: #fff;
	font-family: Cardo;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 26.4px */
	letter-spacing: -0.22px;
}

@media (max-width: 1350px) {
	.wrapper {
		max-width: 100%;
	}
}

@media (max-width: 576px) {
	.quote {
		margin: 0 auto;
	}
	.wrapper {
		max-height: fit-content;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		row-gap: 10px;
	}
}
</style>
