<template>
  <div v-show="showFlag" class="app-message-list-page">
    <app-header>
      <span slot="left" @click="hide"></span>
      <span slot="title">消息中心</span>
      <template slot="right">
        <span class="icon icon-search" @click="hide"></span>
      </template>
    </app-header>
    <div class="app-message-list-content">
      <swiper class="message-swiper" :options="messageSwiperOption">
        <swiper-slide>
        <ul class="app-msg-list">
          <li class="app-msg-item" v-for="msg in msgList.messageList" :key="msg.id" @click="showMsgPage(msg)">
            <app-slide-menu-panel :msg="msg"></app-slide-menu-panel>
          </li>
        </ul>
        </swiper-slide>
        <div class="swiper-scrollbar swiper-message-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <app-message-page :msges="msges" :msgFrom="msgFrom" ref="messagePage"></app-message-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import appMessagePage from '@/components/appMessagePage'
import axios from 'axios'
import appSlideMenuPanel from '@/components/appSlideMenuPanel'

export default {
  name: 'app-message-list-page',
  components: {
    appHeader,
    appMessagePage,
    appSlideMenuPanel
  },
  data () {
    const self = this
    return {
      showFlag: false,
      msgList: {},
      msgFrom: '',
      msges: [],
      tapEvent: false,
      messageSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-message-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on:{
          tap: function(event) {
            //轻触的话弹出对话框
            self.tapEvent = true
          }
        }
        /* eslint-enable */
      }
    }
  },
  created () {
    axios.get('../static/mocks/data.json').then((res) => {
      this.msgList = res.data
    })
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    showMsgPage (msges) {
      if (this.tapEvent) {
        this.msges = msges.messages
        this.msgFrom = msges.name
        this.$refs.messagePage.show()
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-message-list-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $zIndexPage;
  .app-message-list-content {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .swiper-container {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
