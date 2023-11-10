<template>
	<div class="col-12 col-md-6 mb-4">
		<div class="bg-grayish-blue p-3 p-md-5 h-100">
			<div class="mb-4">
				<span>{{ number }}</span>
			</div>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "LearnCard",
	props: {
		number: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped>
span {
	color: #1b3764;
	text-align: center;
	font-family: Cardo;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 120%; /* 28.8px */
	letter-spacing: -0.24px;
	background-color: var(--color-yellow);
	border-radius: 50%;
	flex-shrink: 0;
	padding: 8px 10px;
}

p {
	color: #1b3764;
	font-family: Cardo;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 140%; /* 33.6px */
	letter-spacing: -0.24px;
}
</style>
