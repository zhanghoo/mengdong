<template>
  <div class="app-header" :class="{ main: isMain }">
    <div class="app-left">
      <slot name="left">左</slot>
    </div>
    <div class="app-title" :class="{ main: isMain }">
      <slot name="title">标题</slot>
    </div>
    <div class="app-right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    isMain: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-header {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 15px;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: transparent;
  &.main {
    background: $mainColor;
  }
  color: #fff;
  z-index: $zIndexNav;
  .app-left {
    flex: 0 0 20%;
    width: 20%;
  }
  .app-title {
    flex: 0 0 60%;
    width: 60%;
    text-align: center;
    color: transparent;
    &.main {
      color: #fff;
    }
  }
  .app-right {
    flex: 0 0 20%;
    width: 20%;
    text-align: right;
  }
}	
</style>
