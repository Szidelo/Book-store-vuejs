<template>
	<the-header :title="currentArticle.title"></the-header>

	<main class="container px-2 px-md-5">
		<div class="py-5 my-5">
			<img
				class="img-fluid img-banner"
				:src="currentArticle.img"
				alt=""
			/>
			<div class="mt-4">
				<h5 class="color-blue">
					{{ currentArticle.date }} / Category:
					{{ currentArticle.category }}
				</h5>
			</div>
			<p>
				Uniquely matrix economically sound value through cooperative
				technology. Competently parallel task fully researched data and
				enterprise process improvements. Collaboratively expedite
				quality manufactured products via client-focused results quickly
				communicate enabled technology and turnkey leadership skills.
				Uniquely enable accurate supply chains rather than friction
				technology.
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
import Article from "@/classes/Article";
import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
	setup() {
		const articles = JSON.parse(
			localStorage.getItem("articles") || "[]"
		) as Article[];

		const route = useRoute();

		let currentArticle = reactive<Article>({
			id: "",
			img: "",
			title: "",
			description: "",
			date: "",
			category: "",
		});

		const findArticle = () => {
			const foundArticles = articles.filter((article) => {
				return article.id === route.params.articleId;
			});

			return (currentArticle = { ...foundArticles[0] });
		};

		findArticle();

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
