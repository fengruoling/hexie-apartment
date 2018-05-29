<template>
  <el-row class="tac">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <i class="menu-icon icon-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="menu-icon icon-qrcode"></i>
          <span>房间管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">日租房管理</el-menu-item>
          <el-menu-item index="2-2">月租房管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>
  </el-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .tac, .el-menu {
    height: 100%;
  }

  .menu-icon {
    font-size: 18px;
    margin-right: 10px;
  }
</style>
