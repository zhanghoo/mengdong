<template>
  <div class="shop-limit-panel">
    <div class="shop-limit-info" :class="[isLeft ? 'left' : 'right']">
      <h3 class="limit-theme">西安市特惠</h3>
      <p class="limit-title">白色经典套夹</p>
      <p class="limit-date">剩余1小时20分钟30秒</p>
      <p class="limit-new-price">80.00</p>
      <p class="limit-old-price">120.00</p>
    </div>
    <div class="shop-limit-img" :class="[!isLeft ? 'left' : 'right']"></div>
  </div>
</template>

<script>
export default {
  name: 'shop-limit-panel',
  props: {
    direction: {
      type: String,
      default: 'left'
    }
  }
  computed: {
    isLeft: {
      return this.direction == 'left' ? true : false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-limit-panel {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 30%;
  width: 100%;
  height: 0;
  display: flex;
  .shop-limit-info {
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    text-align: center;
    &.right {
      left: auto;
      right: 0;
    }
    .limit-theme {
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      font-weight: 700;
      border-bottom: 2px solid $mainColor;
    }
    .limit-title {
      margint-top: 5px;
      height: 15px;
      line-height: 15px;
      font-size: 14px;
      font-weight: 700;
    }
    .limit-date {
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      color: #ccc;
    }
    .limit-new-price {
      margin-top: 10px;
      font-size: 16px;
      color: $mainColor;
    }
    .limit-old-price {
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      color: #ccc;
      text-decoration: line-through;
    }
  }
  .shop-limit-img {
    top: 0;
    right: 0;
    width: 45%;
    height: 100%;
    background: #ccc;
    &.left: {
      right: auto;
      left: 0;
    }
  }
}  
</style>
