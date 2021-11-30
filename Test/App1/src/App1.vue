<template>
    <div>
        App1
        <Header/>
        <app-2>动态加载</app-2>
        <app-3/>
        <RemoteBody>静态加载</RemoteBody>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
    components:{
        Header,
        RemoteBody:()=>import("app2/Body")//必须采用异步导入方式
    }
}
</script>

<style>

</style>