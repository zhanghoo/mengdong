<template>
	<div class="friend-video-panel">
    <friends-slot-panel>
      <div class="video-content">
        <div></div>
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
  }
}
</script>

<style lang="scss">
.friend-video-panel {
}
</style>
