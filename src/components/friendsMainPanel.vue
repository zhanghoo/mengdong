<template>
  <div class="friends-main-panel">
    <swiper class="friends-swiper" :options="friendsSwiperOption">
      <swiper-slide>
        <template v-for="active in activesList.actives">
          <template v-if="active.type == 0">
            <friends-article-panel :article="active" :key="active.id"></friends-article-panel>
          </template>
          <template v-else-if="active.type == 1">
            <friends-image-panel :image="active" :key="active.id"></friends-image-panel>
          </template>
          <template v-else>
            <friends-video-panel :video="active" :key="active.id"></friends-video-panel>
          </template>
        </template>
      </swiper-slide>
      <div class="swiper-scrollbar swiper-friends-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
import friendsArticlePanel from '@/components/friendsArticlePanel'
import friendsImagePanel from '@/components/friendsImagePanel'
import friendsVideoPanel from '@/components/friendsVideoPanel'

export default {
  name: 'friends-main-panel',
  components: {
    friendsArticlePanel,
    friendsImagePanel,
    friendsVideoPanel
  },
  props: {
    activesList: Object
  },
  data () {
    return {
      friendsSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-friends-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.friends-main-panel {
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 0 58px;
  width: 100%;
  height: 100%;
  background: $slideBgColor;
  .friends-swiper {
    width: 100%;
    height: 100%;
  }
}
</style>
