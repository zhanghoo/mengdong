<template>
	<div class="app-about-page">
    <home-header>
      <div slot="left">左</div>
      <div slot="right"></div>
    </home-header>
    <main-panel></main-panel>
    <div class="footer">
      <a href="javascrip:;" class="btn-chat">聊天有趣的</a>
    </div>
  </div>
</template>

<script>
import homeHeader from '@/components/homeHeader'
import mainPanel from '@/components/mainPanel'
export default {
  name: 'app-about-page',
  components: {
    homeHeader,
    mainPanel
  }
}
</script>

<style lang="scss">
.app-about-page {
}
</style>
