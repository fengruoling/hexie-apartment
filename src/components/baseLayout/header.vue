<template>
  <div id="header">
    <img id="logo" src="../../assets/logo.png">
    <div class="user-info">
      {{msg}}
      <span :key="btn.id" v-for="{btn, index} in button">[ <a>{{btn.label}}</a> ] <span v-if="index">/</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '您好游客，欢迎您！享受更多服务，请',
      button: [
        {id: 1, label: '登录'},
        {id: 2, label: '注册'}
      ],
      btnLen: 2
    }
  }
}
</script>

<style scoped>
  .user-info {
    position: absolute;
    right: 20px;
    top: 0;
    height: 60px;
    line-height: 60px;
    color: white;
  }
  a {
    color: blueviolet;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
