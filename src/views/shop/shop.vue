<template>
  <div class="shop">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-type" @click="showType"></span>
        <span class="icon icon-cart" @click="showCart"></span>
      </template>
    </app-header>
    <shop-main-panel></shop-main-panel>
    <shop-pet-type-page href="shopPetTypePage"></shop-pet-type-page>
    <shop-cart-page href="shopCartPage"></shop-cart-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopMainPanel from '@/components/shopMainPanel'
import shopPetTypePage from '@/components/shopPetTypePage'
import shopCartPage from '@/components/shopCartPage'
export default {
  name: 'shop',
  components: {
    appHeader,
    shopMainPanel,
    shopPetTypePage,
    shopCartPage
  },
  methods: {
    showType () {
      this.$refs.shopPetTypePage.show()
    },
    showCart () {
      this.$refs.shopCartPage.show()
    }
  }
}
</script>

<style lang="scss">
.shop {
}
</style>
