<template>
  <div class="app-head">
    <div class="app-left">
      <slot name="left">左</slot>
    </div>
    <div class="app-title">
      <slot name="title">标题</slot>
    </div>
    <div class="app-right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-head'
}
</script>

<style lang="scss">
.app-head {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background: $mainColor;
  color: #fff;
  .app-left {
    flex: 0 0 20%;
  }
  .app-title {
    flex: 0 0 60%;
  }
  .app-right {
    flex: 0 0 20%;
  }
}	
</style>
