export default async function (options) {
    let {
        router
    } = options;

    let routesOfAppTwo = [{
        path: "/body",
        name: "Body",
        component: () => import("./components/Body.vue"),
    }];

    console.log("AppTwo", router);

    router.options.routes.push(...routesOfAppTwo)
}