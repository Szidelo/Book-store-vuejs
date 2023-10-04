import ArticleData from "@/types/ArticleType";

class Article implements ArticleData {
    constructor(
        public readonly id: string,
        public img: string,
        public title: string,
        public description: string,
        public readonly date: string,
        public category: string
    ) {}

    printArticleInfo() {
        console.log(`The article ${this.title} was created on ${this.date}`);
    }

    changeTitle(title: string) {
      return this.title = title
    }
}

export default Article;
