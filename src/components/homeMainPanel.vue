<template>
	<div class="home-main-panel">
    <home-header>
      <div slot="left"></div>
      <div slot="right">右</div>
    </home-header>
    <main-panel :appList="mineList" :showActive="showActiveFlag"></main-panel>
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader'
import mainPanel from '@/components/mainPanel'

export default {
  name: 'home-main-panel',
  components: {
    homeHeader,
    mainPanel
  },
  data () {
    return {
      mineList: {},
      showActiveFlag: false
    }
  },
  create () {
    axios.get('static/mocks/home/data.json').then((res) => {
      this.mineList = res.data
    })
  }
}
</script>

<style lang="scss">
.home-main-panel {
}
</style>
