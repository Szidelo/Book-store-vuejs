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
import ListOfArticles from "@/types/ListOfArticles";
import Article from "@/classes/Article";
import AddArticle from "./AddArticle.vue";
import ArticleCard from "./ArticleCard.vue";
import { useStorage } from "../../composables/useStorage";
import { setStorage } from "../../composables/setIStorage";
import { defineComponent, onMounted, ref, provide } from "vue";
export default defineComponent({
	components: {
		AddArticle,
		ArticleCard,
	},

	setup() {
		const articles = ref<ListOfArticles>([]);

		const isFormVisible = ref(false);

		const localStorageArticles = useStorage("articles");

		const toggleForm = () => {
			return (isFormVisible.value = !isFormVisible.value);
		};

		const saveToLocalStorage = () => {
			setStorage("articles", articles.value);
		};

		const manageLocalStorage = () => {
			if (localStorageArticles.value.length > 0) {
				articles.value = [...localStorageArticles.value];
			} else {
				articles.value = [
					new Article(
						"article1",
						'assets/article-images/article1-img.png',
						"Significant reading has more info number",
						"Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
						"23.05.2022",
						"science"
					),
					new Article(
						"article2",
						'assets/article-images/article2-img.png',
						"Release of Letraset sheets tools containing passages",
						"Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
						"24.05.2022",
						"science"
					),
					new Article(
						"article3",
						'assets/article-images/article3-img.png',
						"The energy efficiency offers hydrotherapy or swim",
						"Podcasting operational change management inside of workflows to establish a framework.",
						"24.05.2022",
						"hobbies"
					),
					new Article(
						"article4",
						'assets/article-images/article4-img.png',
						"The energy efficiency offers hydrotherapy or swim",
						"Taking seamless key performance indicators offline to maximize the long book reading tail.",
						"23.05.2022",
						"hobbies"
					),
					new Article(
						"article5",
						'assets/article-images/article5-img.png',
						"Exploring the Wonders of Wildlife Photography",
						"Discover the beauty of wildlife through the lens of photography, capturing nature at its finest.",
						"23.05.2022",
						"hobbies"
					),
					new Article(
						"article6",
						'assets/article-images/article6-img.png',
						"Unveiling the Mysteries of Ancient Artifacts",
						"Embark on a journey into the past as we uncover the secrets hidden within ancient artifacts.",
						"23.05.2022",
						"science"
					),
					new Article(
						"article7",
						'assets/article-images/article7-img.png',
						"The Secrets of Culinary Masterpieces",
						"Delve into the world of gastronomy and learn the secrets behind culinary masterpieces from around the globe.",
						"23.05.2022",
						"food"
					),
					new Article(
						"article8",
						'assets/article-images/article8-img.png',
						"A Journey Through Time: Historical Landmarks",
						"Take a step back in time and explore the historical landmarks that have shaped our world.",
						"23.05.2022",
						"science"
					),
					new Article(
						"article9",
						'assets/article-images/article9-img.png',
						"Discovering Hidden Treasures: Archaeological Excavations",
						"Join archaeologists on their quest to unearth hidden treasures and unlock the mysteries of ancient civilizations.",
						"23.05.2022",
						"science"
					),
				];

				saveToLocalStorage();
			}
		};

		const getCurrentDate = () => {
			//Documentation for current date: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
			let result: string;
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, "0");
			let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
			let yyyy = today.getFullYear();

			result = dd + "." + mm + "." + yyyy;

			return result;
		};

		const createArticleId = () => {
			return "article" + (articles.value.length + 1).toString();
		};

		const addArticle = (newArticle: Article) => {
			newArticle.id = createArticleId();
			newArticle.date = getCurrentDate();

			articles.value.push(newArticle);
			saveToLocalStorage();
			toggleForm();
		};

		provide("addArticle", addArticle); // injected in AddArticle.vue

		onMounted(() => {
			manageLocalStorage();
		});
		return { articles, toggleForm, isFormVisible };
	},
});
</script>
