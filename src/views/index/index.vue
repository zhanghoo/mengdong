<template>
  <div class="index">
    <app-header>
      <span solt="title">窝</span>
    </app-header>
    <main-panel :appList="appList"></main-panel>
  </div>
</template>

<script>
import appHeader from '@/component/appHeader'
import mainPanel from '@/components/mainPanel'

export default {
  name: 'index',
  components: {
    mainPanel
  },
  data {
    return {
      appList: {}
    }
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
