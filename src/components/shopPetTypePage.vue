<template>
  <div class="shop-pet-type" v-show="showFlag">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">品类</span>
      <span slot="right" class="icon icon-cart"></span>
    </app-header>
    <shop-pet-type-panel></shop-pet-type-panel>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopPetTypePanel from '@/components/shopPetTypePanel'
export default {
  name: 'shop-pet-type',
  components: {
    appHeader,
    shopPetTypePanel
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
.shop-pet-type {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background: $slideBgColor;
  .app-header {
    z-index: 1000;
  }
}
</style>
