<template>
  <div class="shop-best">
    <div class="shop-best-bg">
      <p class="shop-best-theme">喵喵物语</p>
      <p class="shop-best-title">我不是喜欢孤单，而是没人陪我玩</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-best'
}
</script>

<style lang="scss">
.shop-best {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 50%;
  width: 100%;
  height: 0;
  background: rgba(255, 255, 255, .6);
  .shop-best-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff
  }
}
</style>
