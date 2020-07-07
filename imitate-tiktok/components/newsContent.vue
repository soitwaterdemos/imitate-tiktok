<template>
	<view class="newsContent">
    <!--4个icon(粉丝/点赞/评论/随拍)-->
		<view class="box">
			<view class="icon" v-for="item in iconList" :key="item.id">
				<view class="box-img">
					<image class="img" :src="item.src" mode="aspectFit"></image>
				</view>
				<view class="icon-text">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="newsList">
			<view class="item" v-for="item in newsList" :key="item.id">
				<view class="author-img-box"><image class="author-img" :src="authorImg" mode=""></image></view>
				<view class="text">
					<view class="top">
						<view class="name">{{item.name}}</view>
						<view class="time">{{item.time}}</view>
					</view>
					<view class="content">{{item.content}}</view>
				</view>
			</view>
			<view class="more">
				无更多消息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
      console.log(this._global.domain)
			return {
				newsList:[
					{
						id:1,
						name:"张三",
						time:'8-1',
						content:'你好，我是张三。我特别爱学习！！！'
					},
					{
						id:2,
						name:"李四",
						time:'8-2',
						content:'你好，我是李四。我特别爱睡觉！！！'
					},
					{
						id:3,
						name:"王二麻",
						time:'8-1',
						content:'你好，我是王二麻。我特别爱购物！！！'
					},
					{
						id:4,
						name:"狗剩儿",
						time:'8-1',
						content:'你好，我是狗剩儿。我特别爱运功！！！'
					}
				],
        iconList: [
					{
						id:1,
						src: (this._global.domain + 'img/fans.jpg'),
						text:"粉丝"
					},
					{
						id:2,
						src: (this._global.domain + 'img/love.jpg'),
						text:"点赞"
					},
					{
						id:3,
						src: (this._global.domain + 'img/comment.jpg'),
						text:"评论和@"
					},
					{
						id:4,
						src: (this._global.domain + 'img/dong.jpg'),
						text:"随拍互动"
					}
				],
        authorImg: (this._global.domain + 'img.jpg')
			};
		},
    methods: {
 
    }
	}
</script>

<style>
.newsContent{
	width: 100%;
	background: #000000;
}
.box{
	width: 100%;
	height: 120px;
}
.icon{
	width: 25%;
	height: 100px;
	float: left;
	margin: 0 auto;
}
.box-img{
	text-align: center;
}
.img{
	width: 40px;
	height: 40px;
	border-radius: 5px;
	margin-top: 20px;
}
.icon-text{
	font-size: 13px;
	text-align: center;
	color: #eee;
	margin-top: 10px;
}
.newsList{
	background: #000000;
}
.item{
	height: 60px;
	padding: 15px 10px;
}
.author-img-box{
	float: left;
	margin-left: 10px;
}
.author-img{
	width: 45px;
	height: 45px;
	border-radius: 50%;
}
.text{
	float: left;
	margin-left: 15px;
	height: 50px;
	width:75%;
	color: #FFFFFF;
}
.top{
	height: 25px;
	line-height: 25px;
}
.name{
	float: left;
	font-size: 18px;
}
.time{
	float: right;
	font-size: 11px;
	color:#AAAAAA;
}
.content{
	height: 25px;
	line-height: 25px;
	font-size: 13px;
	color:#AAAAAA;
}
.more{
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 12px;
	color: #AAAAAA;
	text-align: center;
}
</style>
