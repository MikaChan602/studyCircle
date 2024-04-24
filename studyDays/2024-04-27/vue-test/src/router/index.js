import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    {
        path: "/",
        name: "login",
        component: () => import("../views/Login"),
    },
    {
        path:"",
        name: "booking",
        component: () => import("../views/reservation/booking"),
    }
    ],
});

export default router