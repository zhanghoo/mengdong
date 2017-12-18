<template>
  <div class="shop-main-panel">
    <div class="shop-nav">
      <a href="javascript:;" class="shop-nav-item">精选</a>
      <a href="javascript:;" class="shop-nav-item">热销</a>
      <a href="javascript:;" class="shop-nav-item">现实</a>
    </div>
    <div class="shop-content">
      <shop-best-panel></shop-best-panel>
      <shop-hot-panel></shop-hot-panel>
      <shop-limit-panel></shop-limit-panel>
    </div>
    <shop-texts-page ref="shopTextsPage"></shop-texts-page>
     <shop-good-page ref="shopGoodPage"></shop-good-page>
  </div>
</template>

<script>
import shopBestPanel from '@/components/shopBestPanel'
import shopHotPanel from '@/components/shopHotPanel'
import shopLimitPanel from '@/components/shopLimitPanel'
import shopTextsPage from '@/components/shopTextsPage'
import shopGoodPage from '@/components/shopGoodPage'
export default {
  name: 'shop-main-panel',
  components: {
    shopBestPanel,
    shopHotPanel,
    shopLimitPanel,
    shopTextsPage,
    shopGoodPage
  },
  methods: {
    showTextPage () {
      this.$refs.shopTextsPage.show()
    },
    showGoodPage () {
      this.$refs.shopGoodPage.show()
    }
  }
}
</script>

<style lang="scss">
.shop-main-panel {
}
</style>
