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
    <shop-main-panel :shopList="shopList"></shop-main-panel>
    <shop-pet-type-page ref="shopPetTypePage"></shop-pet-type-page>
    <shop-cart-page ref="shopCartPage"></shop-cart-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopMainPanel from '@/components/shopMainPanel'
import shopPetTypePage from '@/components/shopPetTypePage'
import shopCartPage from '@/components/shopCartPage'
import axios from 'axios'

export default {
  name: 'shop',
  components: {
    appHeader,
    shopMainPanel,
    shopPetTypePage,
    shopCartPage
  },
  data () {
    return {
      shopList: {}
    }
  },
  created () {
    axios.get('static/mocks/shop/data.json').then((res) => {
      this.shopList = res.data
    })
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
