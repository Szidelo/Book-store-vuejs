import Article from "./Article";
import data from '../utils/data.json'

class ArticleList {
	private articles: Article[] = [];

	public addArticle(article: Article) {
		this.articles.push(article);
	}

	public getArticles() {
		return JSON.parse(localStorage.getItem('articles') || "[]") as Article[];
	}

	public setArticles(articles: Article[]) {
		this.articles = articles;
	}

	public saveArticles() {
		localStorage.setItem("articles", JSON.stringify(this.articles));
	}

    public loadArticles() {
        const localArticles = this.getArticles()

		if (localArticles.length === 0) {
			this.setArticles(data.articles);
			this.saveArticles()
		} else {
			this.setArticles(localArticles)
		}
    }
}

export default ArticleList;
