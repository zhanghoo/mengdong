<template>
  <div class="shop-good" v-show="showFlag">
     <app-header>
      <span slot="left" class="icon icon-back"></span>
      <span slot="title">商品页</span>
      <span slot="right" class="icon icon-share"></span>
    </app-header>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
  name: 'shop-good',
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
.shop-good {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
}
</style>
