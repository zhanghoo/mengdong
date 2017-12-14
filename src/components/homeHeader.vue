<template>
	<div class="home-header">
    <div class="head-bar">
      <slot name="left"></slot>
      <span class="title"></span>
      <slot name="right"></slot>
    </div>
    <div class="bg"></div>
    <div class="about">
      <div class="avatar"></div>
      <p class="name"><span class="text">丫丫<span></p>
      <p class="signature">当你善待它的时候，它会以意想不到的方式回报你</p>
    </div>
  </div>
</template>

<script>
export default {
	name: 'home-header'
}
</script>

<style lang="scss">
.home-header {

}	
</style>
