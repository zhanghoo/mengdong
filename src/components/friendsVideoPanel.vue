<template>
	<div class="friend-video-panel">
    <friends-slot-panel :active="video">
      <div class="video-content">
        <div class="cover"></div>
        <div class="content">{{video.content}}</div>
      </div>
    </friends-slot-panel>
  </div>
</template>

<script>
import friendsSlotPanel from '@/components/friendsSlotPanel'
export default {
  name: 'friend-video-panel',
  components: {
    friendsSlotPanel
  },
  props: {
    video: Object
  }
}
</script>

<style lang="scss">
.friend-video-panel {
  .video-content {
    .cover {
      padding-top: 55%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #ccc;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      padding: 15px 15px 0;
      line-height: 20px;
    }
  }
}
</style>
