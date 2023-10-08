<template>
    <TheNav />
    <RouterView />
</template>

<script lang="ts">
import ArticleImg1 from "./assets/article-images/article1-img.png";
import ArticleImg2 from "./assets/article-images/article2-img.png";
import ArticleImg3 from "./assets/article-images/article3-img.png";
import ArticleImg4 from "./assets/article-images/article4-img.png";
import ArticleImg5 from "./assets/article-images/article5-img.png";
import ArticleImg6 from "./assets/article-images/article6-img.png";
import ArticleImg7 from "./assets/article-images/article7-img.png";
import ArticleImg8 from "./assets/article-images/article8-img.png";
import ArticleImg9 from "./assets/article-images/article9-img.png";
import { defineComponent, ref, provide } from "vue";
import Article from "./classes/Article";
import ListOfArticles from "./types/ListOfArticles";
import TheNav from "./components//layouts/TheNav.vue";

export default defineComponent({
    name: "App",
    components: {
        TheNav,
    },

    setup() {
        const articles = ref<ListOfArticles>([]);

        const localStorageArticles = JSON.parse(localStorage.getItem('articles') || '[]') as ListOfArticles;

        if (localStorageArticles.length > 0) {
            articles.value = [...localStorageArticles]; //daca exista articole salvate in localstorage, variabila articles va avea ca valoare o copie dupa array-ul 'articles' din localstorage
        } else { // daca localstorage e gol, articles va avea ca valoare articolele hardcodate dupa care for fi salvate si in localstorage
            
            articles.value = [
            new Article(
                "article1",
                ArticleImg1,
                "Significant reading has more info number",
                "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
                "23.05.2022",
                "science"
            ),
            new Article(
                "article2",
                ArticleImg2,
                "Release of Letraset sheets tools containing passages",
                "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
                "24.05.2022",
                "science"
            ),
            new Article(
                "article3",
                ArticleImg3,
                "The energy efficiency offers hydrotherapy or swim",
                "Podcasting operational change management inside of workflows to establish a framework.",
                "24.05.2022",
                "hobbies"
            ),
            new Article(
                "article4",
                ArticleImg4,
                "The energy efficiency offers hydrotherapy or swim",
                "Taking seamless key performance indicators offline to maximize the long book reading tail.",
                "23.05.2022",
                "hobbies"
            ),
            new Article(
                "article5",
                ArticleImg5,
                "Exploring the Wonders of Wildlife Photography",
                "Discover the beauty of wildlife through the lens of photography, capturing nature at its finest.",
                "23.05.2022",
                "hobbies"
            ),
            new Article(
                "article6",
                ArticleImg6,
                "Unveiling the Mysteries of Ancient Artifacts",
                "Embark on a journey into the past as we uncover the secrets hidden within ancient artifacts.",
                "23.05.2022",
                "science"
            ),
            new Article(
                "article7",
                ArticleImg7,
                "The Secrets of Culinary Masterpieces",
                "Delve into the world of gastronomy and learn the secrets behind culinary masterpieces from around the globe.",
                "23.05.2022",
                "food"
            ),
            new Article(
                "article8",
                ArticleImg8,
                "A Journey Through Time: Historical Landmarks",
                "Take a step back in time and explore the historical landmarks that have shaped our world.",
                "23.05.2022",
                "science"
            ),
            new Article(
                "article9",
                ArticleImg9,
                "Discovering Hidden Treasures: Archaeological Excavations",
                "Join archaeologists on their quest to unearth hidden treasures and unlock the mysteries of ancient civilizations.",
                "23.05.2022",
                "science"
            ),
            ];
            
            localStorage.setItem('articles', JSON.stringify(articles.value));
        }

        provide("articles", articles.value); // inject in ArticlesPage

        return { articles };
    },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&display=swap");

:root {
    --color-blue: #1b3764;
    --color-yellow: #ffca42;
    --color-light: #f6f8fc;
    --color-white: #fff;
    --color-paragraph: #969aa0;
    --color-grayish-blue: #f4f8ff;

    --transition: all 0.3s ease;
}

::-webkit-scrollbar {
    display: none;
}

.container {
    max-width: 1540px !important;
}

main {
    min-height: 100vh;
}

.color-blue {
    color: var(--color-blue);
}

.color-yellow {
    color: var(--color-yellow);
}

.color-light {
    color: var(--color-light);
}

.color-white {
    color: var(--color-white);
}

.bg-blue {
    background-color: var(--color-blue);
}

.bg-yellow {
    background-color: var(--color-yellow);
}

.bg-light {
    background-color: var(--color-light);
}

.bg-white {
    background-color: var(--color-white);
}

.bg-grayish-blue {
    background-color: var(--color-grayish-blue);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Cardo;
    font-weight: 700;
}

h1 {
    font-size: 65px;
    line-height: 84.5px;
    letter-spacing: -0.975px;
}

h2 {
    font-size: 55px;
    line-height: 71.5px;
    letter-spacing: -0.825px;
}

h3 {
    font-size: 45px;
    line-height: 58.5px;
    letter-spacing: -0.675px;
}

h4 {
    font-size: 32px;
    line-height: 41.6px;
    letter-spacing: -0.48px;
}

h5 {
    font-size: 24px;
    line-height: 31.2px;
    letter-spacing: -0.36px;
}

h6 {
    font-size: 18px;
    line-height: 22.5px;
    letter-spacing: 0.36px;
}

p {
    color: var(--color-paragraph);
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 32.3px;
    letter-spacing: -0.19px;
}
</style>
./types/ListOfArticles
