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
  </form>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  form {
    background: white;
    padding: 20px;
  }

  .title {
    margin: 5px 0 10px;
    font-size: 18px;
    font-weight: bold;
  }

  .title:before {
    content: "";
    display: inline-block;
    position: relative;
    top: 2px;
    width: 5px;
    height: 17px;
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
</style>
