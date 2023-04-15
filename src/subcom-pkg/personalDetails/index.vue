<template>
  <view class="personal-details">
    <view class="details-profile qy-width-100">
      <image :src="details.profile" mode="aspectFill" class="qy-width-100"></image>
    </view>

    <view class="details-title qyy-d-flex">
      <view class="qyy-font-size-12 qyy-font-weight-bold">{{details.nicname}}</view>
      <view class="qyy-tags-container">
        <u-tag :text="details.education" type="success" class="qyy-tag" mode="dark"/>
        <u-tag :text="details.house" type="error" class="qyy-tag qyy-text-color-light" mode="dark"/>
        <u-tag v-if="details.vehicle" :text="'已购车'" type="primary" class="qyy-tag" mode="dark"/>
      </view>
    </view>

    <view class="details-info">
      <view class="details-header">用户信息</view>
      <view class="user-info-container qyy-d-flex qyy-d-flex-wrap">
        <view class="qy-width-50 qyy-pd-t-2">所在地:<label style="word-spacing:10px"><label :v-html="'\u00a0'"></label>{{details.location}}</label></view>
        <view class="qy-width-50 qyy-pd-t-2">出生年月: <label>{{details.birth}}</label></view>
        <view class="qy-width-50 qyy-pd-t-2">身高: <label>{{details.stature}}cm</label></view>
        <view class="qy-width-50 qyy-pd-t-2">星座: <label>{{details.birth}}</label></view>
        <view class="qy-width-50 qyy-pd-t-2">学历: <label>{{details.birth}}</label></view>
        <view class="qy-width-50 qyy-pd-t-2">年收入: <label>{{details.income}}</label></view>
        <view class="qy-width-50 qyy-pd-t-2">住房: <label>{{details.house}}</label>(<label>{{details.houseLocation}}</label>)</view>
        <view class="qy-width-50">想多久结婚: <label>{{details.marriageTime}}</label></view>
      </view>
    </view>

    <view class="details-user-info">
      <view class="details-header">自我介绍:</view>
      <view class="qyy-text-color-0">{{details.introduction}}</view>
    </view>

    <view class="details-user-introduce">
      <view class="details-header">生活照</view>
      <view class="photo-no-access">
        <view class="need-access">需要权限</view>
        <u-image width="100%" height="300rpx" :src="lifePhoto">
          <span>需要权限</span>
          需要权限
        </u-image>
      </view>

       <view :v-if="false" class="qyy-width-100">
        <view class="swiper-wrap">
          <u-swiper :list="details.lifePhoto" :height="500" @click="(e)=>{handleSwiperClick(e)}"></u-swiper>
        </view>
      </view>
    </view>

    <view class="details-photos">
      <view class="details-header">才艺展示</view>
      <view class="qyy-width-100">
        <view class="swiper-wrap">
          <u-swiper :list="details.lifePhoto" :height="500" @click="(e)=>{handleSwiperClick(e)}"></u-swiper>
        </view>
      </view>
    {{details.likeNum}}</view>

    <view class="details-talent">{{details.likeNum}}</view>

    <view class="details-hope">{{details.likeNum}}</view>

    <view class="details-heart-word">{{details.likeNum}}</view>
  	<u-modal v-model="showPhotoModal" :show-title="false">
      <view class="slot-content">
				<rich-text>
          <u-image width="100%" height="300rpx" :src="photoModalContent"></u-image>
        </rich-text>
			</view>
    </u-modal>
  </view>
</template>

<script>
const details = require("../../mock/mock-personal-details.json");
const lifePhoto = require("../../static/images/shenghuozhao.jpg")
export default {
  components: {},
  data() {
    return {
      details: details,
      showPhotoModal: false,
      photoModalContent: '',
      lifePhoto: lifePhoto
    }
  },
  computed: {},
  methods: {
    handleSwiperClick(e){
      console.log(e)
      this.showPhotoModal = true
      this.photoModalContent = details.lifePhoto[e]
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
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
} 
</script>

<style scoped lang="scss">
  .details-header{
    font-size: 30rpx;
    font-weight: bold;
    margin-top: 20rpx;
    margin-bottom: 20rpx;
  }

  .personal-details{
    padding: 15rpx;
  }
  .swiper-wrap {
    width: 98%;
    border-radius: 20rpx;
    overflow: hidden;
  }
  .need-access {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
  }
  .photo-no-access{
    position: relative;
  }
</style> 