<template>
    <the-header title="Articles">
        <template v-slot:text>
            <p class="text-center">
                Every single details in the book store like offers latest news
                about the events <br />
                has more attractive and provide a seamless user experience.
            </p>
        </template>
    </the-header>

    <section
        class="container-fluid d-flex flex-column align-items-center py-5 px-1 bg-light">
        <article-list :articles="articles"></article-list>
    </section>
</template>

<script lang="ts">
import ArticleList from "../components/articles/ArticleList.vue";
import Article from "@/classes/Article";
import ListOfArticles from "@/types/ListOfArticles";
import { defineComponent, inject } from "vue";
export default defineComponent({
    components: {
        ArticleList,
    },

    setup() {
        const articles = inject("articles") as ListOfArticles;

        const newArticle = new Article(
            "article10",
            "https://images.pexels.com/photos/929280/pexels-photo-929280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            'The Architect',
            'Explore some incredeble and unique architectures around the world',
            '04.10.2023',
            'life'
        );

        articles.push(newArticle)

        return { articles };
    },
});
</script>
