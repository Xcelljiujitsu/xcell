import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import ComingSoon from "./views/ComingSoon.vue";
import NotFound from "./views/404.vue";

const routes = [
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/coming-soon",
        name: "Coming Soon",
        component: ComingSoon,
    },
    // {
    //     // restricted view that required authentication to enter
    //     path: "/dashboard",
    //     name: "Dashboard",
    //     component: Dashboard,
    //     beforeEnter: validateAccessToken,
    // },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

async function validateAccessToken(to, from, next) {
    next();
}

export default router;
