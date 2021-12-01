<template>
  <div>
     <h1> This is Home Page Of Host</h1>
     <router-link to="/home/header">Get Remote AppOne Header</router-link>
     <router-link to="/home/body">Get Remote AppTwo Body</router-link>
     <hr/>
     <router-view/>
 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>