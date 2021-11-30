export function loadComponent(scope, module) {
    return async () => {
        // 初始化共享作用域（shared scope）用提供的已知此构建和所有远程的模块填充它
        await __webpack_init_sharing__('default');
        const container = window[scope]; // 或从其他地方获取容器
        // 初始化容器 它可能提供共享模块
        await container.init(__webpack_share_scopes__.default);
        const factory = await window[scope].get(module);
        const Module = factory();
        return Module;
    };
}


export function createDynamicScript(url) {
    //要保证保证脚本创建完成后，再去加载远程模块
    return new Promise((resolve, reject) => {
        if (!url) return;
        const element = document.createElement("script");
        element.src = url;
        element.type = "text/javascript";
        element.async = true;

        element.onload = () => {
            console.log(`Dynamic Script Loaded: ${url}`);
            resolve()
        };

        element.onerror = () => {
            console.error(`Dynamic Script Error: ${url}`);
            reject()
        }
        document.head.appendChild(element)
    })
}

export default async function loadKmpModule(options) {
    let {
        remotes
    } = options;
    let Center = remotes.find((item) => {
        return item.name == "Center";
    });
    if (!Center) {
        throw new Error("Center 未配置");
    }
    try {
        await createDynamicScript(Center.url);
    } catch (error) {
        console.error(error);
    }
    let centerInit = await loadComponent("Center", "exposeInit")();

    return centerInit.default(options);
}