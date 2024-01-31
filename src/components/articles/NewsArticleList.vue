<template>
	<div class="search-bar d-flex px-md-5 px-xxl-5">
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
			v-for="(article, index) in news.getData().slice(0,30)"
			:key="index"
			:id="index.toString()"
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
		});


		return {
			enteredValue,
			news,
		};

	},
});
</script>

<style scoped>
.search-bar {
	width: 100%;
	max-width: 800px;
}

.search-bar input {
	width: 100%;
	padding: 12px 25px 12px 45px;
	border: 2px solid #dce1e9;
	transition: var(--transition);
	color: var(--color-blue);
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 180%;
	letter-spacing: -0.19px;
}
</style>