<template>
  <el-container height="100%">
    <el-aside width="250px">
      <aside-menu/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import AsideMenu from './baseLayout/AsideMenu'

export default {
  components: {AsideMenu}
}
</script>

<style scoped>
  .el-container {
    height: 100%;
  }
</style>
