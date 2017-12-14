<template>
	<div class="image-dialog">
    <div class="content">
      <div class="image-wrapper"></div>
      <div class="text">我今年九岁，用你们人类的年龄计算，意识耄耋之年，如果我是一个人，或许会写一封诗意盎然的告别信。然后潇洒地离开。但是我只是一直猫，我只能用我的呼噜声与你告别。</div>
      <p class="info">
        <span class="date">2017-12-12</span>
        <span class="author">小雨</span>
      </p>
    </div>
    <div class="close"></div>
  </div>
</template>

<script>
export default {
	name: 'image-dialog'
}
</script>

<style lang="scss">
.image-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  &:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
    background: rgba(255, 255, 255, .3);
  }
}	
</style>
