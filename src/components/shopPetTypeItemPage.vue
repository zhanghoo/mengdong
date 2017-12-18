<template>
  <div class="shop-pet-type-item" v-show="showFlag">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">汪汪朝服</span>
      <span slot="right" class="icon icon-cart"></span>
    </app-header>
    <div class="shop-pet-type-wrap">
      <div class="shop-pet-type-item-nav">
        <div class="content">
          <a href="javascript:;">默认</a>
          <a href="javascript:;">价格</a>
          <a href="javascript:;">评价最高</a>
        </div>
        <div class="slide-bar"></div>
      </div>
      <div class="shop-pet-type-item-content">
        <shop-pet-panel></shop-pet-panel>
        <shop-pet-panel></shop-pet-panel>
        <shop-pet-panel></shop-pet-panel>
      </div>
    </div>
    <shop-good-page ref="shopGoodPage"></shop-good-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopPetPanel from '@/components/shopPetPanel'
import shopGoodPage from '@/components/shopGoodPage'
export default {
  name: 'shop-pet-type-item',
  components: {
    appHeader,
    shopPetPanel,
    shopGoodPage
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
    showGoodPage () {
      this.$refs.shopGoodPage.show()
    }
  }
}
</script>

<style lang="scss">
.shop-pet-type-item {
}
</style>
