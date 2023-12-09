import NewsArticle from "./NewsArticle";
import { fetchNews } from "@/fetch/newsApi";
import { ref } from "vue";

class NewsArticleList {
	private data = ref<NewsArticle[]>([]);

	async fetchData(keyWord: string) {
		const response = (await fetchNews(keyWord)) as NewsArticle[];

		return (this.data.value = response);
	}

	serach(keyWord: string) {
		return !keyWord ? this.fetchData("books") : this.fetchData(keyWord);
	}

	getData(): NewsArticle[] {
		return this.data.value;
	}
}

export default NewsArticleList;
