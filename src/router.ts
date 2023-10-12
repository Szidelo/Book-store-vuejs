import { createRouter, createWebHistory } from "vue-router";
import ArticlesPage from "./pages/ArticlesPage.vue";
import StorePage from "./pages/StorePage.vue";
import ArticleContent from "./components/articles/ArticleContent.vue";
import ProductContent from "./components/store/ProductContent.vue";

const routes = [
    {
        path: "/",
        redirect: "/articles",
    },
    {
        path: "/articles",
        component: ArticlesPage,
    },
    {
        path: "/store",
        component: StorePage,
    },
    {
        path: "/articles/:articleId",
        component: ArticleContent,
    },
    {
        path: "/store/:productId",
        component: ProductContent
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0, left: 0 };
    },
});

export default router;
