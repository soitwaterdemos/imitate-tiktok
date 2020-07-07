<template>
  <view>
    <view class="follow-nav">
      <view class="iconfont iconxiangji icon">
        <text class="icon-text">随拍</text>
      </view>
      <view class="middle">
        <navigator open-type="switchTab" url="/pages/follow/follow" :style="follow" class="text">关注</navigator>
        <navigator open-type="switchTab" url="/pages/friend/friend" :style="friend" class="text">好友</navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      follow: "",
      friend: ""
    };
  },
  mounted() {
    if (this.page === "friend") {
      this.friend = "border-bottom: 2px solid #F0AD4E;";
    } else {
      this.follow = "border-bottom: 2px solid #F0AD4E;";
    }
  }
};
</script>

<style>
.follow-nav {
  width: 100%;
  position: fixed;
  top: 25px;
  left: 0;
  height: 35px;
  line-height: 35px;
  margin: 0 auto;
  z-index: 20;
}
.icon {
  position: absolute;
  top: 0;
  left: 5px;
  color: #ffffff;
  width: 20%;
  text-align: center;
  font-size: 20px;
}
.middle {
  text-align: center;
}
.text {
  display: inline;
  color: #ffffff;
  margin: 0 10px;
  font-size: 15px;
}
.icon-text {
  font-size: 15px;
  margin-left: 10px;
}
</style>
