<template>
	<view class="description">
		<view class="author">
      {{item.author}}
    </view>
		<view class="title">
      {{item.title}}
    </view>
		<view class="music-box">
      <view class="music">
       {{item.music}}
      </view>
    </view>
	</view>
</template>

<script>
	export default {
    props:['item'],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.description {
  height: 100px;
  margin-left: 10px;
  color: white;
  width: 120px;
}
.author.title.music {
  line-height: 35px;
}
.author {
  font-size: 16px;
  white-space: nowrap;
  width: 100%;
  overflow-x: auto;
}
.title {
  font-size: 12px;
  width: 100%;
  height: 75px;
  line-height: 25px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.music-box {
  width: 100px;
  overflow: hidden;
}
.music {
  font-size: 12px;
  width: 140px;
  white-space: nowrap;
  animation: music 6s linear infinite;
}
@keyframes music{
  0%{
    transform: translate3d(80%, 0, 0);
  }
  100%{
    transform: translate3d(-80%, 0, 0);
  }
}
</style>
