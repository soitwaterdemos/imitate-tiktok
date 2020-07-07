<template>
	<view class="right-author">
		<view class="author-img">
      <image class="img" src="../static/img.jpg" @click="click" mode="aspectFit"></image>
      <view class="iconfont iconjiahao" v-show="showIconfont" @click="hideIconfont"></view>
    </view>
		<view class="right-box iconfont iconaixin" :style="iconfontStyleColor" @click="changeIconfontColor"></view>
		<view class="number">{{item.lovaNumber}}</view>
		<view class="right-box iconfont icontubiaozhizuo-" @click="openComment"></view>
		<view class="number">{{item.commentNumber}}</view>
    <view class="right-box iconfont iconfenxiang"></view>
		<view class="number">{{item.shareNumber}}</view>
    <view class="disk">
      <image class="img" src="../static/disk.jpg" mode="aspectFit"></image>
    </view>
	</view>
</template>

<script>
	export default {
    props: ['item'],
		data() {
			return {
				showIconfont: true,
        iconfontStyleColor: ""
			};
		},
    methods:{
      // 点击隐藏头像下的`关注`(加号)按钮
      hideIconfont(e) {
        this.showIconfont = false;
      },
      changeIconfontColor() {
        this.iconfontStyleColor = this.iconfontStyleColor === "" ? "color:red" : ""
      },
      changeIconfontColor2Red() {
        this.iconfontStyleColor = "color:red"
      },
      click(){
        uni.navigateTo({
          url:'/pages/user/user'
        })
      },
      openComment(){
        this.$emit('open')
      }
    }
	}
</script>

<style>
.right-author {
  --width: 50px;
  width: var(--width);
  color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
/*头像*/
.author-img {
  position: relative;
}
/*头像下的加号*/
.iconjiahao {
  width: 18px;
  height: 18px;
  background: red;
  border-radius: 50%;
  position: absolute;
  bottom: -9px;
  left: 16px;
  text-align: center;
  line-height: 18px;
  font-size: 10px;
}
.img {
  height: var(--width);
  width: var(--width);
  border: 2px solid #ffffff;
  border-radius: 50%;
}
.right-box {
  width: var(--width);
  height: 30px;
  margin-top: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
}
.number {
  font-size: 12px;
  text-align: center;
}
.disk {
  margin-top: 15px;
  height: var(--width);
  width: var(--width);
}
.disk .img {
  animation: rotate 1.5s linear infinite;
}
@keyframes rotate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>
