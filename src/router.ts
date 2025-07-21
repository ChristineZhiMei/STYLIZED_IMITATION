import { createWebHashHistory , createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/square'
    },
    {
        name: "square",
        path:'/square',
        component:() => import("@views/SquareVue.vue")
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});