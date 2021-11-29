<template>
    <div>
        App1
        <Header/>
        <RemoteHeader/>
    </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
    components:{
        Header,
        RemoteHeader:()=>import("app2/Header")//必须采用异步导入方式
    }
}
</script>

<style>

</style>