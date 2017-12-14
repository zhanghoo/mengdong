<template>
	<div class="article-panel">
    <p class="text-line">ONE STORY</p>
    <h2 class="title">{{article.title}}</h2>
    <div class="cover"></div>
    <div class="contnet">{{article.content}}</div>
    <div class="footer">
      <span class="date">{{article.date}}</span>
      <p class="count">
        <span class="icon icon-collection"><i class="num">{{article.collection}}</i></span>
        <span class="icon icon-share"><i class="num">{{article.share}}</i></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-panel',
  props: {
    article: Object
  }
}
</script>

<style lang="scss">
.article-panel {
}	
</style>
