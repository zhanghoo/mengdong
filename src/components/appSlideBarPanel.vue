<template>
  <div class="app-slidebar-panel">
    <swiper :options="appSwiperOption" class="app-slidebar-swiper">
    	<swiper-slide class="app-slidebar-slide">
    		<slot name="content"></slot>
    	</swiper-slide>
    	<div class="swiper-scrollbar" slot="scrollbar" :class="swiperScrollbarClass"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'app-slidebar-panel',
  props: {
    swiperScrollbarClass: String
  },
  data () {
    const self = this
    return {
      appSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: self.swiperScrollbarClass,
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
.app-slidebar-panel {
	width: 100%;
	height: 100%;
	.app-slidebar-swiper {
		width: 100%;
		height: 100%;
	}
}  
</style>