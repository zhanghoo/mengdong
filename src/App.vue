<template>
  <div class="app">
    <div class="app-guide">
      <guide></guide>
      <logreg v-if="showFlag"></logreg>
    </div>
    <div class="app-content">
      <router-view/>
    </div>
    <div class="app-nav">
      <div class="app-item">
        <router-link to="/index" class="centerH">
          <div>
            <span class="icon"></span>
            <p class="text">窝</p>
          </div>
        </router-link>
      </div>
      <div class="app-item">
        <router-link to="/friends">
          <div>
            <span class="icon"></span>
            <p class="text">伴</p>
          </div>
        </router-link>
      </div>
      <div class="app-item">
        <a href="javascript:;">
          <span class="add">+</span>
        </a>
      </div>
      <div class="app-item">
        <router-link to="/shop">
          <div>
            <span class="icon"></span>
            <p class="text">遛</p>
          </div>
        </router-link>
      </div>
      <div class="app-item">
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
import guide from '@/components/guide'
import logreg from '@/components/logreg'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  components: {
    guide,
    logreg
  },
  computed: {
    ...mapGetters([
      'loginStatus'
    ]),
    showFlag () {
      return !this.loginStatus
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/md";
.app {
  .app-guide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: $zIndexSupTop;
  }
  .app-content {
    position: relative;
  }
  .app-nav {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: $zIndexNav;
    background: $bgColor;
    .app-item {
      flex: 1;
      text-align: center;
      a {
        position: relative;
        @include centerH();
        height: 58px;
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
