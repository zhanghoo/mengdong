<template>
	<div class="logreg">
    <div class="bg"></div>
    <div class="wrap">
      <h1 class="title">嘿！就剩你了，快上车！</h1>
      <slot>
      <a href="javascript:;" class="btn btn-main btn-login">登录</a>
      <a href="javascript:;" class="btn btn-default">注册</a>
      </slot>
    </div>
    <app-third-login></app-third-login>
    <login>
      <div slot="operation">
        <span class="icon icon-back" @click="hideLogin"></span>
      </div>
    </login>
    <register>
      <div slot="operation">
        <span class="icon icon-back" @click="hideReg"></span>
      </div>
    </register>
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
  }
}
</script>

<style lang="scss">
.logreg	{

}
</style>
