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
      <span class="loginTip" v-show="showTip">{{tipMessage}}</span>
      <el-checkbox v-model="checked">记住密码</el-checkbox>
    </div>
    <div class="button-row">
      <button @click="login">登录</button>
    </div>
  </form>
</template>

<script>
import {setCookie, getCookie} from '../assets/js/cookie'

export default {
  data () {
    return {
      username: '',
      password: '',
      showTip: false,
      tipMessage: '',
      checked: false
    }
  },
  mounted () {
    if (getCookie('username')) {
      this.$router.push('/home')
    }
  },
  methods: {
    login () {
      if (this.username === '') {
        this.tipMessage = '用户名不能为空！'
        this.showTip = true
        return false
      }
      if (this.password === '') {
        this.tipMessage = '密码不能为空！'
        this.showTip = true
        return false
      }
      // TODO  调用接口判断用户名密码是否正确
      if (this.username === 'admin' && this.password === '123') {
        this.tipMessage = '登录成功！正在为您跳转…'
        this.showTip = true
        setCookie('username', this.username, 1000 * 60)
        setTimeout(function () {
          this.$router.push('/home')
        }.bind(this), 1000)
      } else {
        this.tipMessage = '用户名或密码不正确！'
        this.showTip = true
        return false
      }
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
    top: 0;
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

  .loginTip {
    float: left;
    color: #F35A5A;
  }

  .button-row {
    text-align: center;
    margin: 8px 0 0;
    font-size: 14px;
  }

  .button-row button {
    background: #49AEEB;
    color: white;
    width: 250px;
    height: 34px;
    line-height: 34px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .button-row button:hover {
    background: #8ABAF0;
  }
</style>
