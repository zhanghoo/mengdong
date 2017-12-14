<template>
	<div class="about-main-panel">
    <div class="header">
      <div class="head-bar"></div>
      <div class="bg"></div>
      <div class="about">
        <div class="avatar"></div>
        <p class="name"><span class="text">丫丫<span></p>
        <p class="signature">当你善待它的时候，它会以意想不到的方式回报你</p>
      </div>
    </div>
    <main-panel></main-panel>
    <div class="footer">
      <a href="javascrip:;" class="btn-chat">聊天有趣的</a>
    </div>
  </div>
</template>

<script>
import mainPanel from '@/component/mainPanel'
export default {
	name: 'about-main-panel',
  components: {
    mainPanel
  }
}
</script>

<style lang="scss">
.about-main-panel {
}
</style>
