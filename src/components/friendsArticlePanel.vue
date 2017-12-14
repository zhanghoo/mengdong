<template>
	<div class="friend-article-panel">
    <friends-slot-panel>
      <div class="article-content">
        <div class="img"></div>
        <div class="cover">
          <h2 class="title-line">美文</h2>
          <h3 class="title">有生命就会有灵魂，不管它是不是人类</h3>
        </div>
      </div>
    </friends-slot-panel>
  </div>
</template>

<script>
import friendsSlotPanel from '@/components/friendsSlotPanel'
export default {
  name: 'friend-article-panel',
  components: {
    friendsSlotPanel
  }
}
</script>

<style lang="scss">
.friend-article-panel {
}
</style>
