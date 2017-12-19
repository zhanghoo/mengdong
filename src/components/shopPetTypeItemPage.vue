<template>
  <div class="shop-pet-type-item" v-show="showFlag">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">汪汪朝服</span>
      <span slot="right" class="icon icon-cart"></span>
    </app-header>
    <div class="shop-pet-type-wrap">
      <div class="shop-pet-type-item-nav">
        <a href="javascript:;" @click="goodsSort">默认</a>
        <a href="javascript:;" @click="goodsSort(1, prices)">价格</a>
        <a href="javascript:;" @click="goodsSort(2, evaluate)">评价最高</a>
        <div class="shop-pet-type-slide-bar" ref="shopPetTypeSlideBar"></div>
      </div>
      <div class="shop-pet-type-item-content">
        <ul class="shop-pet-goods-list">
          <li v-for="goods in goodsListPack" :key="goods.id" class="shop-pet-goods-item">
            <div class="shop-pet-goods-cover"></div>
            <p class="shop-pet-goods-title">{{goods.title}}</p>
            <p class="shop-pet-goods-price">{{goods.price}}</p>
          </li>
        </ul>
      </div>
    </div>
    <shop-good-page ref="shopGoodPage"></shop-good-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import shopGoodPage from '@/components/shopGoodPage'
export default {
  name: 'shop-pet-type-item',
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
      goodsListPack: []
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    showGoodPage () {
      this.$refs.shopGoodPage.show()
    },
    goodsSort (index = 0, sort = 'default') {
      this.$refs.shopPetTypeSlideBar.style.left = `${index * 33.3333}%`
      if (sort === 'default') {
        this.goodsListPack = this.goodsList
      } else if (sort === 'prices') {
        this.goodsListPack = this.goodsList
      } else if (sort === 'evaluate') {
        this.goodsListPack = this.goodsList
      } else {
        this.goodsListPack = this.goodsList
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.shop-pet-type-item {
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 0 58px 0;
  width: 100%;
  height: 100%;
  .shop-pet-type-wrap {
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
    .shop-pet-type-item-content {
      position: absolute;
      top: 0;
      left: 0;
      padding: 96px 0 58px 0;
      width: 100%;
      height: 100%;
      z-index: 100%;
      background: $slideBgColor;
    }
  }
}
</style>
