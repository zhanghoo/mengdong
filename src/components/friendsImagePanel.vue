<template>
	<div class="friend-image-panel">
    <friends-slot-panel :active="image">
      <app-image-thumb :images="images"></app-image-thumb>
      <div class="friend-image-content">{{image.content}}</div>
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
    image: Object
  },
  computed: {
    images () {
      return this.image.images
    }
  }
}
</script>

<style lang="scss">
.friend-image-panel {
  .friend-image-content {
    padding: 15px 15px 0;
    line-height: 20px;
  }
}
</style>
