import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/Home.vue";
import ComingSoon from "./views/ComingSoon.vue";
import NotFound from "./views/404.vue";

import AdultBJJ from './views/Adult.vue';
import KidsBJJ from './views/Kids.vue';

const routes = [
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/coming-soon",
        name: "Coming Soon",
        component: ComingSoon,
    },
    {
        path: "/adult-brazilian-jiu-jitsu",
        name: "Adult BJJ",
        component: AdultBJJ,
        meta: {
            title: "Adult Brazilian Jiu Jitsu"
        }
    },
    {
        path: "/kids-brazilian-jiu-jitsu",
        name: "Kids BJJ",
        component: KidsBJJ,
        meta: {
            title: "Kids Brazilian Jiu Jitsu"
        }
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

// Set the window title based on the route's meta information
router.beforeEach(async (toRoute, fromRoute, next) => {
    window.document.title =
        toRoute.meta && toRoute.meta.title ? toRoute.meta.title + " | Xcell BJJ" : "Xcell Jiu Jitsu Academy";
    next();
});


async function validateAccessToken(to, from, next) {
    next();
}

export default router;
