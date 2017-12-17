<template>
	<div v-show="showFlag" class="article-page">
    <app-header :isMain="false">
      <span slot="left"></span>
      <span slot="title">小菜菜</span>
      <template slot="right">
        <span class="icon icon-set" @click="hide"></span>
      </template>
    </app-header>
    <div class="cover"></div>
    <h1 class="title">如果我是一个人，或许会写一封诗意盎然的告别信，然后潇洒地离开</h1>
    <p class="author"><span class="name">雅一</span></p>
    <div class="content"></div>
    <p class="count">
      <span class="icon icon-collection"><i class="num"></i></span>
      <span class="icon icon-share"><i class="num"></i></span>
    </p>
    <div class="about">
      <h2 class="title">作者</h2>
    </div>
    <div class="articles-list" v-if="textsType === 0">
      <h2 class="title">她的文章</h2>
    </div>
    <div class="images-list" v-else-if="textsType === 1">
      <h2 class="title">她的图片</h2>
    </div>
    <div class="videos-list" v-else-if="textsType === 2">
      <h2 class="title">她的视频</h2>
    </div>
    <div class="empty" v-else>
      暂无其他动态，去看看其他人的吧 :D
    </div>
    <div class="comments-list">
      <h2 class="title">评论</h2>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
export default {
  name: 'article-page',
  components: {
    appHeader
  },
  props: {
    article: Object,
    textsType: {
      type: Number,
      default: 0
    }
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
@import "../assets/scss/md";
.article-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $slideBgColor;
  z-index: $zIndexPage;
}	
</style>
