<template>
	<div class="friend-image-panel">
    <friends-slot-panel>
      <app-image-thumb :images="images"></app-image-thumb>
    </friends-slot-panel>
  </div>
</template>

<script>
import friendsSlotPanel from '@/components/friendsSlotPanel'
import appImageThumb from '@/components/appImageThumb'
export default {
  name: 'friend-image-panel',
  components: {
    friendsSlotPanel,
    appImageThumb
  },
  props: {
    images: Array
  }
}
</script>

<style lang="scss">
.friend-image-panel {
}
</style>
