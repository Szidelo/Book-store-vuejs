<template>
    <the-header :title="currentArticle.title"></the-header>

    <main class="container px-5">
        <div class="py-5 my-5">
            <img
                class="img-fluid"
                :src="currentArticle.img"
                alt="" />
            <div class="mt-4">
                <h5>
                    {{ currentArticle.date }} / Category:
                    {{ currentArticle.category }}
                </h5>
            </div>
            <h2 class="color-blue">{{ currentArticle.title }}</h2>
            <div class="mt-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta rerum unde quia architecto, debitis quisquam delectus
                    quidem eveniet ea excepturi animi non asperiores laborum.
                    Sequi libero nemo animi autem, distinctio laborum debitis
                    tempora vitae nulla. Nobis aliquam sequi doloremque
                    molestiae perspiciatis assumenda provident consectetur minus
                    fugiat, velit distinctio eaque obcaecati!
                </p>
            </div>

            <div class="mt-4">
                <h2 class="color-blue">{{ currentArticle.description }}</h2>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
import ArticleData from "@/types/ArticleType";
import ListOfArticles from "@/types/ListOfArticles";
import { defineComponent, inject, reactive } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
    setup() {
        const articles = inject("articles") as ListOfArticles;

        const route = useRoute();

        console.log(route.params.articleId);

        let currentArticle = reactive<ArticleData>({
            id: "",
            img: "",
            title: "",
            description: "",
            date: "",
            category: "",
        });

        function findArticle() {
            const foundArticle = articles.filter((article) => {
                return article.id === route.params.articleId;
            });

            return (currentArticle = { ...foundArticle[0] });
        }

        findArticle();

        return { currentArticle };
    },
});
</script>

<style scoped>
img {
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    object-position: top;
    box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.3);
}
</style>
