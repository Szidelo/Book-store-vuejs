<template>
	<section class="container-fluid bg-grayish-blue">
		<base-section-header title="Latest Articles"></base-section-header>

		<div class="container row px-0 px-md-2 px-xxl-5 py-5 mx-auto">
			<NewsArticleCard
				v-for="(article, index) in news.getData().slice(0, 3)"
				:key="index"
				:id="index.toString()"
				:title="article.title"
				:img="article.urlToImage"
				:description="article.description"
				:date="article.publishedAt" />
		</div>
	</section>
</template>

<script lang="ts">
import NewsArticleCard from "../articles/NewsArticleCard.vue";
import NewsArticleList from "@/classes/NewsArticleList";
import { defineComponent, onMounted, inject } from "vue";
export default defineComponent({
	name: "ArticleSection",
	components: {
		NewsArticleCard,
	},

	setup() {
		const news = inject("news") as NewsArticleList;

		onMounted(() => {
			news.fetchData("books");
		});

		return {
			news,
		};
	},
});
</script>
