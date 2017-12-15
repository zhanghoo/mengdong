<template>
  <div class="image-thumb">
    <ul class="images clearfix">
      <li class="img-item" v-for="image in images" :key="image.id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'image-thumb',
  props: {
    images: Array
  }
}
</script>

<style lang="scss">
.image-thumb {
  .images {
    position: relative;
    .img-item {
      float: left;
      padding-bottom: 100%;
      width: 45%;
      height: 0;
      background: #ccc;
    }
  }
}
</style>
