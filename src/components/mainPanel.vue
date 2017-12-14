<template>
	<div class="main-panel">
    <div class="nav">
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">视频</p>
        </div>
      </a>
    </div>
    <div class="content">
      <div class="tab-item">
        <article-panel v-for="article in articles" :key="article.id" :article="article"></article-panel>
      </div>
      <div class="tab-item">
        <image-panel v-for="image in images" :key="image.id" :image="image"></image-panel>
      </div>
      <div class="tab-item">
        <video-panel v-for="video in videos" :key="video.id" :video="video"></video-panel>
      </div>
    </div>
  </div>
</template>

<script>
import articlePanel from '@/component/articlePanel'
import imagePanel from '@/component/imagePanel'
import videoPanel from '@/component/videoPanel'

export default {
	name: 'main-panel',
  components: {
    appHeader,
    articlePanel,
    imagePanel,
    videoPanel
  },
  props: {
    appList: Object
  },
  data() {
    return {
      articles: [],
      images: [],
      videos: []
    }
  }
}
</script>

<style lang="scss">
.main-panel {
  .nav {
    display: flex;
    .nav-item {
      flex: 1;
    }
  }
  .contnet {
    .tab-item {
      display: none;
    }
  }
}
</style>
