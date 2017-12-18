<template>
  <div class="shop-hot-panel">
    <div class="shop-hot-top">
      <div class="shop-hot-bg">
        <div>
          <p class="shop-hot-icon"><span class="icon icon-type"></span></p>
          <p class="shop-hot-title">{{hot.title}}</p>
          <p class="shop-hot-theme">[{{hot.theme}}]</p>
        </div>
      </div>
    </div>
    <div class="shop-hot-goods">
      <swiper :options="swiperHotOption" class="hot-goods-swiper">
        <swiper-slide v-for="good in hot.goods" :key="good.id" class="hot-goods-slide">
          <div class="goods-bg"></div>
          <p class="goods-title">{{good.title}}</p>
          <p class="goods-price">{{good.price}}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-hot',
  props: {
    hot: Object
  },
  data () {
    return {
      swiperHotOption: {
        /* eslint-disable */
        slidesPerView: 'auto',
        clickable: true,
        mousewheel: true,
        freeMode: true,
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
.shop-hot-panel {
  .shop-hot-top {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 50%;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, .3);
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -1px;
      left: 50%;
      margin-left: -10px;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #fff transparent;
    }
    .shop-hot-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @include centerH();
      .icon {
        width: 25px;
        height: 25px;
        background: #fff;
      }
      .shop-hot-title {
        margin: 5px 0 15px 0;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
      }
      .shop-hot-theme {
        font-size: 14px;
        color: #fff;
      }
    }
  }
  .shop-hot-goods {
    background: #fff;
    .hot-goods-swiper {
      padding: 0 5px;
      .hot-goods-slide {
        margin: 0 5px;
        width: 80px;
        .goods-bg {
          margin: 10px 0;
          width: 80px;
          height: 80px;
          background: #ccc;
        }
        .goods-title {
          @include text-ellipsis();
          text-align: center;
          font-size: 14px;
        }
        .goods-price {
          margin: 5px 0 10px 0;
          height: 12px;
          line-height: 12px;
          font-size: 12px;
          text-align: center;
          font-weight: 700;
          color: $mainDColor;
        }
      }
    }
  }
}
</style>
