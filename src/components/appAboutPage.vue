<template>
	<div class="app-about-page">
    <home-header>
      <div slot="left">左</div>
      <div slot="right"></div>
    </home-header>
    <main-panel :appList="userList" :showActive="showActiveFlag"></main-panel>
    <div class="footer">
      <a href="javascrip:;" class="btn-chat">聊天有趣的</a>
    </div>
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader'
import mainPanel from '@/components/mainPanel'
import axios from 'axios'

export default {
  name: 'app-about-page',
  components: {
    homeHeader,
    mainPanel
  },
  data () {
    return {
      userList: {},
      showActive: true
    }
  },
  create () {
    axios.get('static/mocks/index/data.json').then((res) => {
      this.userList = res.data
    })
  }
}
</script>

<style lang="scss">
.app-about-page {
}
</style>
