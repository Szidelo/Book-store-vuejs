<template>
	<div class="d-flex flex-column justify-content-center align-items-center mb-5">
		<h3 class="color-blue font-cardo text-center mb-3">
			{{ title }}
		</h3>
		<img src="../../assets/Line.png" alt="line" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "BaseSectionHeader",
	props: {
		title: {
			type: String,
			required: true,
		},
	},
});
</script>
