<template>
	<div class="d-flex gap-3">
		<header>
			<slot>
				<h6 class="m-0">{{ title }}</h6>
			</slot>
		</header>
		<div class="d-flex align-item-center gap-2">
			<base-button @click="$emit('confirm')" class="btn-link">Yes</base-button>
			<base-button @click="$emit('cancel')" class="btn-link">No</base-button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		title: {
			type: String,
			required: false,
			default: "Are you sure?",
		},
	},

	emits: ["confirm", "cancel"],
});
</script>