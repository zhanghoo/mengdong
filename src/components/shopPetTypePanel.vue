<template>
  <div class="shop-pet-type">
    <div class="shop-pet-type-panel">
      <div class="shop-pet-type-nav">
        <a href="javascript:;" class="shop-nav-item" @click="selectType(0)">汪汪乖</a>
        <a href="javascript:;" class="shop-nav-item" @click="selectType(1)">喵喵乖</a>
        <div class="shop-pet-type-slide-bar" ref="shopPetTypeSlideBar"></div>
      </div>
      <div class="shop-pet-type-content">
        <swiper class="shop-pet-type-swiper" :options="shopPetTypeSwiperOption" ref="shopPetTypeSwiper">
          <swiper-slide class="shop-pet-type-slide">
            <swiper :options="shopDogSwiperOption">
              <swiper-slide>
                <ul class="shop-pet-type-list">
                  <li v-for="type in goodsTypeList.dogs" :key="type.id" class="shop-pettype-item" @click.stop="clickType(type)">
                    <div class="shop-pet-type-cover"></div>
                    <div class="shop-pet-type-intro">
                      <p><span class="shop-pet-type-icon" :class="type.icon"></span></p>
                      <span class="shop-pet-type-title">{{type.title}}</span>
                      <p class="shop-pet-type-desc">{{type.desc}}</p>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
              <div class="swiper-scrollbar swiper-dog-scrollbar" slot="scrollbar"></div>
            </swiper>
          </swiper-slide>
          <swiper-slide class="shop-pet-type-slide">
            <swiper :options="shopCatSwiperOption">
              <swiper-slide>
                <ul class="shop-pet-type-list">
                  <li v-for="type in goodsTypeList.cats" :key="type.id" class="shop-pettype-item" @click.stop="clickType(type.goodsList)">
                    <div class="shop-pet-type-cover"></div>
                    <div class="shop-pet-type-intro">
                      <p><span class="shop-pet-type-icon" :class="type.icon"></span></p>
                      <span class="shop-pet-type-title">{{type.title}}</span>
                      <p class="shop-pet-type-desc">{{type.desc}}</p>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
              <div class="swiper-scrollbar swiper-cat-scrollbar" slot="scrollbar"></div>
            </swiper>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <shop-pet-type-item-page :goods-list="goodsList" ref="shopPetTypeItemPage"></shop-pet-type-item-page>
  </div>
</template>

<script>
import shopPetTypeItemPage from '@/components/shopPetTypeItemPage'
export default {
  name: 'shop-pet-type',
  components: {
    shopPetTypeItemPage
  },
  props: {
    goodsTypeList: Object
  },
  data () {
    const self = this
    return {
      goodsList: [],
      shopPetTypeSwiperOption: {
        /* eslint-disable */
        clickable: true,
        autoplay: false,
        roundLengths: true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on: {
          slideChangeTransitionStart() {
            self.$refs.shopPetTypeSlideBar.style.left = `${this.activeIndex * 50}%`
          }
        }
        /* eslint-enable */
      },
      shopDogSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-dog-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      shopCatSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-cat-scrollbar',
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
    shopPetTypeSwiper () {
      return this.$refs.shopPetTypeSwiper.swiper
    }
  },
  methods: {
    selectType (type) {
      this.shopPetTypeSwiper.slideTo(type)
    },
    clickType (type) {
      this.goodsList = type.goodsList
      this.$refs.shopPetTypeItemPage.show()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-pet-type {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 48px;
  width: 100%;
  height: 100%;
  .shop-pet-type-panel {
    width: 100%;
    height: 100%;
    .shop-pet-type-nav {
      position: relative;
      display: flex;
      width: 100%;
      height: 48px;
      line-height: 48px;
      z-index: 10;
      background: $bgColor;
      .shop-nav-item {
        width: 50%;
        text-align: center;
      }
      .shop-pet-type-slide-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
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
    }
    .shop-pet-type-content {
      position: absolute;
      padding-top: 96px;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $slideBgColor;
      .shop-pet-type-swiper {
        width: 100%;
        height: 100%;
        .shop-pet-type-slide {
          width: 100%;
          height: 100%;
          .swiper-container {
            width: 100%;
            height: 100%;
            .shop-pet-type-list {
              padding: 5px;
              width: 100%;
              height: auto;
              &:after{
                content: '.';
                display: block;
                height: 0;
                line-height: 0;
                clear: both;
                visibility: hidden;
              }
              .shop-pettype-item {
                float: left;
                padding: 5px;
                width: 50%;
                height: auto;
                text-align: center;
                .shop-pet-type-cover {
                  padding-top: 100%;
                  width: 100%;
                  height: 0;
                  background: #ccc;
                }
                .shop-pet-type-intro {
                  padding: 15px 0;
                  background: #fff;
                  border: 1px solid #f1f1f1;
                  .shop-pet-type-icon {
                    display: block;
                    margin: 0 auto 10px;
                    width: 30px;
                    height: 30px;
                    background: #ccc;
                  }
                  .shop-pet-type-title {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 16px;
                    line-height: 16px;
                    font-size: 14px;
                    font-weight: 700;
                    &:before,
                    &:after {
                      content: '';
                      display: block;
                      position: absolute;
                      top: 6px;
                      left: -8px;
                      width: 6px;
                      height: 0;
                      border-bottom: 2px solid #333;
                    }
                    &:after {
                      left: auto;
                      right: -8px;
                    }
                  }
                  .shop-pet-type-desc {
                    font-size: 12px;
                    color: #ccc
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
