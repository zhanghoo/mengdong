<template>
  <div class="shop-hot-panel">
    <div class="shop-hot-top">
      <div class="shop-hot-bg">
        <p class="shop-hot-icon"><span class="icon icon-type"></icon></p>
        <p class="title">夏天就要干干净净和它玩</p>
        <p class="theme">[萌宠洗浴]</p>
      </div>
    </div>
    <div class="shop-hot-goods">
      <swiper>
        <swiper-slide>
          <ul class="hot-goods-list clearfix">
            <li class="hot-goods-item">
              <div class="goods-bg"></div>
              <p class="goods-title">汪汪个性眼镜</p>
              <p class="goods-price">60.00</p>
            </li>
          <ul>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop-hot'
}
</script>

<style lang="scss">
.shop-hot-panel {
  .shop-top-top {
    position: relative;
    top: 0;
    left: 0;
    padding-top: 50%;
    width: 100%;
    height: 0;
    background: rgba(255, 255, 255, .6);
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0;
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
    }
  }
  .shop-hot-goods {
    .hot-goods-list {
      padding: 0 5px;
      .hot-goods-item {
        float: left;
        margin: 0 5px;
        .goods-bg {
          width: 80px;
          height: 80px;
        }
        .goods-title {
          
        }
        .goods-price {
          
        }
      }
    }
  }
}
</style>
