<template>
  <view class="modify">
    <view class="nav-box">
      <navigator
        class="iconfont iconfanhui icon-box"
        open-type="redirect"
        url="/pages/changeInfo/changeInfo"
      ></navigator>
      <view class="title">{{title}}</view>
    </view>
    <view class="box">
      <view class="text">{{text}}</view>
      <view v-if="title==='修改昵称'" class="input-name">
        <input class="input" type="text" v-model="newName" maxlength="20" placeholder="记得填写昵称哦" />
        <icon class="iconfont icondelete delete" @click="deleteAll"></icon>
        <view class="number">{{newName.length}} / 20</view>
        <view class="footer" @click="click(newName)">保存</view>
      </view>
      <view v-if="title==='修改抖音号'" class="input-name">
        <input class="input" type="text" v-model="newId" maxlength="16" />
        <icon class="iconfont icondelete delete" @click="deleteAll"></icon>
        <view class="number">最多16个字，只允许包含字母、数字、下划线和点，三十天内只能修改一次。</view>
        <view class="footer" @click="changeId(newId)">保存</view>
      </view>
      <view v-if="title==='修改简介'" class="input-name">
        <textarea
          v-model="intrductionText"
          class="text-area"
          value
          placeholder="填写个人简介更容易获得别人的关注哦"
        />
        <view class="footer" @click="changeIntrduction(intrductionText)">保存</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      newName: "张三",
      title: "",
      text: "",
      newId: "1231444",
      intrductionText: ""
    };
  },
  onLoad(res) {
    switch (res.title) {
      case "userName":
        this.title = "修改昵称";
        this.text = "我的昵称";
        break;
      case "douyinId":
        this.title = "修改抖音号";
        this.text = "我的抖音号";
        break;
      case "intrduction":
        this.title = "修改简介";
        this.text = "个人简介";
        break;
      default:
        break;
    }
  },
  methods: {
    deleteAll() {
      this.newName = "";
    },
    click(res) {
      uni.setStorage({
        key: "userName",
        data: res,
        success() {}
      });
    },
    changeId(res) {
      uni.setStorage({
        key: "userId",
        data: res,
        success() {}
      });
    },
    changeIntrduction(res) {
      uni.setStorage({
        key: "intrduction",
        data: res
      });
    }
  }
};
</script>

<style>
.modify {
  width: 100%;
  height: 100%;
  background: #000000;
}
.nav-box {
  height: 50px;
  position: relative;
  padding-top: 30px;
  margin: 0 aotu;
}
.icon-box {
  position: absolute;
  top: 30px;
  left: 10px;
  font-size: 15px;
  color: #ffffff;
}
.title {
  text-align: center;
  font-size: 16px;
  color: #ffffff;
}
.box {
  padding: 15px;
}
.text {
  color: #999999;
  font-size: 13px;
}
.input-name {
  margin-top: 10px;
  font-size: 15px;
  position: relative;
}
.input {
  width: 95%;
  color: #ffffff;
}
.delete {
  position: absolute;
  right: 0;
  top: 0;
  width: 5%;
  height: 20px;
  font-size: 25px;
  color: #999999;
}
.number {
  color: #999999;
  font-size: 12px;
  margin-top: 5px;
}
.footer {
  text-align: center;
  margin: 50px 10px 0 10px;
  font-size: 18;
  color: #ffffff;
  background: #333333;
  border-radius: 3px;
  height: 40px;
  line-height: 40px;
}
.text-area {
  background: #333333;
  color: #ffffff;
  width: 99%;
}
</style>
