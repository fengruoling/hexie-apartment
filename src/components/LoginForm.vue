<template>
  <form>
    <div class="title">登录</div>
    <div class="input-row">
      <label>用户名：</label>
      <input type="text" v-model="username"/>
    </div>
    <div class="input-row">
      <label>密码：</label>
      <input type="text" v-model="password"/>
    </div>
    <div class="check-row">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
    </div>
    <div class="button-row">
      <router-link to="/home">登录</router-link>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      checked: false
    }
  }
}
</script>

<style scoped>
  form {
    background: white;
    padding: 30px;
  }

  .title {
    margin: 5px 0 15px;
    font-size: 20px;
    font-weight: bold;
  }

  .title:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 2px;
    width: 5px;
    height: 19px;
    margin-right: 10px;
    background: #49AEEB;
  }

  .input-row {
    height: 50px;
    line-height: 50px;
    position: relative;
  }

  .input-row label {
    position: absolute;
    top: 0px;
    left: 15px;
    font-size: 13px;
    color: #666;
  }

  input {
    height: 34px;
    width: 250px;
    outline: none;
    border: 1px solid #ccc;
    padding: 0 10px 0 70px;
    box-sizing: border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
  }

  input:hover, input:focus {
    border-color: #b3b3b3;
  }

  .check-row {
    text-align: right;
    height: 30px;
    line-height: 30px;
  }

  .button-row {
    text-align: center;
    margin: 8px 0 0;
    font-size: 14px;
  }

  .button-row a {
    text-decoration: none;
    display: inline-block;
    background: #49AEEB;
    color: white;
    width: 250px;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
  }
</style>
