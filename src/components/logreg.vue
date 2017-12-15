<template>
	<div class="logreg">
    <div class="bg"></div>
    <div class="wrap">
      <h1 class="title">嘿！就剩你了，快上车！</h1>
      <a href="javascript:;" class="btn btn-main btn-login" @click="showLogin">登录</a>
      <a href="javascript:;" class="btn btn-default" @click="showReg">注册</a>
    </div>
    <app-third-login></app-third-login>
    <login v-show="loginShowFlag">
      <div slot="operation">
        <span class="icon icon-back" @click="hideLogin"></span>
      </div>
    </login>
    <register v-show="regShowFlag">
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
  },
  data () {
    return {
      loginShowFlag: false,
      regShowFlag: false
    }
  },
  methods: {
    showLogin () {
      this.showLogin = true
    },
    hideLogin () {
      this.showLogin = false
    },
    showReg () {
      this.regShowFlag = true
    },
    hideReg () {
      this.regShowFlag = false
    }
  }
}
</script>

<style lang="scss">
.logreg	{

}
</style>
