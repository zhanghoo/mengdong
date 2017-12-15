<template>
  <div class="shop">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-type"></span>
        <span class="icon icon-cart"></span>
      </template>
    </app-header>
    <shop-main-panel></shop-main-panel>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopMainPanel from '@/components/shopMainPanel'
export default {
  name: 'shop',
  components: {
    appHeader,
    shopMainPanel
  }
}
</script>

<style lang="scss">
.shop {
}
</style>
