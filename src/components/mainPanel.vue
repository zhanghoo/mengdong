<template>
	<div class="main-panel">
    <div class="main-nav" :class="pageRole">
      <a href="javascript:;" class="main-nav-item" @click="selectType(0)">
        <div>
          <span class="icon icon-article"></span>
          <p class="num" v-show="!showActive">{{articlesNum}}</p>
          <p class="text" :class="{ sm : !showActive }">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item" @click="selectType(1)">
        <div>
          <span class="icon icon-image"></span>
          <p class="num" v-show="!showActive">{{imagesNum}}</p>
          <p class="text" :class="{ sm : !showActive }">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item" @click="selectType(2)">
        <div>
          <span class="icon icon-video"></span>
          <p class="num" v-show="!showActive">{{videosNum}}</p>
          <p class="text" :class="{ sm : !showActive }">视频</p>
        </div>
      </a>
      <div class="main-slide-bar" v-show="showActive" ref="mainSlideBar"></div>
    </div>
    <div class="main-content" v-if="showActive">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide>
          <swiper :options="swiperArticleOption" class="text-swiper">
            <swiper-slide>
              <div v-for="article in appList.articles" @click.stop="clickArticle(article)" :key="article.id">
                <main-article-panel :article="article"></main-article-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-article-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperImageOption" class="text-swiper">
            <swiper-slide>
              <div v-for="image in appList.images" @click.stop="clickImage(image)" :key="image.id">
                <main-image-panel :image="image"></main-image-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-image-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperVideoOption" class="text-swiper">
            <swiper-slide>
              <div v-for="video in appList.videos" @click.stop="clickVideo(video)" :key="video.id">
                <main-video-panel :video="video"></main-video-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-video-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
    <app-texts-page v-if="showActive" :article="selectedArticle" :textsType.number="textsType" ref="article"></app-texts-page>
    <app-image-dialog v-if="showActive" :image="selectedImage" ref="image"></app-image-dialog>
    <app-video-dialog v-if="showActive" :video="selectedVideo" ref="video"></app-video-dialog>
  </div>
</template>

<script>
import mainArticlePanel from '@/components/mainArticlePanel'
import mainImagePanel from '@/components/mainImagePanel'
import mainVideoPanel from '@/components/mainVideoPanel'
import appTextsPage from '@/components/appTextsPage'
import appImageDialog from '@/components/appImageDialog'
import appVideoDialog from '@/components/appVideoDialog'

export default {
  name: 'main-panel',
  components: {
    mainArticlePanel,
    mainImagePanel,
    mainVideoPanel,
    appTextsPage,
    appImageDialog,
    appVideoDialog
  },
  props: {
    appList: Object,
    showActive: {
      type: Boolean,
      default: true
    },
    pageRole: String
  },
  data () {
    const self = this
    return {
      textsType: 0,
      selectedArticle: {},
      selectedImage: {},
      selectedVideo: {},
      mainSwiperOption: {
        /* eslint-disable */
        clickable: true,
        autoplay: false,
        roundLengths: true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on: {
          slideChangeTransitionStart() {
            self.$refs.mainSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          }
        }
        /* eslint-enable */
      },
      swiperArticleOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-article-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperImageOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-image-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperVideoOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-video-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      }
    }
  },
  computed: {
    mainSwiper () {
      return this.$refs.mainSwiper.swiper
    },
    articlesNum () {
      return this.appList.articles ? this.appList.articles.length : 0
    },
    imagesNum () {
      return this.appList.images ? this.appList.images.length : 0
    },
    videosNum () {
      return this.appList.videos ? this.appList.videos.length : 0
    }
  },
  methods: {
    clickArticle (article) {
      this.selectedArticle = article
      this.textsType = 0
      this.$refs.article.show()
    },
    clickImage (image) {
      this.selectedImage = image
      this.$refs.image.show()
    },
    clickVideo (video) {
      this.selectedVideo = video
      this.$refs.video.show()
    },
    selectType (type) {
      if (this.showActive) {
        this.mainSwiper.slideTo(type)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.main-panel {
  .main-nav {
    position: relative;
    display: flex;
    z-index: 20;
    background: #fff;
    &.index {
      position: fixed;
      top: 48px;
      left: 0;
      width: 100%;
      height: 88px;
    }
    .main-nav-item {
      flex: 1;
      height: 88px;
      @include centerH();
      .icon {
        margin-bottom: 5px;
        width: 30px;
        height: 30px;
      }
      .num {
        font-size: 18px;
        text-align: center;
      }
      .text {
        &.sm {
          font-size: 12px;
          text-align: center;
          color: #ccc;
        }
      }
    }
    .main-slide-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 33.3333%;
      height: 2px;
      background: transparent;
      transition: left .2s ease;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        width: 50%;
        height: 2px;
        background: $darkOrange;
      }
    }
  }
  .main-content {
    position: fixed;
    padding: 136px 0 58px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    background: $slideBgColor;
    .main-swiper {
      height: 100%;
      .text-swiper {
        height: 100%;
      }
    }
  }
}
</style>
