<template>
	<div class="friends-slot-panel">
    <div class="header">
      <slot name="header">
        <div class="avatar"></div>
        <p class="author">
          <span class="name">没有毛毛的毛毛虫</span>
          <span class="tag">汪汪奴</span>
        </p>
      </slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <div class="operation">
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-collection"><i class="num"></i></span>
          </a>
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-comment"><i class="num"></i></span>
          </a>
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-share"><i class="num"></i></span>
          </a>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="scss">
	
</style>
