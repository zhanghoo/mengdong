<template>
  <div class="index">
    <app-header>
      <span solt="title">窝</span>
    </app-header>
    <main-panel :app-list="appList"></main-panel>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import mainPanel from '@/components/mainPanel'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    appHeader,
    mainPanel
  },
  data () {
    return {
      appList: {}
    }
  },
  created () {
    axios.get('mocks/data.json').then((res) => {})
  }
}
</script>

<style lang="scss">
.index {
	h1 {
		color: #666;
		font-size: 14px;
	}
}
</style>
