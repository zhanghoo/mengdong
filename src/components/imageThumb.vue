<template>
  <div class="image-thumb">
    <ul class="images clearfix">
      <li class="img-item"></li>
      <li class="img-item"></li>
      <li class="img-item"></li>
      <li class="img-item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'image-thumb'
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
      heightL 0;
      background: #ccc;
    }
  }
}
</style>
