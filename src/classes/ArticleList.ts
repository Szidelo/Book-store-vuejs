import Article from "./Article";
class ArticleList {
	private articles: Article[] = [];

	public addArticle(article: Article) {
		this.articles.push(article);
	}

    public getArticles() {
        return this.articles;
    }

    public setArticles(articles: Article[]) {
        this.articles = articles;
    }

    public saveArticles() {
        localStorage.setItem('articles', JSON.stringify(this.articles));
    }
}

export default ArticleList;
