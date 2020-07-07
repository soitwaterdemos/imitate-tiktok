<template>
	<view class="choose-city-alphabet">
		<view class="list">
      <view class="item" v-for="(item, index) of city" :key="index" hover-class="hover"
        @click="click(item.initial)" @touchstart="touchStart" @touchend="touchEnd" @touchmove="touchMove">
        {{item.initial}}  
      </view>
    </view>
	</view>
</template>

<script>
  let timer = null;
	export default {
    props: ['city'],
		data() {
			return {
				touch: false
			};
		},
    methods: {
      click(initial) {
        this.$emit('change', initial);
      },
      touchEnd() {
        this.touch = false;
      },
      touchStart() {
        this.touch = true;
      },
      touchMove(e) {
        console.log('????')
        console.log(e)
        console.log(e.changedTouches[0])
        clearTimeout(timer);
        timer = setTimeout(() => {
          if(this.touch) {
            // touchY：触摸点距离字母表顶部的长度
            const touchY = e.changedTouches[0].pageY - 150;
            // 一个字母是15px高度
            const index = Math.floor(touchY / 15);
            if(index >= 0 && index <= this.city.length) {
              this.$emit('change',this.city[index].initial)
            }
          }
        },50)	
      }
    }
	}
</script>

<style>
.choose-city-alphabet {
  position: fixed;
  top: 150px;
  right: 0;
  z-index: 20;
}
.list {
  width: 30px;
}
.item {
  text-align: center;
  line-height: 15px;
  font-size: 12px;
  color: #ffffff;
}
.hover {
  text-align: center;
  line-height: 15px;
  font-size: 18px;
  color: #ffffff;
}
</style>
