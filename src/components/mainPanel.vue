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
          <main-article-panel :article="article" @click="clickArticle(article)" :key="article.id"></main-article-panel>
        </template>
      </div>
      <div class="main-tab-item">
        <template v-for="image in appList.images">
          <main-image-panel :image="image" @click="clickImage(image)" :key="image.id"></main-image-panel>
        </template>
      </div>
      <div class="main-tab-item">
        <template v-for="video in appList.videos">
          <main-video-panel :video="video" @click="clickArticleVideo(video)" :key="video.id"></main-video-panel>
        </template>
      </div>
    </div>
    <app-texts-page :article="selectedArticle" :textsType="textsType" ref="article"></app-texts-page>
    <app-image-dialog :image="selectedImage" ref="image"></app-image-dialog>
    <app-video-dialog :video="selectedVideo" ref="video"></app-video-dialog>
  </div>
</template>

<script>
import mainArticlePanel from '@/components/mainArticlePanel'
import mainImagePanel from '@/components/mainImagePanel'
import mainVideoPanel from '@/components/mainVideoPanel'
import appTextsPage from '@/components/appTextsPage'
import appImageDialog from '@/components/appImageDialog'

export default {
  name: 'main-panel',
  components: {
    mainArticlePanel,
    mainImagePanel,
    mainVideoPanel,
    appTextsPage,
    appImageDialog
  },
  props: {
    appList: Object,
    showActive: {
      type: Boolean,
      default: true
    }
  },
  data: {
    return {
      textsType: 0,
      selectedArticle: {},
      selectedImage: {},
      selectedVideo: {}
    }
  },
  methods: {
    clickArticle (article) {
      this.$refs.article.show()
      this.selectedArticle = article
      this.textsType = 0
    },
    clickImage (image) {
      this.$refs.image.show()
      this.selectedImage = image
    },
    clickVideo (video) {
      this.$refs.video.show()
      this.selectedVideo = video
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
