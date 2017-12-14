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
        <main-article-panel v-for="article in articles" :key="article.id" :article="article"></main-article-panel>
      </div>
      <div class="tab-item">
        <main-image-panel v-for="image in images" :key="image.id" :image="image"></main-image-panel>
      </div>
      <div class="tab-item">
        <main-video-panel v-for="video in videos" :key="video.id" :video="video"></main-video-panel>
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
    appList: Object
  },
  data () {
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
