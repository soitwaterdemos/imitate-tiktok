<template>
  <view class="content">
    <firstNav></firstNav>
    <video-list :list="list"></video-list>
    <tab></tab>
  </view>
</template>

<script>
import tab from "../../components/tab.vue";
import firstNav from "../../components/first-nav.vue";
import videoList from "../../components/video-list.vue";
import description from "../../components/description.vue";
export default {
  components: {
    tab,
    firstNav,
    videoList,
    description
  },
  data() {
    return {
      list: []
    };
  },
  onLoad() {
    this.getVideos();
  },
  methods: {
    error(e) {},
    // 获取视频.json
    getVideos() {
      uni.request({
        url: "http://192.168.6.63:8080/videos.json",
        success: res => {
          let data = JSON.parse(JSON.stringify(res.data));
          this.list = data.list;
        }
      });
    }
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 100%;
}
</style>
