<template>
	<div class="about-main-panel">
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
import homeHeader from '@/component/homeHeader'
import mainPanel from '@/component/mainPanel'
export default {
	name: 'about-main-panel',
  components: {
    homeHeader,
    mainPanel
  }
}
</script>

<style lang="scss">
.about-main-panel {
}
</style>
