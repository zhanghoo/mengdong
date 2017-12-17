<template>
  <div class="home">
    <app-header :isMain="false">
      <span slot="left"></span>
      <span slot="title">小菜菜</span>
      <template slot="right">
        <span class="icon icon-set"></span>
      </template>
    </app-header>
    <div class="home-box">
      <div class="home-content">
        <swiper class="home-swiper" :options="homeSwiperOption" ref="homeSwiper">
          <swiper-slide>
            <main-profile></main-profile>
            <main-panel :appList="mineList" :showActive="showActiveFlag"></main-panel>
            <div class="home-panel">
              <div class="home-wrap">
                <div class="home-column">
                  <div class="home-item">
                    <span class="icon icon-cart"></span>
                    <span class="text">购物车</span> 
                  </div>
                  <div class="home-item">
                      <span class="icon icon-list"></span>
                      <span class="text">我的订单</span>
                  </div>
                </div>
                <div class="home-column">
                  <div class="home-item">
                      <span class="icon icon-server"></span>
                      <span class="text">我的售后</span>
                  </div>
                  <div class="home-item">
                      <span class="icon icon-address"></span>
                      <span class="text">地址管理</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <div class="swiper-scrollbar swiper-home-scrollbar" slot="scrollbar"></div> -->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import mainProfile from '@/components/mainProfile'
import mainPanel from '@/components/mainPanel'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    appHeader,
    mainProfile,
    mainPanel
  },
  data () {
    return {
      mineList: {},
      showActiveFlag: false,
      homeSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        autoHeight: true, //高度随内容变化
        // scrollbar: {
        //   el: '.swiper-home-scrollbar',
        //   hide: true
        // },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      }
    }
  },
  created () {
    axios.get('static/mocks/home/data.json').then((res) => {
      this.mineList = res.data
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.home {
  .home-box {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 0 58px 0;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .home-content {
      width: 100%;
      height: 100%;
      .home-swiper {
        width: 100%;
        height: 100%;
        .home-panel {
          position: relative;
          padding-top: 100%;
          margin-top: 10px;
          width: 100%;
          height: 0;
          background: $bgColor;
          .home-wrap {
            position: absolute;
            top: 0;
            left: 0;
            padding: 15%;
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            .home-column {
              flex-basis: 100%;
              display: flex;
              justify-content: space-between;
              .home-item {
                .icon,
                .text {
                  display: block;
                  margin: 10px auto;
                }
              }
            }
            &:before,&:after {
              content: '';
              display: block;
              position: absolute;
              top: 50%;
              left: 15%;
              width: 70%;
              height: 0;
              border-bottom: 1px dashed #ccc;
              overflow: hidden;
            }
            &:after {
              top: 15%;
              left: 50%;
              width: 0;
              height: 70%;
              border-bottom: none;
              border-left: 1px dashed #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
