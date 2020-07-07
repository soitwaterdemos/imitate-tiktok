<template>
  <view class="follow">
    <follow-nav :page="page"></follow-nav>
    <follow-list :list="list"></follow-list>
    <tab></tab>
  </view>
</template>

<script>
import followNav from "../../components/followNav.vue";
import tab from "../../components/tab.vue";
import followList from "../../components/followList.vue";
export default {
  components: {
    followNav,
    tab,
    followList
  },
  data() {
    return {
      page: "follow",
      list: []
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      uni.request({
        url: "http://192.168.6.63:8080/videos.json",
        success: res => {
          this.list = [...res.data.list];
        }
      });
    }
  }
};
</script>

<style>
.follow {
  width: 100%;
  height: 100%;
  background: #000000;
}
</style>
