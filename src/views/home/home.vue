<template>
  <div class="home">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-set"></span>
      </template>
    </app-header>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
  name: 'home',
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
.home {
	h1 {
		color: #666;
		font-size: 14px;
	}
}
</style>