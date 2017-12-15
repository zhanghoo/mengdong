<template>
  <div v-show="showFlag" class="app-message-list-page">
    <app-header>
      <span slot="left" @click="hide"></span>
      <span slot="title">消息中心</span>
      <template slot="right">
        <span class="icon icon-search" @click="show"></span>
      </template>
    </app-header>
    <div class="content">
      <ul class="app-msg-list">
        <li class="app-msg-item" v-for="msg in msgList" :key="msg.id" @click="showMsgPage(msg)">
          <span class="icon icon-msg"></span>
          <div class="msg-info">
            <p class="info">
              <span class="name">{{msg.name}}</span>
              <span class="date">{{msg.message[0].date}}</span>
            </p>
            <p class="msg">{{msg.message[0].content}}</p>
            <span class="bubble" v-show="msg.unReadNum">{{msg.unReadNum}}</span>
          </div>
        </li>
      </ul>
    </div>
    <app-message-page :msg="msges" :msgFrom="msgFrom" ref="messagePage"></app-message-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import appMessagePage from '@/components/appMessagePage'
import axios from 'axios'

export default {
  name: 'app-message-list-page',
  components: {
    appHeader,
    appMessagePage
  },
  data () {
    return {
      showFlag: false,
      msgList: [],
      msgFrom: '',
      msges: []
    }
  },
  created () {
    axios.get('static/mocks/data.json').then((res) => {
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
      this.msges = msges.messages
      this.msgFrom = msges.name
      this.$refs.messagePage.show()
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
}
</style>
