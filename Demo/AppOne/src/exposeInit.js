export default async function (options) {
    let {
        router
    } = options;
    const target = router.options.routes.find(x => x.name === "Home")

    let routesOfAppOne = [{
        path: "header",
        name: "Header",
        component: () => import("./components/Header.vue"),
    }];


    target.children.push(...routesOfAppOne)
}