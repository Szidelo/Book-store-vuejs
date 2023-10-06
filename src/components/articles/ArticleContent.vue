<template>
    <h1>article</h1>
</template>

<script lang="ts">
import ArticleData from '@/types/ArticleType';
import ListOfArticles from '@/types/ListOfArticles';
import { defineComponent, inject, reactive } from 'vue';
export default defineComponent({
    setup() {
        const articles = inject("articles") as ListOfArticles;

        const currentArticle = reactive<ArticleData>({
            id: '',
            img: '',
            title: '',
            description: '',
            date: '',
            category: ''
        })

    }
})
</script>

<style scoped>
    img {
        width: 100%;
        max-height: 800px;
        object-fit: cover;
        object-position: top;
        box-shadow: 0 5px 10px 5px rgba(0, 0, 0, 0.3);
    }
</style>