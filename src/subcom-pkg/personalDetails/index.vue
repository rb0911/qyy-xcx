<template>
  <view class="personal-details">
    <view class="details-profile qy-width-100">
      <image :src="details.profile" mode="aspectFill" class="qy-width-100"></image>
    </view>

    <view class="details-title qyy-d-flex">
      <view class="qyy-font-size-6 qyy-font-weight-bold">{{details.nicname}}</view>
      <view class="qyy-tags-container">
        <u-tag :text="details.education" type="success" class="qyy-tag" mode="dark"/>
        <u-tag :text="details.house" type="error" class="qyy-tag qyy-text-color-light" mode="dark"/>
        <u-tag v-if="details.vehicle" :text="'已购车'" type="primary" class="qyy-tag" mode="dark"/>
      </view>
    </view>
  	
  </view>
</template>

<script>
const details = require("../../mock/mock-personal-details.json");
export default {
  components: {},
  data() {
    return {
      details: details
    }
  },
  computed: {},
  methods: {},
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style scoped lang="scss"></style>