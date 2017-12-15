<template>
	<div class="login">
    <div class="bg"></div>
    <div class="wrap">
      <div slot="operation">
        <span class="icon icon-back"></span>
      </div>
      <div class="input-block">
        <span class="icon icon-phone"></span>
        <input type="text" placeholder="手机号">
        <span class="icon icon-close"></span>
      </div>
      <div class="input-block">
        <span class="icon icon-password"></span>
        <input type="password" placeholder="密码">
        <span class="icon icon-close"></span>
      </div>
      <a href="javascript:;" class="btn btn-main btn-register">登录</a>
      <a href="javascript:;" class="">忘记密码</a>
    </div>
    <app-third-login></app-third-login>
  </div>
</template>

<script>
import appThirdLogin from '@/components/appThirdLogin'
export default {
  name: 'login',
  components: {
    appThirdLogin
  }
}
</script>

<style lang="scss">
.login {
}	
</style>
