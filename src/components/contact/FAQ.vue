<template>
	<section class="container-fluid bg-grayish-blue">
		<base-section-header title="Frequent Questions?" />
		<div class="d-flex flex-column justify-content-center pb-5">
			<div
				v-for="(question, index) in questions"
				:key="index"
				class="accordion-items"
			>
				<div
					@click="handleVisibility(index)"
					class="accordion font-cardo d-flex align-items-center"
				>
					<div class="circle me-3"></div>
					{{ question.q }}
				</div>

				<div
					class="panel"
					:style="{
						maxHeight: isPanelVisible === index ? '500px' : '0',
					}"
				>
					<p class="p-4">
						{{ question.a }}
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "FAQ",
	setup() {
		const questions = [
			{
				q: "What Is Textbook Rental ?",
				a: "Textbook rental is simple! Now at The Bookstore, you can rent a range of textbooks, and then you return them at the end of the Rental Agreement by the Due Date.",
			},
			{
				q: "Can I Buy A Digital Book ?",
				a: "Yes, many titles are available in digital format from our online affiliates. You will see them listed along with other versions of the book, when available.",
			},
			{
				q: "Can I pick up the books in person ?",
				a: 'Yes - choose "In-Store Pickup Next Business Day" as your shipping method. There is no charge for this service, and you can pick up the books without having to stand in line.',
			},
			{
				q: "Do you ship internationally ?",
				a: "Absolutely! Unfortunately, this website cannot generate international shipping quotes. If you'd like to have your books shipped outside of USA.",
			},
			{
				q: "Are shipping charged per book ?",
				a: "Shipping charges are per order. It is the same price to have one book shipped or several as long as they are shipped in the same package.",
			},
		];

		const isPanelVisible = ref<null | number>(0);

		const handleVisibility = (index: number) => {
			isPanelVisible.value =
				isPanelVisible.value === index ? null : index;
		};

		return { questions, isPanelVisible, handleVisibility };
	},
});
</script>

<style scoped>
.accordion-items {
	max-width: 900px;
	margin: 0 auto;
	border-bottom: 2px solid rgba(27, 55, 100, 0.2);
}

.accordion {
	border: none !important;
	width: 100%;
	background-color: transparent;
	margin: 0 auto;
	padding: 15px 0;
	text-align: left;
	color: #1b3764;
	font-family: Cardo;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 52px; /* 216.667% */
	letter-spacing: -0.24px;
	cursor: pointer;
	transition: var(--transition);
	user-select: none;
}

.panel {
	overflow: hidden;
	transition: var(--transition);
}

.circle {
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background-color: var(--color-yellow);
	border: 1px solid var(--color-yellow);
}

.circle-empty {
	background-color: transparent;
}
</style>
