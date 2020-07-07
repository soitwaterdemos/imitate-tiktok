<template>
  <view class="choose-city">
    <choose-city-header></choose-city-header>
    <choose-city-list :letter="letter" :city="city"></choose-city-list>
    <choose-city-alphabet @change="change" :city="city"></choose-city-alphabet>
  </view>
</template>

<script>
import chooseCityHeader from "../../components/chooseCityHeader.vue";
import chooseCityList from "../../components/chooseCityList.vue";
import chooseCityAlphabet from "../../components/chooseCityAlphabet.vue";
export default {
  components: {
    chooseCityHeader,
    chooseCityList,
    chooseCityAlphabet
  },
  data() {
    return {
      city: [],
      letter: ""
    };
  },
  methods: {
    // 获取城市列表
    getCityInfo() {
      uni.request({
        url: "http://192.168.6.63:8080/city.json",
        success: res => {
          this.city = res.data.city;
        }
      });
    },
    //
    change(initial) {
      this.letter = initial;
    }
  },
  created() {
    this.getCityInfo();
  }
};
</script>

<style>
.choose-city {
  width: 100%;
  height: 100%;
  background: #000000;
}
</style>
