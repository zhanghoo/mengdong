<template>
	<div class="register">
    <div class="bg"></div>
    <div class="wrap">
      <div class="input-block">
        <span class="icon icon-phone"></span>
        <input type="text">
        <span class="icon icon-close"></span>
      </div>
      <div class="input-block">
        <span class="icon icon-password"></span>
        <input type="password">
        <span class="icon icon-close"></span>
      </div>
      <div class="input-block">
        <span class="icon icon-verify"></span>
        <input type="text">
        <span class="icon icon-close"></span>
        <a href="javascript:;" class="btn btn-small btn-get-verify">获取</a>
      </div>
      <a href="javascript:;" class="btn btn-main btn-register">注册</a>
    </div>
    <app-third-login></app-third-login>
  </div>
</template>

<script>
import appThirdLogin from '@/components/appThirdLogin'
export default {
  name: 'register',
  components: {
    appThirdLogin
  }
}
</script>

<style lang="scss">
.register {
}	
</style>
