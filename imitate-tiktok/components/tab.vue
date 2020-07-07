<template>
	<view class="tab">
		<navigator open-type="switchTab" url="/pages/index/index" class="tab-box">
      首页
    </navigator>
		<navigator open-type="switchTab" url="/pages/follow/follow" class="tab-box">
      关注
    </navigator>
    <view class="tab-box">
      <view class="iconfont iconjiahao icon-box"></view>
    </view>
		<view class="tab-box">
      消息
    </view>
		<view class="tab-box">
      我
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.tab {
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: nowrap row;
  justify-content: flex-start;
  z-index: 20;
}
.tab-box {
  color: #ffffff;
  flex-basis: 20%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.icon-box {
  width: 60%;
  height: 30px;
  line-height: 30px;
  color: #000000;
  background: #FFFFFF;
  border-radius:6px;
  font-size: 16px;
  transform: translate(20%, 10px);
}
</style>
