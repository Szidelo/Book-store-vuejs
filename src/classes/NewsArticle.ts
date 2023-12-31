class NewsArticle {
    public author: string;
    public content: string;
    public description: string;
    public publishedAt: string;
    public source: {
        id: string;
        name: string;
    };
    public title: string;
    public url: string;
    public urlToImage: string;

    constructor(
        author: string,
        content: string,
        description: string,
        publishedAt: string,
        source: { id: string; name: string },
        title: string,
        url: string,
        urlToImage: string
    ) {
        this.author = author;
        this.content = content;
        this.description = description;
        this.publishedAt = publishedAt;
        this.source = source;
        this.title = title;
        this.url = url;
        this.urlToImage = urlToImage;
    }
}

export default NewsArticle;
