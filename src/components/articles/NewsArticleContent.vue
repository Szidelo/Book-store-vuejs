<template>
	<div
		v-if="currentArticle.title !== ''"
	>
		<the-header :title="currentArticle.title"></the-header>

		<main class="container px-2 px-md-5">
			<div class="py-5 my-5">
				<img
					class="img-fluid img-banner"
					:src="currentArticle.urlToImage"
					alt=""
				/>
				<div class="mt-4">
					<h5 class="color-blue">
						Publish at:
						{{
							currentArticle.publishedAt
								.substring(10, 0)
								.replaceAll("-", "/")
						}}
						/ Author:
						{{ currentArticle.author }}
					</h5>
				</div>
				<div class="row">
					<div class="col-12 col-lg-6">
						<h4 class="color-blue">{{ currentArticle.title }}</h4>
						<p class="article-body">
							{{ currentArticle.content.substring(201, 0) }}
							<a :href="currentArticle.url"
								><base-button class="btn-link"
									>Readmore</base-button
								></a
							>
						</p>
					</div>
					<div class="col-12 col-lg-5"></div>
				</div>
				<div class="my-4"></div>

				<div class="quote">
					<img
						class="quotes-img"
						:src="quotesImg"
						alt="quotes"
					/>
					<p class="quote-text color-white text-center">
						"{{ currentArticle.description }}"
					</p>
				</div>

				<div class="row mt-4">
					<h4 class="color-blue">Relevant Articles</h4>
					<NewsArticleCard
						v-for="article in articles.getData().slice(1, 4)"
						:key="news.getData().indexOf(article)"
						:id="news.getData().indexOf(article).toString()"
						:img="article.urlToImage"
						:date="article.publishedAt"
						:title="article.title"
						:author="article.author"
						:description="article.description"
						@click="refreshPage"
					/>
				</div>
			</div>
		</main>
		<the-footer></the-footer>
	</div>
	<div
		v-else
		class="spinner-wrapper d-flex justify-content-center align-items-center"
	>
		<div
			class="spinner-border color-blue"
			role="status"
		>
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<script lang="ts">
import quotesImg from "../../assets/quotes-icon.svg";
import NewsArticleList from "@/classes/NewsArticleList";
import NewsArticleCard from "./NewsArticleCard.vue";
import { defineComponent, inject, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import NewsArticle from "@/classes/NewsArticle";

export default defineComponent({
	name: "NewsArticleContent",

	components: {
		NewsArticleCard,
	},

	setup() {
		const refreshPage = () => {
			return window.location.reload();
		};
		const route = useRoute();

		const articles = new NewsArticleList();

		const title = route.params.articleTitle as string;

		const relevantArticles = ref("");

		const getRelevantArticles = () => {
			if (title) {
				const words = title.split(" ");
				const filteredWords = words.filter((word) => word.length >= 3);

				if (filteredWords.length > 0) {
					const randomIndex = Math.floor(
						Math.random() * filteredWords.length
					);
					return (relevantArticles.value =
						filteredWords[randomIndex]);
				}
			}
		};

		const news = inject("news") as NewsArticleList;

		let currentArticle = reactive<NewsArticle>({
			author: "",
			content: "",
			description: "",
			publishedAt: "",
			source: {
				id: "",
				name: "",
			},
			title: "",
			url: "",
			urlToImage: "",
		});

		const findCurrentArticle = async () => {
			let foundArticles = await news.fetchData(
				route.params.articleTitle as string
			);

			// if current article cannot be created be articleTitle will search for the first three words and get the first article from the found array
			if(foundArticles.length === 0) {
				let keyWords = title.split(" ")
				let newKeyWords = (keyWords[0] + " " + keyWords[1] + " " + keyWords[2])

				console.log(newKeyWords)

				foundArticles = await news.fetchData(newKeyWords)

			}

			currentArticle.author = foundArticles[0]?.author || "";
			currentArticle.content = foundArticles[0]?.content || "";
			currentArticle.description = foundArticles[0]?.description || "";
			currentArticle.publishedAt = foundArticles[0]?.publishedAt || "";
			currentArticle.source = foundArticles[0]?.source || {
				id: "",
				name: "",
			};
			currentArticle.title = foundArticles[0]?.title || "";
			currentArticle.url = foundArticles[0]?.url || "";
			currentArticle.urlToImage = foundArticles[0]?.urlToImage || "";

			console.log(foundArticles)
		};

		getRelevantArticles();

		onMounted(async () => {
			await findCurrentArticle();
			await articles.fetchData(relevantArticles.value);
		});

		return { currentArticle, quotesImg, news, articles, refreshPage };
	},
});
</script>

<style scoped>
.img-banner {
	width: 100%;
	max-height: 700px;
	object-fit: cover;
	object-position: top;
	box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.3);
}

.article-body {
	max-width: 900px;
	margin: 0 auto;
	text-align: justify;
	user-select: text;
}

h5 {
	line-height: 52px; /* 216.667% */
}

ul {
	list-style: none;
}

ul li {
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	color: #1b3764;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 154.5%; /* 29.355px */
	letter-spacing: -0.19px;
}

ol li {
	color: #1b3764;
	font-family: Inter;
	font-size: 19px;
	font-style: normal;
	font-weight: 400;
	line-height: 154.5%; /* 29.355px */
	letter-spacing: -0.19px;
}

.cirle {
	width: 15px;
	height: 15px;
	flex-shrink: 0;
	background-color: var(--color-yellow);
	border-radius: 50%;
	margin-right: 15px;
}

.quote {
	position: relative;
	width: 100%;
	background-color: var(--color-blue);
	padding: 60px 50px;
}

.quote-text {
	color: #fff;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 500;
	line-height: 180%; /* 32.4px */
	letter-spacing: -0.18px;
}

.quotes-img {
	position: absolute;
	top: 0;
	left: 50px;
}
</style>
