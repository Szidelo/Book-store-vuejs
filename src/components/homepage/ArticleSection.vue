<template>
	<div class="container row px-0 px-md-2 px-xxl-5 py-5">
		<article-card
			v-for="article in articles"
			:key="article.id"
			:id="article.id"
			:title="article.title"
			:img="article.img"
			:description="article.description"
			:date="article.date"
		></article-card>
	</div>
</template>

<script lang="ts">
import ArticleCard from "../articles/ArticleCard.vue";
import ArticleList from "@/classes/ArticleList";
import { defineComponent } from "vue";
export default defineComponent({
	name: "ArticleSection",
	components: {
		ArticleCard,
	},

	setup() {
		const articles = new ArticleList();

		articles.loadArticles();

		const localArticles = articles.getArticles().slice(0, 3);

		return {
			articles: localArticles,
		};
	},
});
</script>
