<template>
	<div class="friend-article-panel">
    <friends-slot-panel :active="article">
      <div class="article-content">
        <div class="img"></div>
        <div class="cover">
          <div>
            <h2 class="title-line"><span class="text">美文</span></h2>
            <h3 class="title">{{article.title}}</h3>
          </div>
        </div>
      </div>
    </friends-slot-panel>
  </div>
</template>

<script>
import friendsSlotPanel from '@/components/friendsSlotPanel'
export default {
  name: 'friend-article-panel',
  components: {
    friendsSlotPanel
  },
  props: {
    article: Object
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.friend-article-panel {
  .article-content {
    position: relative;
    padding-top: 55%;
    width: 100%;
    height: 0;
    overflow: hidden;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      @include centerH();
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ccc;
      text-align: center;
      .title-line {
        width: 100%;
        height: 40px;
        line-height: 40px;
        .text {
          position: relative;
          display: inline-block;
          height: 40px;
          color: #fff;
          &:before,
          &:after {
            content: '';
            display: block;
            position: absolute;
            top: 20px;
            left: -20px;
            width: 15px;
            height: 0;
            border-bottom: 2px solid #fff;
          }
          &:after {
            left: auto;
            right: -20px;
          }
        }
      }
      .title {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
