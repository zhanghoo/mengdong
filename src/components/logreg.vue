<template>
	<div class="logreg">
    <div class="logreg-bg"><img class="logreg-img" src="static/images/logreg.jpg"></div>
    <div class="logreg-wrap">
      <h1 class="logreg-title">嘿！就剩你了，快上车！</h1>
      <a href="javascript:;" class="btn btn-main btn-login" @click="showLogin">登录</a>
      <a href="javascript:;" class="btn btn-default btn-register" @click="showReg">注册</a>
    </div>
    <app-third-login></app-third-login>
    <login ref="login"></login>
    <register ref="register"></register>
  </div>
</template>

<script>
import appThirdLogin from '@/components/appThirdLogin'
import login from '@/components/login'
import register from '@/components/register'
export default {
  name: 'logreg',
  components: {
    appThirdLogin,
    login,
    register
  },
  methods: {
    showLogin () {
      this.$refs.login.show()
    },
    showReg () {
      this.$refs.register.show()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.logreg	{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $zIndexPage;
  background: $bgColor;
  .logreg-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .logreg-img {
      width: 100%;
      height: 100%;
    }
  }
  .logreg-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .logreg-title {
      position: absolute;
      top: 50%;
      left: 0;
      margin-bottom: -10px;
      width: 100%;
      height: 20px;
      color: #fff;
      text-align: center;
    }
    .btn-login,
    .btn-register {
      position: absolute;
      margin: 0 23%;
      top: 61.5%;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
    .btn-register {
      top: 69.5%;
    }
  }
}
</style>
