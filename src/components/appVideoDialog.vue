<template>
	<div v-show="showFlag" class="app-video-dialog" @click="hide">
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-video-dialog',
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
.app-video-dialog {
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
