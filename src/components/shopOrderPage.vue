<template>
  <div class="shop-order-page" v-show="showFlag"></div>
</template>

<script>
export default {
  name: 'shop-order-page',
  data () {
    return () {
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
.shop-order-page {
}
</style>
