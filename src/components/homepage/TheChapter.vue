<template>
	<section class="container-fluid bg-grayish-blue">

		<base-section-header title="The Chapter Includes" />

		<div class="row container mx-auto px-0 px-md-2 px-xxl-5 py-5">
			<ChapterCard
				v-for="card in chapterCards"
				:key="card.title"
				:title="card.title"
				:text="card.text"
				:amount="card.amount"
				:length="card.length"
			/>
		</div>
		<div
			class="d-flex flex-column justify-content-center align-items-center mb-5"
		>
			<div class="wrapper px-2">
				<base-button class="btn-yellow btn-xxl"
					>Start a 15-Days Free Trail</base-button
				>
				<p class="text-center mt-3">
					Short description about each chapter <br />
					<router-link to="/store">Have any questions?</router-link>
					Contact us
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ChapterCard from "./ChapterCard.vue";
export default defineComponent({
	name: "TheChapter",
	components: {
		ChapterCard,
	},

	setup() {
		const chapterCards = [
			{
				title: "Chapter- 01   Get Started Intro",
				text: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
				amount: "85pages",
				length: "1 Hour 15 mins",
			},
			{
				title: "Chapter- 02   Create a Massive Content",
				text: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
				amount: "85pages",
				length: "1 Hour 15 mins",
			},
			{
				title: "Chapter- 03   Maintaining the Creative Arcs",
				text: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
				amount: "85pages",
				length: "1 Hour 15 mins",
			},
			{
				title: "Chapter- 04   The Conclusion",
				text: "Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.",
				amount: "85pages",
				length: "1 Hour 15 mins",
			},
		];

		return {
			chapterCards,
		};
	},
});
</script>

<style scoped>
a {
	color: #1b3764;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 170%;
	text-decoration-line: underline;
}
.wrapper {
	width: 100%;
	max-width: 500px;
}

@media (max-width: 768px) {
	.wrapper {
		max-width: 100%;
	}
}
</style>
