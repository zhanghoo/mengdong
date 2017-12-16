<template>
	<div class="main-panel">
    <div class="main-nav">
      <a href="javascript:;" class="main-nav-item" @click="selectType(0)">
        <div>
          <span class="icon icon-article"></span>
          <p class="text">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item" @click="selectType(1)">
        <div>
          <span class="icon icon-image"></span>
          <p class="text">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="main-nav-item" @click="selectType(2)">
        <div>
          <span class="icon icon-video"></span>
          <p class="text">视频</p>
        </div>
      </a>
      <div class="main-slide-bar" v-show="showActive" ref="mainSlideBar"></div>
    </div>
    <div class="main-content" v-if="showActive">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide>
          <swiper :options="swiperArticleOption" class="text-swiper">
            <swiper-slide>
              <template v-for="article in appList.articles">
                <main-article-panel :article="article" @click="clickArticle(article)" :key="article.id"></main-article-panel>
              </template>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-article-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperImageOption" class="text-swiper">
            <swiper-slide>
              <template v-for="image in appList.images">
                <main-image-panel :image="image" @click="clickImage(image)" :key="image.id"></main-image-panel>
              </template>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-image-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperVideoOption" class="text-swiper">
            <swiper-slide>
              <template v-for="video in appList.videos">
                <main-video-panel :video="video" @click="clickArticleVideo(video)" :key="video.id"></main-video-panel>
              </template>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-video-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
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
    }
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
    },
    selectType (type) {
      this.mainSwiper.slideTo(type)
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
    background: #f7f7f7;
    .main-swiper {
      height: 100%;
      .text-swiper {
        height: 100%;
      }
    }
  }
}
</style>
