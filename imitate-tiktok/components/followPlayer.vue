<template>
  <view class="follw-player">
    <video
      id="myVideo"
      class="video"
      object-fit="cover"
      loop="true"
      :src="'http://192.168.6.63:8080/video/' + item.src"
      :controls="false"
      :autoplay="false"
      @click="playerTo(list)"
    >
      <!--右下角的播放按钮-->
      <cover-view class="iconfont iconbofang icon" @click="click"></cover-view>
    </video>
  </view>
</template>

<script>
export default {
  props: ["item", "index", "list"],
  data() {
    return {
      play: false
    };
  },
  onReady() {
    this.videoContext = uni.createVideoContext("myVideo", this);
    if (this.index === 0) {
      this.playThis();
    }
  },
  methods: {
    playThis() {
      if (this.play === false) {
        this.videoContext.play();
      }
      this.play = true;
    },
    pause() {
      if (this.play === true) {
        this.videoContext.pause();
      }
      this.play = false;
    },
    click() {
      if (this.play === true) {
        this.videoContext.pause();
        this.play = false;
      } else {
        this.videoContext.play();
        this.play = true;
      }
    },
    playerTo(res) {
      uni.setStorage({
        key: "videoList",
        data: res
      });
      uni.navigateTo({
        url: "/pages/player/player"
      });
    }
  }
};
</script>

<style>
.follw-player {
  height: 100%;
  width: 100%;
}
.video {
  width: 100%;
  height: 100%;
  z-index: 19;
  position: relative;
}
.icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #ffffff;
  font-size: 20px;
}
</style>
