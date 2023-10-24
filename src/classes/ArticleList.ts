import Article from "./Article";
import data from "../utils/data.json";

class ArticleList {
	private articles: Article[] = [];

	public addArticle(article: Article) {
		this.articles.push(article);
		this.saveArticles();
	}

	public setArticles(articles: Article[]) {
		this.articles = articles;
	}

	public getArticles() {
		return JSON.parse(
			localStorage.getItem("articles") || "[]"
		) as Article[];
	}

	public saveArticles() {
		localStorage.setItem("articles", JSON.stringify(this.articles));
	}

	public loadArticles() {
		const localArticles = this.getArticles();

		if (localArticles.length < 9) {
			this.setArticles(data.articles);
			this.saveArticles();
		} else {
			this.setArticles(localArticles);
		}
	}
}

export default ArticleList;
