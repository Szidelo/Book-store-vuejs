<template>
	<div class="d-flex">
		<input v-model="enteredValue" type="text" placeholder="Search..." />
		<base-button @click="search" class="btn-icon btn-search">Search</base-button>
	</div>
	<div class="container row px-0 px-md-2 px-xxl-5 py-5">
		<news-article-card
			v-for="(article, index) in articles.slice(0, 12)"
			:key="index"
			:id="articles.indexOf(article).toString()"
			:title="article.title"
			:img="article.urlToImage"
			:description="article.description"
			:date="article.publishedAt"
		></news-article-card>
	</div>
	<div>
		<base-button
			@click="toggleForm"
			class="btn-yellow btn-lg"
		>
			Add New Article
		</base-button>
	</div>
</template>

<script lang="ts">
import NewsArticleCard from './NewsArticleCard.vue'
import NewsArticle from '@/classes/NewsArticle';
import { defineComponent, ref, onMounted } from "vue";
import { fetchNews } from "@/fetch/newsApi";
export default defineComponent({
	name: "NewsArticleList",
	components: {
		NewsArticleCard,
	},

	setup() {
		const isFormVisible = ref(false);
		const enteredValue = ref('')

		const search = () => {
			getData(enteredValue.value)
		}
		const articles = ref<NewsArticle[]>([])

		const toggleForm = () => {
			return (isFormVisible.value = !isFormVisible.value);
		};


		const getData = async(keyWord: string) => {
			const response = await fetchNews(keyWord)

			console.log(response)

			return articles.value = response

		}

		onMounted(() => {
			getData('books')
		})

		return {
			articles,
			toggleForm,
			enteredValue,
			search
		}

		// const articles = ref<Promise<NewsArticle[]>>(fetchNews("Best books of the year"));
		// const articlesResolved = ref<NewsArticle[]>([]);

		// onMounted(async () => {
		// 	articlesResolved.value = (await articles.value).filter(
		// 		(article: NewsArticle) => {
		// 			if (
		// 				article.image !== null &&
		// 				article.image !== "linkul imagini"
		// 			) {
		// 				if (!article.isDuplicate) {
		// 					if (article.lang === "eng") {
		// 						return article;
		// 					}
		// 				}
		// 			}
		// 			return article;
		// 		}
		// 	);
		// 	console.log(articlesResolved.value);
		// });

		// return { articlesResolved, toggleForm, isFormVisible };
	},
});
</script>
