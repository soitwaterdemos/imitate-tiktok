<template>
	<view class="personalInfo">
		<view class="background-img-box">
			<image class="background-img" src="../static/background.jpg" mode=""></image>
		</view>
		<view class="top">
			<view class="personal-img-box">
				<image class="personal-img" src="../static/img.jpg" mode=""></image>
			</view>
			<view v-if="pages==='user'" :style="style4" class="change" @click="change">
			  <text v-show="changeContent==='关注'" class="iconfont iconjiahao"></text>
        {{changeContent}}
			</view>
			<view v-else class="change" @click="changeInfo">编辑资料</view>
		</view>
		<view class="name-box">
			<view class="name">张三</view>
			<view class="douyinId">抖音号:1e243141</view>
		</view>
		<view class="text-box">
			<view class="introduce">我爱睡觉</view>
			<view class="label-box">
				<view class="label">普通大学</view>
				<view class="label">北京</view>
			</view>
			<view class="number-box">
				<view class="box">
					<text class="number">123</text>
					<text class="number-text">获赞</text>
				</view>
				<view class="box">
					<text class="number">13452</text>
					<text class="number-text">关注</text>
				</view>
				<view class="box">
					<text class="number">1235</text>
					<text class="number-text">粉丝</text>
				</view>
			</view>
		</view>
		<view class="add-box">
			<text class="iconfont iconxiangji"></text>
			<text class="add">添加随拍</text>
		</view>
		<view class="option-box">
			<view class="option" :style="style1" @click="click('作品')">作品</view>
			<view class="option" :style="style2" @click="click('动态')">动态</view>
			<view class="option" :style="style3" @click="click('喜欢')">喜欢</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['pages'],
		data() {
			return {
				style1:'border-bottom:3px solid #F0AD4E;',
				style2:'',
				style3:'',
				style4:'background:red',
				changeContent:"关注"
			};
		},
		methods: {
			click(res) {
				switch (res) {
					case "作品":
					  this.style1='border-bottom:3px solid #F0AD4E;'
					  this.style2=""
					  this.style3=""
					  this.$emit('change',res)
						break;
					case "动态":
					  this.style2='border-bottom:3px solid #F0AD4E;'
					  this.style3=""
					  this.style1=""
					  this.$emit('change',res)
						break;
					case "喜欢":
					  this.style3='border-bottom:3px solid #F0AD4E;'
					  this.style2=""
					  this.style1=""
					  this.$emit('change',res)
						break;
					default:
						break;
				}
				
			},
			changeInfo() {
        console.log('in???')
				uni.navigateTo({
					url:'/pages/changeInfo/changeInfo'
				})
			},
			change(){
				this.style4= this.style4 === '' ? "background:red" : ''
				this.changeContent = this.changeContent === '关注' ? "取消关注" : '关注'
			}
			
		}
		
	}
</script>

<style scoped>
.personalInfo{
	width:100%;
	background: #000000;
	position: relative;
}
.background-img-box{
	width: 100%;
	padding: 0 1px;
	z-index:19;
}
.background-img{
	width: 100%;
	height: 180px;
}
.top{
	width:100%;
	position:absolute;
	top:140px;
	left:0;
	z-index:20;
	background:#000000;
	height:60px;
}
.personal-img-box{
	margin:-25px 0 0 30px;
}
.personal-img{
	width:80px;
	height:80px;
	border-radius:50%;
	z-index:20;
	border:3.5px solid #000000;
}
.change{
	position:absolute;
	top:15px;
	right:25px;
	width:55%;
	height:35px;
	line-height:35px;
	font-size:16px;
	text-align:center;
	background:#333333;
	border-radius:2px;
	color:#ffffff;
}
.name-box{
	padding:0 25px;
	color:#EEEEEE;
	z-index:20;
	margin-top:20px;
}
.name{
	height: 50px;
	line-height: 50px;
	font-size:26px;
}
.douyinId{
	height: 25px;
	line-height: 25px;
	font-size: 14px;
}
.text-box{
	z-index:20;
	padding:0 25px;
	margin-top: 8px;
	border-top: 1px solid #222222;
}
.introduce{
	height: 30px;
	line-height: 30px;
	font-size: 15px;
	color: #EEEEEE;
}
.label-box{
	width: 100%;
	height: 25px;
	margin-top: 5px;
	line-height: 25px;
	color: #EEEEEE;
}
.label{
	height: 20px;
	padding: 0 5px;
	line-height: 20px;
	font-size: 11.5px;
	background: #333333;
	color: #999999;
	float: left;
	border-radius: 1.5px;
	margin-right: 10px;
}
.number-box{
	width: 100%;
	height: 50px;
	line-height: 50px;
}
.box{
	height: 40px;
	line-height: 40PX;
	float: left;
	margin-right: 5px;
}
.number{
	color: #FFFFFF;
	font-size: 15px;
}
.number-text{
	color: #999999;
	font-size: 13px;
	width:50px;
}
.add-box{
	margin: 0 6%;
	height:40px;
	line-height: 40px;
	background: #333333;
	border-radius: 3px;
	text-align: center;
	color: #FFFFFF;
}
.add{
	padding-left: 5px;
	font-size: 13px;
}
.option-box{
	width: 100%;
	height:50px;
	line-height: 50px;
	margin-bottom: 10px;
}
.option{
	width: 33%;
	height:50px;
	line-height: 50px;
	color: #999999;
	float: left;
	text-align: center;
}
</style>
