import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    {
        path: "/",
        name: "reservation",
        component: () => import("../views/reservation/booking"),
    },
    ],
});

export default router