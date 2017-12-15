<template>
	<div class="home-main-panel">
    <home-header>
      <div slot="left"></div>
      <div slot="right">右</div>
    </home-header>
    <main-panel :showActive="showActiveFlag"></main-panel>
  </div>
</template>

<script>
import homeHeader from '@/component/homeHeader'
import mainPanel from '@/component/mainPanel'
export default {
  name: 'home-main-panel',
  components: {
    homeHeader,
    mainPanel
  },
  data () {
    return {
      showActiveFlag: false
    }
  }
}
</script>

<style lang="scss">
.home-main-panel {
}
</style>
