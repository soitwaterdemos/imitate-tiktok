<template>
  <view class="choose-city-list">
    <scroll-view class="scroll" scroll-y="true" :scroll-into-view="viewId">
      <view class="scroll-content">
        <!--顶部定位-->
        <view class="box">
          <view class="title">
            <icon class="iconfont icondingwei"></icon>
            <text style="transform: translateX(5px);display: inline-block;">当前城市</text>
          </view>
          <view class="current-city">{{currentCity}}</view>
        </view>
        <!--热门城市-->
        <view class="box">
          <view class="title">热门城市</view>
          <view class="hotlist">
            <view class="item" v-for="(item,index) of cityList" :key="index">{{item}}</view>
          </view>
        </view>
        <!--城市列表-->
        <view class="box-list" v-for="(cities,index) in city" :key="index">
          <!--字母之一-->
          <view class="initial" :id="cities.initial">{{cities.initial}}</view>
          <!--具体的城市列表-->
          <view
            class="city-name"
            v-for="(item, index) of cities.list"
            :key="index"
            @click="click(item.name)"
          >{{item.name}}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  props: ["city", "letter"],
  data() {
    return {
      cityList: [
        "深圳",
        "北京",
        "上海",
        "成都",
        "广州",
        "重庆",
        "西安",
        "苏州",
        "武汉",
        "杭州",
        "郑州",
        "南京"
      ],
      currentCity: "北京",
      viewId: ""
    };
  },
  watch: {
    letter() {
      this.viewId = this.letter;
    }
  },
  methods: {
    click(name) {
      uni.setStorage({
        key: "city",
        data: name
      });
      uni.getStorage({
        key: "city",
        success: e => {
          this.currentCity = e.data;
        }
      });
      uni.redirectTo({
        url: "/pages/city/city"
      });
    }
  }
};
</script>

<style>
.choose-city-list {
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  top: 80px;
  left: 0;
}
.box {
  background: #222222;
  margin-top: 10px;
  padding: 0 5px 20px 5px;
}
.title {
  height: 40px;
  line-height: 40px;
  margin-left: 15px;
  color: #ffffff;
  font-size: 14px;
}
.current-city {
  font-size: 14px;
  color: #aaaaaa;
  transform: translateX(15px);
  height: 30px;
  line-height: 30px;
}
.hotlist {
  width: 100%;
  overflow: hidden;
}
.hotlist .item {
  width: 30%;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  float: left;
  background: #333333;
  margin-left: 2.5%;
  margin-bottom: 10px;
  text-align: center;
  color: #aaaaaa;
}
.box-list {
  padding: 8px 5px;
}
.box-list .initial {
  height: 25px;
  line-height: 25px;
  background: #000000;
  padding-left: 10px;
  color: #666666;
  font-size: 12px;
}
.city-name {
  width: 100%;
  background: #222222;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  color: #aaaaaa;
  font-size: 15px;
}
.scroll {
  height: 100%;
}
</style>
