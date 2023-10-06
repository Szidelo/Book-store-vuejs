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
        <div>
            <base-button
                @click="toggleForm"
                class="btn-yellow btn-lg">
                Add New Article
            </base-button>
        </div>
        <add-article
            @close="toggleForm"
            v-if="isFormVisible"></add-article>
    </section>
</template>

<script lang="ts">
import AddArticle from "@/components/articles/AddArticle.vue";
import ArticleList from "../components/articles/ArticleList.vue";
import ListOfArticles from "@/types/ListOfArticles";
import { defineComponent, inject, ref, provide } from "vue";
import Article from "@/classes/Article";
export default defineComponent({
    components: {
        ArticleList,
        AddArticle,
    },

    setup() {
        const articles = inject("articles") as ListOfArticles;

        let isFormVisible = ref(false);

        const toggleForm = () => {
            isFormVisible.value = !isFormVisible.value;
        };

        const saveArticlesToLocalStore = (articles: ListOfArticles) => {
            localStorage.setItem("articles", JSON.stringify(articles));
        };

        const createArticleDate = () => {
            let result: string;
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, "0");
            let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            let yyyy = today.getFullYear();

            result = dd + "." + mm + "." + yyyy;

            return result;
        };

        const createArticleId = () => {
            return "article" + (articles.length + 1).toString();
        };

        const addArticle = (article: Article) => {
            article.id = createArticleId();

            article.date = createArticleDate();

            articles.push(article);
            saveArticlesToLocalStore(articles);
            toggleForm();
        };

        provide("addArticle", addArticle);

        return { articles, isFormVisible, toggleForm };
    },
});
</script>
