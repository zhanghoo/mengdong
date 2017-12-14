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
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
  name: 'shop',
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
.shop {
}
</style>