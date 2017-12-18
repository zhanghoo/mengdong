<template>
  <div class="shop-cart-page" v-show="showFlag">
  	<app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">购物车</span>
      <span slot="right"></span>
    </app-header>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
  name: 'shop-cart',
  components: {
    appHeader
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
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-cart-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: $slideBgColor;
  .app-header {
    z-index: 1100;
  }
}
</style>
