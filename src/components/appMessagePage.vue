<template>
  <div v-show="showFlag" class="app-message-page"></div>
</template>

<script>
export default {
  name: 'app-message-page',
  props: {
    msges: Array
  },
  data () {
    showFlag: false
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
