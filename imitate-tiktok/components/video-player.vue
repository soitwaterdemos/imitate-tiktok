<template>
  <view class="video-player">
    {video.id}
    <video
      class="video"
      id="myVideo"
      :src="'http://192.168.6.63:8080/video/' + video.src"
      :controls="false"
      :loop="true"
      :autoplay="video.id==1"
      @click="click"
    ></video>
  </view>
</template>

<script>
let timer = null;
export default {
  props: ["video"],
  data() {
    return {
      videoContext: null,
      play: false,
      dbClick: true
    };
  },
  // 页面初次渲染完成
  onReady() {
    this.videoContext = uni.createVideoContext("myVideo", this);
  },
  methods: {
    click() {
      clearTimeout(timer);
      // 每一次 wait 时间内的点击都会取反
      this.dbClick = !this.dbClick;
      timer = setTimeout(() => {
        if (this.dbClick === false) {
          // 双击
          this.$emit("dbClick2GiveThumbsUp");
        } else if (this.dbClick === true) {
          // 单击
          if (this.play === false) {
            this.playThis();
          } else {
            this.pause();
          }
        }
        // 重置
        this.dbClick = true;
      }, 300);
    },
    pause() {
      // 暂停视频
      if (this.play === true) {
        this.videoContext.pause();
        this.play = !this.play;
      }
    },
    playThis() {
      // 从上次观看位置开始播放
      if (this.play === false) {
        // 当前不在播放状态,则从头开始播放
        // this.videoContext.seek(0);
        this.videoContext.play();
        this.play = true;
      }
    }
  }
};
</script>

<style>
.video-player,
.video {
  width: 100%;
  height: 100%;
}
</style>
