<template>
  <div class="image-thumb">
    <ul class="images clearfix" :class="classRowCol">
      <li class="img-item" v-for="(image, index) in images" :key="image.id" :class="`img-item-${index+1}`"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'image-thumb',
  props: {
    images: Array
  },
  computed: {
    classRowCol () {
      const imgLen = this.images.length
      return `img-${imgLen}-1`
    }
  }
}
</script>

<style lang="scss">
.image-thumb {
  .images {
    position: relative;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
    overflow: hidden;
    .img-item {
      position: absolute;
      padding-bottom: 49%;
      width: 49%;
      height: 0;
      background: #ccc;
      .img {
        width: 100%;
        height: 100%;
      }
      &.img-item-1 {
        top: 0;
        left: 0;
      }
      &.img-item-2 {
        top: 0;
        left: 51%;
      }
      &.img-item-3 {
        top: 51%;
        left: 0;
      }
      &.img-item-4 {
        top: 51%;
        left: 51%;
      }
    }
  }
}
</style>
