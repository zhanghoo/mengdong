<template>
	<div class="main-panel">
    <div class="nav">
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="nav-item">
        <div>
          <span class="icon"></span>
          <p class="text">视频</p>
        </div>
      </a>
    </div>
    <div class="content">
      <div class="tab-item"></div>
      <div class="tab-item"></div>
      <div class="tab-item"></div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'main-panel'
}
</script>

<style lang="scss">
.main-panel {
  .nav {
    display: flex;
    .nav-item {
      flex: 1;
    }
  }
  .contnet {
    .tab-item {
      display: none;
    }
  }
}
</style>
