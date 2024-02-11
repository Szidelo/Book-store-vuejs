<template>
	<div class="col-12 col-xl-6 mb-4">
		<div class="custom-card bg-white p-3 p-md-5 h-100">
			<h5>{{ title }}</h5>

			<p>{{ text }}</p>
			<div
				class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-5">
				<div
					class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none">
						<circle cx="8" cy="8" r="8" fill="#FFCA42" />
					</svg>
					<h5 class="m-0">Pages:</h5>
					<p class="m-0">{{ amount }}</p>
				</div>
				<div
					class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none">
						<circle cx="8" cy="8" r="8" fill="#FFCA42" />
					</svg>
					<h5 class="m-0">Length:</h5>
					<p class="m-0">{{ length }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "ChapterCard",
	props: {
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		amount: {
			type: String,
			required: true,
		},
		length: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
h5 {
	color: #1b3764;
	font-family: Cardo;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 28.8px */
	letter-spacing: -0.48px;
}
</style>
