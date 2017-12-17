<template>
  <div class="main-profile">
  	<div class="main-profile-bg">
  		<div>
  			<div class="main-profile-avatar"></div>
  			<div class="main-profile-name">小菜菜</div>
  			<div class="main-profile-intro">我常常在夜里醒来，睡在我左肩上的不是你，是一团黑色的，冰冷的，沉默着的空气</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'main-profile'
}
</script>

<style lang="scss">
.main-profile {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 70%;
  width: 100%;
  height: 0;
  overflow: hidden;
  .main-profile-bg {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, .3);
    .img {
  	  width: 100%;
  	  height: 100%;
    }
    .main-profile-avatar {
    	margin: 0 auto;
    	width: 68px;
    	height: 68px;
    	border-radius: 100%;
    	border: 3px solid #fff;
    }
    .main-profile-name {
    	margin: 10px 0 15px 0;
    	font-size: 18px;
    	color: #fff;
    }
    .main-profile-intro {
    	padding: 0 40px;
    	line-height: 20px;
    	font-size: 14px;
    	color: #fff;
    }
  }
}
</style>