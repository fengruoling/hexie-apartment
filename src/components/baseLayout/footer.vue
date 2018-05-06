<template>
  <div id="footer">
    <p>
      <span v-for="item in footerItem"><a>{{item.label}}</a></span>
    </p>
    <p>Copyright © 2018 - 2019 &nbsp;&nbsp;&nbsp;&nbsp;版权所有 FMZ</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerItem: [
        {label: '意见反馈'},
        {label: '联系我'}
      ]
    }
  }
}
</script>

<style scoped>
  p {
    text-align: center;
    height: 20px;
    line-height: 20px;
    padding-top: 12px;
  }
  p>span {
    padding: 0 20px;
    border-right: 1px solid #808181;
  }
  p>span:last-child {
    border-right: none;
  }
  a {
    cursor: pointer;
  }
  a:hover {
    color: #aaa;
  }
</style>
