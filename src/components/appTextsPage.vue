<template>
	<div v-show="showFlag" class="article-page">
    <div class="header"></div>
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
    <div class="articles-list">
      <h2 class="title">她的文章</h2>
    </div>
    <div class="images-list">
      <h2 class="title">她的图片</h2>
    </div>
    <div class="videos-list">
      <h2 class="title">她的视频</h2>
    </div>
    <div class="comments-list">
      <h2 class="title">评论</h2>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'article-page',
  components: {
    pageHeader
  },
  props: {
    article: Object
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    }
  }
}
</script>

<style lang="scss">
.article-page {
}	
</style>
