<template>
  <view class="first-nav">
    <view class="iconfont iconsousuo icon"></view>
    <view class="middle">
      <navigator open-type="switchTab" url="/pages/index/index" class="text">推荐</navigator>
      <navigator open-type="navigate" url="/pages/city/city" class="text">同城</navigator>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.first-nav {
  width: 100%;
  position: fixed;
  top: 25px;
  left: 0;
  height: 35px;
  line-height: 35px;
  display: flex;
  justify-content: center;
  background: transparent;
  z-index: 30;
}
.first-nav .icon {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  width: 20%;
  text-align: center;
  font-size: 16px;
}
.middle {
  text-align: center;
}
.middle .text {
  display: inline;
  color: #ffffff;
  margin: 0 10px;
}
</style>
