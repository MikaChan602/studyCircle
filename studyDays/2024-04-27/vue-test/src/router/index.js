import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    {
        path: "/",
        name: "login",
        component: () => import("../views/Login"),
    },
    ],
});

export default router