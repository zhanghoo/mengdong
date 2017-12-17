<template>
	<div class="video-panel">
    <div class="video-author">
      <div class="avatar"></div>
      <div class="user">
        <p class="name"><span class="text">咪咪酱</span></p>
        <p class="tag"><span class="text">萌宠奴</span></p>
      </div>
      <div class="follow">
        <app-follow-button :isFriend="false"></app-follow-button>
      </div>
    </div>
    <div class="video-content">我想做的，就是看着它们慢慢得一点点长大。</div>
    <div class="video-cover"></div>
    <div class="video-footer">
      <span class="date">今天</span>
      <p class="count">
        <span class="icon icon-collection"><i class="num"></i></span>
        <span class="icon icon-share"><i class="num"></i></span>
      </p>
    </div>
  </div>
</template>

<script>
import appFollowButton from '@/components/appFollowButton'
export default {
  name: 'video-panel',
  components: {
    appFollowButton
  },
  props: {
    video: Object
  },
  data () {
    return {
      isFriend: true
    }
  },
  methods: {
    add () {
      this.isFriend = true
    },
    cancel () {
      this.isFriend = false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.video-panel {
  position: relative;
  padding: 0px 10px 15px;
  margin-top: 10px;
  background: #fff;
  .video-author {
    height: 60px;
    @include centerH();
    .avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #ccc;
      overflow: hidden;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .user {
      flex: 1;
      padding-left: 8px;
      .name {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
      }
      .tag {
        height: 20px;
        font-size: 14px;
        color: #ccc;
      }
    }
    .follow {
      position: relative;
      width: 80px;
      height: 60px;
      @include centerH();
    }
  }
  .video-content {
    margin: 0 0 15px;
  }
  .video-cover {
    padding-top: 60%;
    width: 100%;
    height: 0;
    background: #eee;
    margin: 0 0 15px;
  }
  .video-footer {
    display: flex;
    justify-content: space-between;
    color: #999;
  }
}	
</style>
