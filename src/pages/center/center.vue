<template>
  <view class="my">
    <view class="my-account">
      <view class="my-account-id">账号</view>
      <view class="my-account-profile">
        <u-image width="100%" height="100%" :src="myDetails.profile"></u-image>
      </view>
    </view>
    <view>我的服务</view>
    <view class="my-service qyy-height-100 qyy-d-flex">
      <view class="my-service-item" @click="openInformations()">
        <view class="my-service-icon">
           <u-image width="100%" height="100%" :src="mockHeart"></u-image>
        </view>
        <view>我的找对象</view>
      </view>

      <view class="my-service-item">
        <view class="my-service-icon">
           <u-image width="100%" height="100%" :src="mockHeart"></u-image>
        </view>
        <view>我的找对象</view>
      </view>

      <view class="my-service-item">
        <view class="my-service-icon">
           <u-image width="100%" height="100%" :src="mockHeart"></u-image>
        </view>
        <view>我的找对象</view>
      </view>
    </view>

    <view class="my-">
      我的服务
    </view>


  </view>
</template>

<script>
const mockMy = require('../../mock/mock-my.json')
const mockHeart = require('../../static/icons/heart.png')


export default {
  components: {},
  data(){
    return {
      myDetails: mockMy,
      mockHeart: mockHeart
    }
  },
  computed: {},
  methods: {
    openInformations(){
      console.log('--openDetails----')
      uni.navigateTo({
        url: '/subcom-pkg/personalInformation/index'
      })
    }
  },
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
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style lan="scss">
  .my-account {
    width: 100%;
    border-radius: 0 0 50rpx 50rpx;
    height: 300rpx;
    box-shadow: 0 10rpx 39rpx #dedede;
    padding: 50rpx;
    display: flex;
  }
  .my-service-item {
    width: 25%;
    height: 100rpx;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  }

  .my-service-icon {
    width: 50rpx;
    height: 50rpx;
  }

  .my-account-profile {
    border-radius: 50%;
    width: 200rpx;
    height: 200rpx;
    overflow: hidden;
  }
</style>
