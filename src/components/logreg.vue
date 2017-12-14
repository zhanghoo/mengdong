<template>
	<div class="logreg">
    <div class="bg"></div>
    <div class="wrap">
      <h1 class="title">嘿！就剩你了，快上车！</h1>
      <a href="javascript:;" class="btn btn-main btn-login">登录</a>
      <a href="javascript:;" class="btn btn-default">注册</a>
    </div>
    <app-third-login></app-third-login>
  </div>
</template>

<script>
import appThirdLogin from '@/component/appThirdLogin'
export default {
  name: 'logreg',
  components: {
    appThirdLogin
  }
}
</script>

<style lang="scss">
.logreg	{

}
</style>
