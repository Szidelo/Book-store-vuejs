import { createRouter, createWebHistory } from "vue-router";
import ArticlesPage from './pages/ArticlesPage.vue'
import StorePage from './pages/StorePage.vue'

const routes = [
    {
        path: '/',
        redirect: '/articles'
    },
    {
        path: '/articles',
        component: ArticlesPage
    },
    {
        path: '/store',
        component: StorePage
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
})

export default router