<template>
	<view class="city-content">
    <view class="position">
      <view class="left iconfont icondingwei">自动定位：{{currentCity}}</view>
      <navigator open-type="navigate" url="/pages/chooseCity/chooseCity" class="right">
        切换<text class="iconfont iconchangyongicon-"></text>
      </navigator>
    </view>
    <view class="video-list">
      <view class="item">
        <view class="video"></view>
        <view class="img">
          <image class="picture" src="../static/img.jpg"></image>
        </view>
      </view>
      
      <view class="item">
        <view class="video"></view>
        <view class="img">
          <image class="picture" src="../static/img.jpg"></image>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
	export default {
    props: ['currentCity'],
		data() {
			return {
				currentCity: "北京"
			};
		},
    onShow() {
      uni.getStorage({
        key: 'city',
        success:(res) => {
          this.currentCity = res.data
        }
      })
    }
	}
</script>

<style>
.city-content {
  width: 100%;
  height: 100%;
  background: red;
}
.position {
  width:100%;
  height: 40px;
  padding-top: 60px;
  color: #999999;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between; 
}
.position .left {
  font-size: 14px;
  transform: translateX(10px);
}
.position .right {
  font-size: 12px;
  transform: translateX(-10px);
}
.video-list {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  background: #000000;
}
.video-list .item {
  width: 50%;
  height: 300px;
  position: relative;
}
.video-list .item .video {
  width: 92%;
  height: 100%;
  transform: translateX(4%);
  background: yellow;
  z-index:18;
}
.video-list .item .img {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.video-list .item .img .picture {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
