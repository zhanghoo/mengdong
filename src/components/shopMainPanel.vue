<template>
  <div class="shop-main-panel">
    <div class="shop-nav">
      <a href="javascript:;" class="shop-nav-item" @click="selectType(0)">精选</a>
      <a href="javascript:;" class="shop-nav-item" @click="selectType(1)">热销</a>
      <a href="javascript:;" class="shop-nav-item" @click="selectType(2)">限时</a>
      <div class="shop-slide-bar" ref="shopSlideBar"></div>
    </div>
    <div class="shop-content">
      <swiper class="shop-swiper" :options="shopSwiperOption" ref="shopSwiper">
        <swiper-slide class="shop-slide">
          <swiper :options="swiperBestOption" class="shop-swiper">
            <swiper-slide>
              <div class="shop-wrap" v-for="best in shopList.best" @click.stop="clickBest(best)" :key="best.id">
                <shop-best-panel :best="best"></shop-best-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-best-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide class="shop-slide">
          <swiper :options="swiperHotOption" class="shop-swiper">
            <swiper-slide>
              <div class="shop-wrap" v-for="hot in shopList.hot" @click.stop="clickHot(hot)" :key="hot.id">
                <shop-hot-panel :hot="hot"></shop-hot-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-hot-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide class="shop-slide">
          <swiper :options="swiperLimitOption" class="shop-swiper">
            <swiper-slide>
              <div class="shop-wrap" v-for="(limit, index) in shopList.limit" @click.stop="clickLimit(limit)" :key="limit.id">
                <shop-limit-panel :limit="limit" :direction="_setDirection(index)"></shop-limit-panel>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-limit-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
    <shop-texts-page ref="shopTextsPage"></shop-texts-page>
    <shop-good-page ref="shopGoodPage"></shop-good-page>
  </div>
</template>

<script>
import shopBestPanel from '@/components/shopBestPanel'
import shopHotPanel from '@/components/shopHotPanel'
import shopLimitPanel from '@/components/shopLimitPanel'
import shopTextsPage from '@/components/shopTextsPage'
import shopGoodPage from '@/components/shopGoodPage'
export default {
  name: 'shop-main-panel',
  components: {
    shopBestPanel,
    shopHotPanel,
    shopLimitPanel,
    shopTextsPage,
    shopGoodPage
  },
  props: {
    shopList: Object
  },
  data () {
    const self = this
    return {
      shopSwiperOption: {
        /* eslint-disable */
        clickable: true,
        autoplay: false,
        roundLengths: true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on: {
          slideChangeTransitionStart() {
            self.$refs.shopSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          }
        }
        /* eslint-enable */
      },
      swiperBestOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-best-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperHotOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-hot-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperLimitOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-limit-scrollbar',
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
    shopSwiper () {
      return this.$refs.shopSwiper.swiper
    }
  },
  methods: {
    _setDirection (index) {
      return index % 2 === 0 ? 'left' : 'right'
    },
    showTextPage () {
      this.$refs.shopTextsPage.show()
    },
    showGoodPage () {
      this.$refs.shopGoodPage.show()
    },
    clickBest (best) {
    },
    clickHot (hot) {
    },
    clickLimit (limit) {
    },
    selectType (type) {
      this.shopSwiper.slideTo(type)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-main-panel {
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 0 58px 0;
  width: 100%;
  height: 100%;
  .shop-nav {
    position: relative;
    display: flex;
    width: 100%;
    height: 48px;
    line-height: 48px;
    z-index: 10;
    background: $bgColor;
    .shop-nav-item {
      width: 33.3333%;
      text-align: center;
    }
  }
  .shop-slide-bar {
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
      height: 3px;
      background: $orange;
    }
  }
  .shop-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 96px 0 58px 0;
    width: 100%;
    height: 100%;
    z-index: 100%;
    background: $slideBgColor;
    .shop-swiper {
      width: 100%;
      height: 100%;
      .shop-slide {
        width: 100%;
        height: 100%;
        .shop-wrap {
          margin-top: 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
