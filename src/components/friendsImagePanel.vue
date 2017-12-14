<template>
	<div class="friend-image-panel">
    <friends-slot-panel>
      <div class="image-content">
        <div></div>
      </div>
    </friends-slot-panel>
  </div>
</template>

<script>
import friendsSlotPanel from '@/components/friendsSlotPanel'
export default {
  name: 'friend-image-panel',
  components: {
    friendsSlotPanel
  }
}
</script>

<style lang="scss">
.friend-image-panel {
}
</style>
