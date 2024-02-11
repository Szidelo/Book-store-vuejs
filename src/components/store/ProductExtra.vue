<template>
	<div class="d-flex flex-column justify-content-center pb-5 mb-5">
		<div class="d-flex flex-column flex-md-row gap-3 mx-auto mb-5 px-2">
			<base-button @click="setContent(description)" :class="btnClass(description)"
				>product description</base-button
			>
			<base-button @click="setContent(info)" :class="btnClass(info)"
				>aditional info</base-button
			>
		</div>
		<div class="info">
			<p class="text-center px-2 px-md-5">{{ content }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
	name: "ProductExtra",
	setup() {
		const description =
			"Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.";
		const info =
			"This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.";

		const content = ref(description);

		const setContent = (newContent: string) => {
			return (content.value = newContent);
		};

		const btnClass = computed(() => {
			return (option: string) => {
				return option === content.value ? "btn-description" : "btn-info";
			};
		});

		return {
			description,
			info,
			content,
			setContent,
			btnClass,
		};
	},
});
</script>

<style scoped>
.info {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
