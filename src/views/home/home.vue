<template>
  <div class="home">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-set"></span>
      </template>
    </app-header>
    <main-panel :appList="mineList" :showActive="showActiveFlag"></main-panel>
    <div class="home-panel">
      <div class="home-column">
        <div class="home-item">
          <span class="icon icon-cart"></span>
          <span>购物车</span>
        </div>
        <div class="home-item">
          <span class="icon icon-list"></span>
          <span>我的订单</span>
        </div>
      </div>
      <div class="home-column">
        <div class="home-item">
          <span class="icon icon-server"></span>
          <span>我的售后</span>
        </div>
        <div class="home-item">
          <span class="icon icon-address"></span>
          <span>地址管理</span>
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
  name: 'home',
  components: {
    appHeader,
    mainPanel
  },
  data () {
    return {
      mineList: {},
      showActiveFlag: false
    }
  },
  created () {
    axios.get('static/mocks/home/data.json').then((res) => {
      this.mineList = res.data
    })
  }
}
</script>

<style lang="scss">
.home {
	.home-panel {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .home-column {
      flex-basis: 100%;
      display: flex;
      justify-content: space-between;
    }
    &:before,&:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      width: 100%;
      height: 0;
      border-bottom: 1px dashed #ccc;
      overflow: hidden;
    }
    &:after {
      top: 50%;
      left: 0;
      width: 0;
      height: 0;
      border-bottom: none;
      border-left: 1px dashed #ccc;
    }
  }
}
</style>
