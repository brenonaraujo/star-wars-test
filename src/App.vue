<template>
  <div id="app">
    <img id="logo" src="./assets/logo.svg">
    <RootHeader></RootHeader>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RootHeader from './components/root/header/main.vue'

export default {
  components: { RootHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d0d7df;
  margin-top: 30px;
}
body {
  background-color: #000
}

#logo {
  max-width:200px;
  max-height:150px;
  width: auto;
  height: auto;
}
</style>
<style src="./assets/css/milligram.min.css" lang="css"></style>
