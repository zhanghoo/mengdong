<template>
  <div class="index">
    <app-header>
      <span slot="left"></span>
      <span slot="title">窝</span>
      <template slot="right">
        <span class="icon icon-search" @click="show"></span>
      </template>
    </app-header>
    <div class="index-box">
      <main-panel :appList="appList" :showActiveFlag="showActiveFlag"></main-panel>
    </div>
    <div class="index-search-panel" v-show="showFlag">
      <div class="header">
        <span class="icon-box"><i class="icon icon-search"></i></span>
        <input class="input" type="text" />
        <a class="cancel" href="javascript:;" @click="hide">取消</a>
      </div>
      <div class="recommend">
        <div>
          <h2 class="title">今日推荐</h2>
          <div class="content">
            猫是不恋家的，最后总会决绝离开<br>
            众人皆睡我独行，黑夜是猫不变的追寻<br>
            经历整个人世冷暖，彼此命运交叠成无数曲折<br>
            那些猫咪喊着：好暗，好暗<br>
            生的序幕由他人打开，但舞台上的热泪盈眶需由自己奏响<br>
            要永远炽烈燃放如同烟火<br>
            四处都那么暗，可你为什么能一直明亮<br>
            活着才能思考为什么而活<br>
            你不该如此留恋的<br>
            用琥珀色的眼睛窥探着你我的过往<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import mainPanel from '@/components/mainPanel'
import axios from 'axios'

export default {
  name: 'index',
  components: {
    appHeader,
    mainPanel
  },
  data () {
    return {
      appList: {},
      showFlag: false,
      showActiveFlag: true
    }
  },
  created () {
    axios.get('static/mocks/index/data.json').then((res) => {
      this.appList = res.data
    })
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.index {
	.index-box {
    position: fixed;
    top: 0;
    left: 0;
    padding: 48px 0 58px 0;
    width: 100%;
    height: 100%;
  }
  .index-search-panel {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    background: $bgColor;
    z-index: $zIndexOperation;
    >.header {
      display: flex;
      width: 100%;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #ccc;
      >.icon-box {
        @include centerH();
        width: 10%;
      }
      >.input {
        flex: 1;
        outline: none;
      }
      >.cancel {
        width: 10%;
      }
    }
    >.recommend {
      position: absolute;
      top: 0;
      left: 0;
      padding: 38px 0;
      width: 100%;
      height: 100%;
      @include centerH();
      z-index: -1;
      text-align: center;
      .title {
        margin: 0 auto;
        width: 40%;
        height: 38px;
        line-height: 38px;
        color: #ddd;
        border-bottom: 1px solid #ddd;
      }
      .content {
        margin-top: 30px;
        color: $fontColor;
        line-height: 38px;
      }
    }
  }
}
</style>
