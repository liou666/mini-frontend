export default async function (options) {
    let {
        router
    } = options;

    let target = router.options.routes.find(x => x.name === "Home")
    let routesOfAppTwo = [{
        path: "body",
        name: "Body",
        component: () => import("./components/Body.vue"),
    }];

    target.children.push(...routesOfAppTwo)
}