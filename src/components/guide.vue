<template>
	<div class="guide">
    <div class="guide-page page1"></div>
    <div class="guide-page page2"></div>
    <div class="guide-page page3"></div>
    <div class="guide-page page4"></div>
    <div class="guide-page page5"></div>
  </div>
</template>

<script>
export default {
  name: 'guide'
}
</script>

<style lang="scss">
.guide {
  position: relative;
  .guide-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
