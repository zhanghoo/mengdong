<template>
  <div class="friends">
    <app-header>
      <span solt="title">伴</span>
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
    axios.get('mocks/data.json').then((res) => {})
  }
}
</script>

<style lang="scss">
.friends {

}
</style>
