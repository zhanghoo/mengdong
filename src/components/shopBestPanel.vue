<template>
  <div class="shop-best">
    <div class="shop-best-bg">
      <div>
        <span class="shop-best-theme">{{best.theme}}</span>
        <p class="shop-best-title">{{best.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-best',
  props: {
    best: Object
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-best {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 60%;
  width: 100%;
  height: 0;
  .shop-best-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(0, 0, 0, .2);
    @include centerH();
    text-align: center;
    .shop-best-theme {
      position: relative;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 2px solid #fff;
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 0;
        border-bottom: 1px solid #fff;
      }
    }
    .shop-best-title {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
