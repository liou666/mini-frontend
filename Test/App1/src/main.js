import Vue from "vue"

import App1 from "./App1.vue"

import getRemoteChunk from "../utils/init"

!(async function () {

    //异步加载远程模块
    let chunks = await getRemoteChunk()

    for (const {
            name,
            chunk
        } of chunks) {
        console.log();
        Vue.component(name, chunk)
    }

    new Vue({
        render: h => h(App1)
    }).$mount("#app1")
})()