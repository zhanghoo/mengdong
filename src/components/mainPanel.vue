<template>
	<div class="main-panel">
    <div class="main-nav">
      <a href="javascript:;" class="main-nav-item active">
        <div>
          <span class="icon icon-article"></span>
          <p class="text">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item">
        <div>
          <span class="icon icon-image"></span>
          <p class="text">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item">
        <div>
          <span class="icon icon-video"></span>
          <p class="text">视频</p>
        </div>
      </a>
    </div>
    <div class="main-content" v-show="showActive">
      <div class="main-tab-item">
        <template v-for="article in appList.articles">
          <main-article-panel :article="article" :key="article.id"></main-article-panel>
        </template>
      </div>
      <div class="main-tab-item">
        <template v-for="image in appList.images">
          <main-image-panel :image="image" :key="image.id"></main-image-panel>
        </template>
      </div>
      <div class="main-tab-item">
        <template v-for="video in appList.videos">
          <main-video-panel :video="video" :key="video.id"></main-video-panel>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import mainArticlePanel from '@/components/mainArticlePanel'
import mainImagePanel from '@/components/mainImagePanel'
import mainVideoPanel from '@/components/mainVideoPanel'

export default {
  name: 'main-panel',
  components: {
    mainArticlePanel,
    mainImagePanel,
    mainVideoPanel
  },
  props: {
    appList: Object,
    showActive: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.main-panel {
  .main-nav {
    display: flex;
    .main-nav-item {
      flex: 1;
      height: 88px;
      @include centerH();
      .icon {
        margin-bottom: 5px;
        width: 30px;
        height: 30px;
      }
    }
  }
  .main-contnet {
    .main-tab-item {

    }
  }
}
</style>
