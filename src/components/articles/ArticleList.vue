<template>
    <div class="container row px-0 px-md-2 px-xxl-5 py-5">
        <div
            v-for="article in articles"
            :key="article.id"
            class="col-12 col-lg-6 col-xxl-4 p-4">
            <div class="card mb-4">
                <div class="card__img-container">
                    <img
                        :src="article.img"
                        alt="" />
                </div>
                <div
                    class="card-body d-flex flex-column justify-content-between h-100 p-3">
                    <div class="card__body-header">
                        <h5 class="color-bue py-3">{{ article.title }}</h5>
                    </div>
                    <div
                        class="d-flex flex-column justify-content-between h-100">
                        <div class="overflow-hidden card__body-description">
                            <p>{{ article.description }}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <router-link :to="'/articles/' + article.id">
                                <base-button class="btn-link"
                                    >Readmore</base-button
                                >
                            </router-link>
                            <h6>{{ article.date }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
</template>

<script lang="ts">
import ArticleImg1 from "../../assets/article-images/article1-img.png";
import ArticleImg2 from "../../assets/article-images/article2-img.png";
import ArticleImg3 from "../../assets/article-images/article3-img.png";
import ArticleImg4 from "../../assets/article-images/article4-img.png";
import ArticleImg5 from "../../assets/article-images/article5-img.png";
import ArticleImg6 from "../../assets/article-images/article6-img.png";
import ArticleImg7 from "../../assets/article-images/article7-img.png";
import ArticleImg8 from "../../assets/article-images/article8-img.png";
import ArticleImg9 from "../../assets/article-images/article9-img.png";
import ListOfArticles from "@/types/ListOfArticles";
import AddArticle from "./AddArticle.vue";
import Article from "@/classes/Article";
import { useStorage } from '../../composables/useStorage'
import { defineComponent, onMounted, ref, provide } from "vue";
export default defineComponent({
    components: {
        AddArticle,
    },

    setup() {
        const articles = ref<ListOfArticles>([]);

        const isFormVisible = ref(false);

        // const localStorageArticles = JSON.parse(
        //     localStorage.getItem("articles") || "[]"
        // ) as ListOfArticles;

        const localStorageArticles = useStorage('articles')

        const toggleForm = () => {
            return (isFormVisible.value = !isFormVisible.value);
        };

        const manageLocalStorage = () => {
            if (localStorageArticles.value.length > 0) {
                articles.value = [...localStorageArticles.value];
            } else {
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

                localStorage.setItem(
                    "articles",
                    JSON.stringify(articles.value)
                );
            }

 
        };

        const saveToLocalStorage = () => {
            localStorage.setItem("articles", JSON.stringify(articles.value));
        };

        const getCurrentDate = () => {
            //Documentation for current date: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
            let result: string;
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, "0");
            let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            let yyyy = today.getFullYear();

            result = dd + "." + mm + "." + yyyy;

            return result;
        };

        const createArticleId = () => {
            return "article" + (articles.value.length + 1).toString();
        };

        const addArticle = (newArticle: Article) => {
            newArticle.id = createArticleId();
            newArticle.date = getCurrentDate();

            articles.value.push(newArticle);
            saveToLocalStorage();
            toggleForm()
        };

        provide("addArticle", addArticle); // injected in AddArticle.vue

        onMounted(() => {
            manageLocalStorage();
        });

        return { articles, toggleForm, isFormVisible };
    },
});
</script>

<style scoped>
.card {
    border: none;
    width: 100%;
    height: 100%;
    max-height: 580px;
    padding: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.card__img-container {
    width: 100%;
    height: 100%;
    max-height: 380px;
    overflow: hidden;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: var(--transition);
}

img:hover {
    transform: scale(1.03);
}

.card__body-header {
    min-height: 100px;
}

.card__body-description {
    max-height: 100px;
}
</style>
../../composables/useStorage