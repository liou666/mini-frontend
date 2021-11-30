export default async function (options) {
    let {
        router
    } = options;

    let routesOfAppOne = [{
        path: "/header",
        name: "Header",
        component: () => import("./components/Header.vue"),
    }];


    router.options.routes.push(...routesOfAppOne)
}