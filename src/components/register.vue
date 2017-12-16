<template>
	<div v-show="showFlag" class="register">
    <div class="register-bg"><img class="register-img" src="static/images/register.jpg"></div>
    <div class="register-wrap">
      <span class="icon icon-back" @click="hide"></span>
      <div class="input-block">
        <span class="icon-phone-pack"><i class="icon icon-phone"></i></span>
        <input class="input" type="text" placeholder="请输入手机号">
        <span class="icon-close-pack" @click="empty($event)"><i class="icon icon-close"></i></span>
      </div>
      <div class="input-block">
        <span class="icon-password-pack"><i class="icon icon-password"></i></span>
        <input class="input" type="password" placeholder="设置登录密码，不少于6位">
        <span class="icon-close-pack" @click="empty($event)"><i class="icon icon-close"></i></span>
      </div>
      <div class="input-block">
        <span class="icon-verify-pack"><i class="icon icon-verify"></i></span>
        <input class="input" type="text" placeholder="输入验证码">
        <span class="icon-close-pack verify" @click="empty($event)"><i class="icon icon-close"></i></span>
        <a href="javascript:;" class="btn btn-sm btn-get-verify">获取</a>
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
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    empty (e) {
      const tag = e.target
      const par = tag.parentNode
      const input = par.previousElementSibling
      input.value = ''
      input.focus()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.register {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .register-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .register-img {
      width: 100%;
      height: 100%;
    }
  }
  .register-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 90px;
    width: 100%;
    height: 100%;
    .icon-back {
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .input-block {
      display: flex;
      position: relative;
      margin: 0 15% 10px;
      width: 70%;
      height: 40px;
      line-height: 40px;
      .icon-phone-pack,
      .icon-password-pack,
      .icon-verify-pack {
        @include centerH();
        width: 40px;
      }
      .input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid #eee;
        background: transparent;
        color: #eee;
        &:focus + .icon-close-pack {
          display: flex;
        }
      }
      @include placeholder {
        color: #eee;
      }
      .icon-close-pack {
        @include centerH();
        display: none;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -10px;
        &.verify {
          right: 80px;
        }
      }
      .btn-get-verify {
        position: absolute;
        top: 10px;
        right: 0;
        width: 70px
      }
    }
    .btn-register{
      margin: 10px 23% 0;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
  }
}	
</style>
