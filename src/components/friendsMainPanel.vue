<template>
  <div class="friends-main-panel">
    <template v-for="active in friendsList">
      <template v-if="active.type == 0">
        <friends-article-panel :article="active"></friends-article-panel>
      </template>
      <template v-else-if="active.type == 1">
        <friends-image-panel :image="active"></friends-image-panel>
      </template>
      <template v-else>
        <friends-video-panel :video="active"></friends-video-panel>
      </template>
    </template>
  </div>
</template>

<script>
import friendsArticlePanel from '@/component/friendsArticlePanel'
import friendsImagePanel from '@/component/friendsImagePanel'
import friendsVideoPanel from '@/component/friendsVideoPanel'

export default {
  name: 'friends-main-panel',
  components: {
    friendsArticlePanel,
    friendsImagePanel,
    friendsVideoPanel
  },
  props: {
    friendsList: Object
  }
}
</script>

<style lang="scss">
.friends-main-panel {

}
</style>
