import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ArticlesPage from "./pages/ArticlesPage.vue";
import StorePage from "./pages/StorePage.vue";
import ArticleContent from "./components/articles/ArticleContent.vue";
import ProductContent from "./components/store/ProductContent.vue";
import ContactPage from "./pages/ContactPage.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: HomePageVue,
    },
    {
        path: "/about",
        component: AboutPage,
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
    },
    {
        path: "/contact",
        component: ContactPage
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
