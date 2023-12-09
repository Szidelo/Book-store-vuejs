<template>
	<div class="d-flex">
		<input
			v-model="enteredValue"
			type="text"
			placeholder="Search..."
		/>
		<base-button
			@click="news.serach(enteredValue)"
			class="btn-icon btn-search"
			>Search</base-button
		>
	</div>
	<div class="container row px-0 px-md-2 px-xxl-5 py-5">
		<news-article-card
			v-for="(article, index) in news.getData().slice(0,12)"
			:key="index"
			:id="news.getData().indexOf(article).toString()"
			:title="article.title"
			:img="article.urlToImage"
			:description="article.description"
			:date="article.publishedAt"
		></news-article-card>
	</div>
</template>

<script lang="ts">
import NewsArticleCard from "./NewsArticleCard.vue";
import { defineComponent, ref, onMounted, inject } from "vue";
import NewsArticleList from "@/classes/NewsArticleList";
export default defineComponent({
	name: "NewsArticleList",
	components: {
		NewsArticleCard,
	},

	setup() {
		const enteredValue = ref("");

		const news = inject("news") as NewsArticleList;

		onMounted(() => {
			news.fetchData("books");
			console.log(news.getData().slice(0, 12))
		});


		return {
			enteredValue,
			news,
		};

	},
});
</script>
