<template>
	<div class="container row px-0 px-md-2 px-xxl-5 py-5">
		<article-card
			v-for="article in articles.getArticles()"
			:key="article.id"
			:id="article.id"
			:title="article.title"
			:img="article.img"
			:description="article.description"
			:date="article.date"
		></article-card>
	</div>
	<div>
		<base-button
			@click="toggleForm"
			class="btn-yellow btn-lg"
		>
			Add New Article
		</base-button>
	</div>
	<add-article
		@close="toggleForm"
		v-if="isFormVisible"
	>
	</add-article>
</template>

<script lang="ts">
import AddArticle from "./AddArticle.vue";
import ArticleCard from "./ArticleCard.vue";
import ArticleList from "@/classes/ArticleList";
import Article from "@/classes/Article";
import { defineComponent, ref, provide} from "vue";
export default defineComponent({
	components: {
		AddArticle,
		ArticleCard,
	},

	setup() {
		const isFormVisible = ref(false);

		const toggleForm = () => {
			return (isFormVisible.value = !isFormVisible.value);
		};

		const articles = new ArticleList();

		articles.loadArticles()

		// const localArticles = articles.getArticles()

		// if (localArticles.length === 0) {
		// 	console.log('test if')
		// 	articles.setArticles(data.articles);
		// 	articles.saveArticles()
		// } else {
		// 	console.log('test else')
		// 	articles.setArticles(localArticles)
		// }

		const addArticle = (newArticle: Article) => {
			articles.addArticle(newArticle);
			articles.saveArticles();
			toggleForm();
		};

		provide("addArticle", addArticle); // injected in AddArticle.vue

		return { articles, toggleForm, isFormVisible };
	},
});
</script>
