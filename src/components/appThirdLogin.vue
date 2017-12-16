<template>
  <div class="app-third-login">
    <p class="title-line">
      <span class="line"></span>
      <span class="text">或者</span>
      <span class="line"></span>
    </p>
    <p class="third-login">
      <span class="icon icon-qq"></span>
      <span class="icon icon-wechat"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app-third-login'
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-third-login {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 23%;
  width: 100%;
  height: 14%;
  .title-line {
    display: flex;
    color: #fff;
    .text {
      width: 50px;
      height: 20px;
      line-height: 10px;
      text-align: center;
    }
    .line {
      display: block;
      flex: 1;
      height: 0;
      overflow: hidden;
      border-top: 1px solid #fff;
    }
  }
  .third-login {
    display: flex;
    padding: 20px;
    justify-content: space-between;
  }
}
</style>
