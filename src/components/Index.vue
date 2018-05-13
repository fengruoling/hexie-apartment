<template>
  <div>
    <div class="wrap">
      <el-carousel height="400px">
        <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
      </el-carousel>
      <div class="login-box">
        <LoginForm/>
      </div>
    </div>
    <div class="introduction">
      <div class="introduction-title">
        <h3>特色功能介绍</h3>
      </div>
      <div style="height: 500px"></div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'

export default {
  components: {LoginForm}
}
</script>

<style scoped>
  .wrap {
    position: relative;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .login-box {
    position: absolute;
    padding: 5px;
    background: rgba(255, 255, 255, 0.3);
    top: 20px;
    right: 50px;
    z-index: 2;
  }

  .introduction-title {
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: #555;
  }

  .introduction-title h3 {
    position: relative;
  }

  .introduction-title h3:before, .introduction-title h3:after {
    content: "";
    position: absolute;
    display: block;
    width: 15%;
    height: 2px;
    background: #eee;
    top: 50%
  }

  .introduction-title h3:before {
    left: 25%;
  }

  .introduction-title h3:after {
    right: 25%;
  }
</style>
