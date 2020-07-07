<template>
	<view class="changeInfo">
		<view class="nav-box">
			<view class="title">编辑个人资料</view>
			<navigator open-type="switchTab" url="/pages/personal/personal" class="iconfont iconfanhui icon-nav"></navigator>
		</view>
		<view class="box">
			<view class="img-box">
			  <image class="img" :src="src" @click="chooseImg"></image>
				<view class="text">点击更换头像</view>
			</view>
		</view>
		<view class="info-box">
			<navigator open-type="redirect" url="/pages/modify/modify?title=userName" class="text-box">
				<view class="left">昵称</view>
				<view class="iconfont iconchangyongicon- icon-box"></view>
				<view class="right">{{user.userName}}</view>
			</navigator>
			<navigator open-type="redirect" url="/pages/modify/modify?title=douyinId" class="text-box">
				<view class="left">抖音号</view>
				<view class="iconfont iconchangyongicon- icon-box"></view>
				<view class="right">{{user.userId}}</view>
			</navigator>
			<navigator open-type="redirect" url="/pages/modify/modify?title=intrduction" class="text-box">
				<view class="left">简介</view>
				<view class="iconfont iconchangyongicon- icon-box"></view>
				<view class="right">{{user.intrduction}}</view>
			</navigator>
			<picker :range="school" @change="bindSchoolChange">
				<view class="text-box">
					<view class="left">学校</view>
					<view class="iconfont iconchangyongicon- icon-box"></view>
					<view class="right">{{user.school}}</view>	
				</view>
			</picker>
			<picker :range="sex" @change="bindSexChange">
				<view class="text-box">
					<view class="left">性别</view>
					<view class="iconfont iconchangyongicon- icon-box">	</view>
					<view class="right">{{user.sex}}</view>
				</view>
			</picker>
			<picker mode="date" :value="user.birthday"  @change="bindDateChange">
				<view class="text-box">
					<view class="left">生日</view>
					<view class="iconfont iconchangyongicon- icon-box"></view>
					<view class="right">{{user.birthday}}</view>
				</view>
			</picker>
			<picker mode="region"  @change="bindCityChange">
				<view class="text-box">
					<view class="left">地区</view>
					<view class="iconfont iconchangyongicon- icon-box"></view>
					<view class="right">{{user.city}}</view>
				</view>
			</picker>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src:'../../static/img.jpg',
				user:{
					userName:"张三",
					userId:"123435",
					intrduction:"我爱睡觉",
					school:"",
					sex:"",
					birthday:'',
					city:''
				},
				school:['清华大学','北京大学',"复旦大学",'南京大学'],
				sex:['男','女']
			}
		},
		methods: {
      // 从相册选相片
			chooseImg(){
				uni.chooseImage({
					count:1,
					sourceType:['album'],
					sizeType:['original','compressed'],
					success: (res) => {
						this.src = res.tempFilePaths
					}
				})
			},
			bindSchoolChange(e) {
				this.user.school = this.school[e.target.value]
				uni.setStorage({
					key:'school',
					data:this.school[e.target.value],
					
				})
			},
			bindSexChange(e) {
				this.user.sex = this.sex[e.target.value]
				uni.setStorage({
					key:'sex',
					data:this.sex[e.target.value],
					
				})
			},
			bindDateChange(e) {
				this.user.birthday=e.target.value
				uni.setStorage({
					key:'birthday',
					data:e.target.value,
				})
			},
			bindCityChange(e){
				this.user.city=e.target.value[0]
				uni.setStorage({
					key:'city',
					data:e.target.value[0]	
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key:'userName',
				success: (res) => {
					this.user.userName=res.data
				}
			}),
			uni.getStorage({
				key:'userId',
				success: (res) => {
					this.user.userId=res.data
				}
			}),
			uni.getStorage({
				key:'intrduction',
				success: (res) => {
					this.user.intrduction=res.data
				}
			}),
			uni.getStorage({
				key:'school',
				success: (res) => {
					this.user.school=res.data
				}
			}),
			uni.getStorage({
				key:'sex',
				success: (res) => {
					this.user.sex=res.data
				}
			}),
			uni.getStorage({
				key:'birthday',
				success: (res) => {
					this.user.birthday=res.data
				}
			}),
			uni.getStorage({
				key:'city',
				success: (res) => {
					this.user.city=res.data
				}
			})
		}
	}
</script>

<style>
.changeInfo{
	width: 100%;
	height: 100%;
	background: #000000;
}
.nav-box{
	height: 50px;
	position: relative;
	margin: 0 auto;
	padding-top: 30px;
}
.title{
	text-align: center;
	color: #FFFFFF;
	font-size: 18px;
}
.icon-nav{
	position: absolute;
	top:30px;
	left: 10px;
	color: #FFFFFF;
}
.box{
	width: 100%;
	height: 150px;
	margin: 0 auto;
	border-top:1px solid #333333;
	border-bottom:1px solid #333333;
}
.img-box{
	text-align: center;
}
.img{
	margin-top: 20px;
	width: 70px;
	height: 70px;
	border-radius: 50%;
}
.text{
	margin-top: 13px;
	color: #999999;
	font-size: 13px;
}
.info-box{
	padding:0 10px;
}
.text-box{
	width: 100%;
	height: 52px;
	line-height: 52px;
	
}
.left{
	float: left;
	font-size: 15px;
	color: #FFFFFF;
}
.right{
	float: right;
	font-size: 15px;
	margin-right: 7px;
	color: #999999;
}
.icon-box{
	float: right;
	font-size: 15px;
	color:  #999999;
	width: 10px;
}
</style>
