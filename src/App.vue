<template>
  <div id="app">
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/baseLayout/header'
import Footer from './components/baseLayout/footer'

export default {
  name: 'App',
  components: {Header, Footer}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-y: auto;
}
.container {
  height: 0;
  min-height: calc(100% - 140px);
  min-height: -moz-calc(100% - 140px);
  min-height: -webkit-calc(100% - 140px);
}
</style>
