<template>
  <div class="friends">
    <app-header>
      <span slot="left"></span>
      <span slot="title">伴</span>
      <template slot="right">
        <span class="icon icon-search"></span>
      </template>
    </app-header>
    <friends-main-panel :friends-list="friendsList"></friends-main-panel>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import friendsMainPanel from '@/components/friendsMainPanel'
import axios from 'axios'

export default {
  name: 'friends',
  components: {
    appHeader,
    friendsMainPanel
  },
  data () {
    return {
      friendsList: {}
    }
  },
  created () {
    axios.get('static/mocks/data.json').then((res) => {})
  }
}
</script>

<style lang="scss">
.friends {

}
</style>
