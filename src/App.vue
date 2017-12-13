<template>
  <div class="app">
    <div class="content">
      <router-view/>
    </div>
    <div class="nav">
      <div class="item">
        <router-link to="/index">
          <div>
            <span class="icon"></span>
            <p class="text">窝</p>
          </div>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/friends">
          <div>
            <span class="icon"></span>
            <p class="text">伴</p>
          </div>
        </router-link>
      </div>
      <div class="item">
        <a href="javascript:;">
          <span class="add">+</span>
        </a>
      </div>
      <div class="item">
        <router-link to="/shop">
          <div>
            <span class="icon"></span>
            <p class="text">遛</p>
          </div>
        </router-link>
      </div>
      <div class="item">
        <router-link to="/home">
          <div>
            <span class="icon"></span>
            <p class="text">乖</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import "assets/scss/md";
.app {
  .content {
    position: relative;
  }
  .nav {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: $zIndexNav;
    .item {
      flex: 1;
      text-align: center;
      a {
        position: relative;
        display: flex;
        height: 58px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        &.active {
          color: $mainColor;
          .icon {
            background: $mainColor;
          }
        }
        .icon {
          margin: 5px auto;
        }
        .add {
          display: block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          font-size: 28px;
          font-weight: 700;
          border-radius: 50%;
          color: #fff;
          background: $mainColor;
        }
      }
    }
  }
}
</style>
