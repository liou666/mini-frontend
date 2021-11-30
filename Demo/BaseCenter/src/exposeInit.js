import {
    loadComponent,
    createDynamicScript
} from "../utils/loadRemote"

const REMOTE_NAME = "exposeInit"

export default async function (options) {
    let {
        router,
        remotes
    } = options;
    //防止重复加载Center
    remotes = remotes.filter(x => x.name !== "Center")

    for (const remote of remotes) {
        const {
            name,
            url
        } = remote
        await createDynamicScript(url);
        let chunk = await loadComponent(name, REMOTE_NAME)();
        console.log(chunk.default);
        await chunk.default(options)
    }

    //必须采用动态添加路由的方式，否则路由表不生效（原因还未知）
    router.addRoutes(router.options.routes);

    console.log(router.options.routes);
}