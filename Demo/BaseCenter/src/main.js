import Vue from "vue"

import App from "./App.vue"


!(async function () {

    new Vue({

        render: h => h(App)
    }).$mount("#app")
})()