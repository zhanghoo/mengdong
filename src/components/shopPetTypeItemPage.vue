<template>
  <div class="shop-pet-type-item-page" v-show="showFlag">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">汪汪朝服(这里的层次在下面,是因为布局的原因,后期会调整就不麻烦了)</span>
      <span slot="right" class="icon icon-cart"></span>
    </app-header>
    <div class="shop-pet-type-wrap">
      <div class="shop-pet-type-item-page-nav">
        <a href="javascript:;" class="shop-nav-item" @click="goodsSort(0, 'default')">默认</a>
        <a href="javascript:;" class="shop-nav-item" @click="goodsSort(1, 'prices')">价格</a>
        <a href="javascript:;" class="shop-nav-item" @click="goodsSort(2, 'evaluate')">评价最高</a>
        <div class="shop-pet-type-slide-bar" ref="shopPetTypeSlideBar"></div>
      </div>
      <div class="shop-pet-type-item-page-content">
        <swiper :options="shopPetItemSwiperOption" class="shop-pet-type-item-page-swiper">
          <swiper-slide class="shop-pet-type-item-page-slide">
            <ul class="shop-pet-goods-list clearfix">
              <li v-for="goods in goodsListPack" :key="goods.id" class="shop-pet-goods-item">
                <div class="shop-pet-goods-cover"></div>
                <div class="shop-pet-goods-info">
                  <p class="shop-pet-goods-title">{{goods.title}}</p>
                  <p class="shop-pet-goods-price">{{goods.price}}</p>
                </div>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-scrollbar swiper-pet-item-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
    <shop-good-page ref="shopGoodPage"></shop-good-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopGoodPage from '@/components/shopGoodPage'
export default {
  name: 'shop-pet-type-item-page',
  components: {
    appHeader,
    shopGoodPage
  },
  props: {
    goodsList: Array
  },
  data () {
    return {
      showFlag: false,
      goodsListPack: [],
      shopPetItemSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-pet-item-scrollbar',
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
  beforeCreate () {
    this.$nextTick(() => {
      this.goodsListPack = this.goodsList
    })
  },
  methods: {
    $_compare (order, ...propertyName) {
      return (obj1, obj2) => {
        let val1 = obj1[propertyName[0]]
        let val2 = obj2[propertyName[0]]
        if (propertyName.length >= 2) {
          val1 = propertyName.reduce((total, current) => {
            return obj1[total] * obj1[current]
          })
          val2 = propertyName.reduce((total, current) => {
            return obj2[total] * obj2[current]
          })
        }
        return order === 'asc' ? (val1 - val2) : (val2 - val1)
      }
    },
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    showGoodPage () {
      this.$refs.shopGoodPage.show()
    },
    goodsSort (index, sort) {
      this.$refs.shopPetTypeSlideBar.style.left = `${index * 33.3333}%`
      if (sort === 'default') {
        this.goodsListPack = this.goodsList
      } else if (sort === 'prices') {
        this.goodsListPack = this.goodsList.sort(this.$_compare('asc', 'price'))
      } else if (sort === 'evaluate') {
        this.goodsListPack = this.goodsList.sort(this.$_compare('asc', 'comments', 'score'))
      } else {
        this.goodsListPack = this.goodsList
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-pet-type-item-page {
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 0 58px 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  .shop-pet-type-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
    .shop-pet-type-item-page-nav {
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
      .shop-pet-type-slide-bar {
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
    }
    .shop-pet-type-item-page-content {
      position: absolute;
      top: 0;
      left: 0;
      padding: 96px 0 0 0;
      width: 100%;
      height: 100%;
      z-index: 100%;
      background: $slideBgColor;
      .shop-pet-type-item-page-swiper {
        width: 100%;
        height: 100%;
        .shop-pet-type-item-page-slide {
          width: 100%;
          height: 100%;
          .shop-pet-goods-list {
            padding: 5px;
            width: 100%;
            height: auto;
            .shop-pet-goods-item {
              float: left;
              padding: 5px;
              width: 50%;
              .shop-pet-goods-cover {
                width: 100%;
                height: auto;
                min-height: 150px;
                background: #ccc;
              }
              .shop-pet-goods-info {
                padding: 10px;
                text-align: center;
                background: #fff;
                border: 1px solid #f1f1f1;
                .shop-pet-goods-title {
                  @include text-ellipsis();
                  font-size: 12px;
                }
                .shop-pet-goods-price {
                  margin-top: 5px;
                  font-size: 12px;
                  font-weight: 700;
                  color: $mainDColor;
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
