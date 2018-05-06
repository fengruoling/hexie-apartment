<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/baseLayout/header'
import Content from './components/baseLayout/content'
import Footer from './components/baseLayout/footer'

export default {
  name: 'App',
  components: {Header, Content, Footer}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow-y: auto;
}
</style>
