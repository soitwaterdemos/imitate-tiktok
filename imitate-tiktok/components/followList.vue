<template>
	<view class="follow-list">
		<scroll-view style="height: 100%;" scroll-y="true" @scroll="scroll">
      <view class="item" v-for="(item, index) in list" :key="item.id">
        <!--头像-->
        <view class="top">
          <view class="img-box">
            <image class="img" src="../static/img.jpg" mode=""></image>
          </view>
          <view class="author-name">{{item.author}}</view>
        </view>
        <view class="title">{{item.title}}</view>
        <!--底部-->
        <view class="video-box">
          <follow-player :list="list" ref="player" :index="index" :item="item"></follow-player>
          <view class="music-box"><view class="music">音乐音乐音乐音乐音乐音乐音乐音乐音乐音乐</view></view>
          <!--日期/三连-->
          <view class="box">
            <view class="left">3-20</view>
            <view class="right">
              <view class="iconfont iconaixin icon"><text class="text">赞</text></view>
              <view class="iconfont icontubiaozhizuo- icon"><text class="text">评论</text></view>
              <view class="iconfont iconfenxiang icon"><text class="text">分享</text></view>
            </view>
          </view>
          <!--评论-->
          <view class="comment">
            <view class="Number">4.2w评论过</view>
            <view class="comment-box">	
              <view class="iconfont iconpen icon-pen"></view>
              <input class="input-box"  type="text" placeholder="添加评论..." />	
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
	</view>
</template>

<script>
  import followPlayer from './followPlayer.vue';
  let timer = null;
	export default {
    props: ["list"],
		components: {
      followPlayer
    },
    data() {
			return {
				index: 0
			};
		},
    methods: {
      scroll(e) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          const index = Math.floor((e.detail.scrollTop + 400) / 600)
          this.index = index
        }, 300)	
      }
    },
    watch: {
      index() {
        let len =  this.$refs.player.length;
        for(let i = 0;i < len;i++) {
          this.$refs.player[i].pause();
        }
        if(this.index >= 0 && this.index < (this.list.length)) {
          this.$refs.player[this.index].playThis();
        }
      }
    }
	}
</script>

<style>
.container::-webkit-scrollbar {
  display: none;
}
.follow-list{
	width: 100%;
	background: #000000;
	height: 100%;
  padding-top: 60px;
  padding-bottom: 50px;
   
}
.item{
	padding:0 15px;
	height: 600px;
}
.top{
	height: 35px;
}
.img-box{
	float: left;
}
.img{
	width: 35px;
	height:35px;
	border-radius: 50%;
}
.author-name{
	float: left;
	font-size: 14px;
	height: 35px;
	line-height: 35px;
	color: #FFFFFF;
	margin-left:10px;
	
}
.share{
	float: right;
	font-size: 25px;
	margin-right: 5px;
	height: 35px;
	line-height: 35px;
	color: #FFFFFF;
}
.title{
	width: 1005;
	font-size: 13px;
	margin-top: 15px;
	height: 25px;
	line-height: 25px;
	color: #FFFFFF;
}
.video-box{
	width: 100%;
	height: 350px;
	position:relative
}

.music-box{
	z-index:20;
	position:absolute;
	bottom: 10px;
	left:10px;
	width:100px;
	overflow: hidden;
}
.music{
	color: #FFFFFF;
	font-size: 14px;
	width:200px;
	animation: music 4s linear infinite;
}
.box{
	height:25px;
	margin-top: 25px;
	
}
.left{
	float: left;
	font-size: 11px;
	height: 25px;
	line-height: 25px;
	color: #AAAAAA;
}
.right{
	float: right;
	height: 25px;
}
.icon{
	float: right;
	color: #FFFFFF;
	font-size: 18px;
	margin-left:10px;
}
.text{
	padding:0 5px;
	font-size: 13px;
}
.comment{
	width: 100%;
}
.Number{
	width: 100%;
	height:25px;
	font-size: 15px;
	line-height: 15px;
	color: #AAAAAA;
	margin:10px 0;
}
.comment-box{
	position: relative;
}
.icon-pen{
	height:30px;
	color: #FFFFFF;
	position:absolute;
	top:0;
	left:0;
}
.input-box{
	margin-left: 28px;
	font-size: 15px;
}


@keyframes music{
	0% {
		transform:translate3d(80%,0,0)
	}
	100% {
		transform:translate3d(-80%,0,0)
	}
}
</style>
