import axios from "axios";
import NewsArticle from "@/classes/NewsArticle";

const API_KEY = "9861a617380e47c8a32e8cdb0484a962";

const fetchNews = async (keyWord: string) => {
	const response = await axios.get(
		`https://newsapi.org/v2/everything?q=${keyWord}&searchIn=title&apiKey=${API_KEY}`
	);

	const filteredArticles = response.data.articles.filter(
		(article: NewsArticle) => {
			return article.urlToImage !== "";
		}
	);

  console.log(filteredArticles)

	return filteredArticles;
};

export { fetchNews };
