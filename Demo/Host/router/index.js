import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/home"
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("../src/view/Home.vue"),
        children: []
    },

    {
        path: "/about",
        name: "About",
        component: () => import("../src/view/About.vue"),
    },
]

const router = new VueRouter({
    routes
})

export default router