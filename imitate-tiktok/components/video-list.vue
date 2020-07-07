<template>
  <view class="video-list">
    <view class="swiper-box">
      <swiper
        class="swiper"
        :vertical="true"
        @change="changeVideoList"
        @touchstart="touchStart"
        @touchend="touchEnd"
      >
        <swiper-item v-for="item of videos" :key="item.id">
          <view class="swiper-item">
            <video-player @dbClick2GiveThumbsUp="dbClick2GiveThumbsUp" ref="player" :video="item"></video-player>
          </view>
          <view class="left-description">
            <description :item="item"></description>
          </view>
          <view class="right-author">
            <author @open="openComment" :item="item" ref="author"></author>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view v-show="show" class="comment-box">
      <comment @close="close"></comment>
    </view>
  </view>
</template>

<script>
import videoPlayer from "./video-player.vue";
import description from "./description.vue";
import author from "./author.vue";
import comment from "./comment.vue";
export default {
  props: ["list"],
  components: {
    videoPlayer,
    description,
    author,
    comment
  },
  data() {
    return {
      videos: [],
      touch: {
        startY: 0,
        endY: 0,
        currentVideo: 0
      },
      timer: null,
      show: false
    };
  },
  methods: {
    // 双击点赞
    dbClick2GiveThumbsUp() {
      this.$refs.author[0].changeIconfontColor2Red();
    },
    changeVideoList(e) {
      clearTimeout(this.timer);
      let currentIndex;
      // 当前是video-list中的第几个video
      currentIndex = this.touch.currentVideo = e.detail.current;
      this.timer = setTimeout(() => {
        if (this.touch.endY > this.touch.startY) {
          // 下滑
          console.log("down skip>>", currentIndex, currentIndex + 1);
          this.$refs.player[currentIndex].playThis();
          this.$refs.player[currentIndex + 1].pause();
          this.touch.endY = this.touch.startY = 0;
        } else if (this.touch.endY < this.touch.startY) {
          // 上滑
          console.log("up skip>>", currentIndex, currentIndex - 1);
          console.log(this.$refs.player);
          this.$refs.player[currentIndex].playThis();
          this.$refs.player[currentIndex - 1].pause();
          this.touch.endY = this.touch.startY = 0;
        }
      }, 10);
    },
    touchStart(e) {
      this.touch.startY = e.changedTouches[0].pageY;
    },
    touchEnd(e) {
      this.touch.endY = e.changedTouches[0].pageY;
    },
    openComment() {
      if (this.show === false) {
        this.show = true;
      }
    },
    close() {
      if (this.show === true) {
        this.show = false;
      }
    }
  },
  watch: {
    list() {
      this.videos = this.list;
    }
  }
};
</script>

<style>
.video-list {
  background: #000000;
}
.video-list,
.swiper-box,
.swiper,
.swiper-item {
  width: 100%;
  height: 100%;
}
.swiper-item {
  z-index: 20;
}
.left-description {
  z-index: 21;
  position: absolute;
  left: 10px;
  bottom: 50px;
}
.right-author {
  z-index: 21;
  position: absolute;
  right: 10px;
  bottom: 50px;
}
.comment-box {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 22;
  height: 500px;
  width: 100%;
}
</style>
