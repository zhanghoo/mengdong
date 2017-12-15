<template>
  <div v-show="showFlag" class="app-message-page">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">{{msgFrom}}</span>
      <template slot="right"></template>
    </app-header>
    <div class="app-chat-wrap">
      <ul class="app-chat">
        <li v-for="msg in msges" class="app-chat-item" :class="[msg.type == 0 ? item-right : item-left]"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-message-page',
  props: {
    msgFrom: String,
    msges: Array
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
.app-message-page {
}
</style>
