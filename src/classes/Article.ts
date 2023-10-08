import ArticleData from "@/types/ArticleType";

class Article implements ArticleData {
    constructor(
        public id: string,
        public img: string,
        public title: string,
        public description: string,
        public date: string,
        public category: string
    ) {}
}

export default Article;
