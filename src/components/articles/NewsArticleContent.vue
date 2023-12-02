<template>
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
					{{ currentArticle.publishedAt }} / Category:
					{{ currentArticle.author }}
				</h5>
			</div>
			<p class="article-body">
				{{ currentArticle.content.substring(201, 0) }} <a :href="currentArticle.url"><base-button class="btn-link">Readmore</base-button></a>
			</p>
			<div class="my-4">
				<h4 class="color-blue">The perfect book for all</h4>

				<p>
					Appropriately empower dynamic leadership skills after
					business portals. Globally my coordinate interactive supply
					chains with distinctive quality vectors global sources
					services. Uniquely matrix economically sound value through
					cooperative technology. Competently parallel task fully
					researched data and enterprise process improvements.
				</p>
				<ul>
					<li>
						<div class="cirle"></div>
						Dynamically target high-payoff intellectual capital for
						customized
					</li>
					<li>
						<div class="cirle"></div>
						Interactively procrastinate high-payoff content
					</li>
					<li>
						<div class="cirle"></div>
						Credibly reinter mediate backend ideas for
						cross-platform models
					</li>
				</ul>
			</div>

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

			<div class="mt-4">
				<h4 class="color-blue">The perfect book for all</h4>

				<p>
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has
					less normal distribution of letters, as opposed.
				</p>
				<ol>
					<li>
						It has roots in a piece of classical Latin literature
						from 45 BC,
					</li>
					<li>To generate Lorem Ipsum which looks reasonable</li>
					<li>
						The first line of Lorem Ipsum, "Lorem ipsum” dolor sit
						amet
					</li>
					<li>Be standard chunk of Lorem used since the 1500s</li>
				</ol>
			</div>
		</div>
	</main>
	<the-footer></the-footer>
</template>

<script lang="ts">
import quotesImg from "../../assets/quotes-icon.svg";
import NewsArticle from "@/classes/NewsArticle";
import { defineComponent, reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { fetchNews } from "@/fetch/newsApi";

export default defineComponent({
	name: "NewsArticleContent",

	setup() {
		const route = useRoute();
		const articles = ref<Promise<NewsArticle[]>>(
			fetchNews("books")
		);
		const articlesResolved = ref<NewsArticle[]>([]);

		let currentArticle = reactive<NewsArticle>({
			author: "",
			content: "",
			description: "",
			publishedAt: "",
			source: {
				id: '',
				name: ''
			},
			title: "",
			url: "",
			urlToImage: "",
		});

		const findArticle = async () => {
			const foundArticles = await articlesResolved.value.filter(
				(article) => {
					return articlesResolved.value.indexOf(article).toString() === route.params.articleId;
				}
			);

			const foundArticle = foundArticles[0];

			Object.assign(currentArticle, foundArticle);
		};

		onMounted(async () => {
			articlesResolved.value = (await articles.value).filter(
				(article: NewsArticle) => {
		
						return article
					
					// return article;
				}
			);
			await findArticle(); // Wait for findArticle to complete before logging
		});

		return { currentArticle, quotesImg };
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
