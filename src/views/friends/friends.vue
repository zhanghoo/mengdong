<template>
  <div class="friends">
    <app-header>
      <span slot="left"></span>
      <span slot="title">伴</span>
      <template slot="right">
        <span class="icon icon-message" @click="show"></span>
      </template>
    </app-header>
    <friends-main-panel :actives-list="activesList"></friends-main-panel>
    <app-message-list-page ref="message"></app-message-list-page>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import friendsMainPanel from '@/components/friendsMainPanel'
import appMessageListPage from '@/components/appMessageListPage'
import axios from 'axios'

export default {
  name: 'friends',
  components: {
    appHeader,
    friendsMainPanel,
    appMessageListPage
  },
  data () {
    return {
      activesList: {}
    }
  },
  created () {
    axios.get('static/mocks/friend/data.json').then((res) => {
      this.activesList = res.data
    })
  },
  methods: {
    show () {
      this.$refs.message.show()
    }
  }
}
</script>

<style lang="scss">
.friends {

}
</style>
