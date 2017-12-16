<template>
	<div v-show="showFlag" class="login">
    <div class="login-bg"><img class="login-img" src="static/images/login.jpg"></div>
    <div class="login-wrap">
      <span class="icon icon-back" @click="hide"></span>
      <div class="input-block">
        <span class="icon-phone-pack"><i class="icon icon-phone"></i></span>
        <input class="input" type="text" placeholder="手机号">
        <span class="icon-close-pack" @click="empty($event)"><i class="icon icon-close"></i></span>
      </div>
      <div class="input-block">
        <span class="icon-password-pack"><i class="icon icon-password"></i></span>
        <input class="input" type="password" placeholder="密码">
        <span class="icon-close-pack" @click="empty($event)"><i class="icon icon-close"></i></span>
      </div>
      <a href="javascript:;" class="btn btn-main btn-login" @click="login">登录</a>
      <a href="javascript:;" class="btn btn-default btn-forget">忘记密码？</a>
    </div>
    <app-third-login></app-third-login>
  </div>
</template>

<script>
import appThirdLogin from '@/components/appThirdLogin'
import { mapMutations, mapActions } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  name: 'login',
  components: {
    appThirdLogin
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    ...mapMutations({
      _setGuideStatus: types.SET_GUIDE_STATUS
    }),
    ...mapActions({
      _login: 'login'
    }),
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
    },
    login () {
      this.showFlag = false
      this._login()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .login-img {
      width: 100%;
      height: 100%;
    }
  }
  .login-wrap {
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
      .icon-password-pack {
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
          visibility: visible;
        }
      }
      @include placeholder {
        color: #eee;
      }
      .icon-close-pack {
        @include centerH();
        visibility: hidden;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -10px;
      }
    }
    .btn-login, .btn-forget{
      margin: 10px 23% 0;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
    .btn-forget {
      border: none;
      font-size: 13px;
      width: 24%;
      margin: 10px 38% 0;
    }
  }
}	
</style>
