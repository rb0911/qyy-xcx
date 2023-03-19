<template>
  <view class="content">
    <view class="u-page">
      <view class="qyy-filter"> </view>

      <view class="qyuy-user-list-container">
        <u-card
          v-for="item in indexList"
          :key="item.key"
          :show-head="false"
          :body-border="false"
					:foot-border-bottom="false"
					:body-border-bottom="false"
          :show-foot="false"
          :thumb="thumb"
					border-radius="35"
					margin="20"
					padding="20rpx 8"
        >
				<view slot="body" class="u-body-item u-flex u-border-bottom u-col-between ">
					<image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
					<view>
						<view class="qyy-flex-row u-line-2">
							<view class="u-body-item-title">{{ item.nicname }}</view>
							<view>
								<u-icon v-if="item.gender === '男'" name="man" class="icon-man"></u-icon>
								<u-icon v-if="item.gender === '女'" name="woman" class="icon-woman"></u-icon>
							</view>
							<view class="qyy-tags-container">
								<u-tag :text="item.education" type="success" class="qyy-tag" mode="dark"/>
								<u-tag :text="item.house" type="error" class="qyy-tag" mode="dark"/>
								<u-tag v-if="item.vehicle" :text="'已购车'" type="primary" class="qyy-tag" mode="dark"/>
							</view>
						</view>

						<view class="u-body-item-title u-line-2 qyy-font-size-8">
							<span class="qyy-card-title-age"> {{ item.age }}岁 </span>|<span class="qyy-card-title-career"> {{ item.career }} </span> | <span class="qyy-card-title-income"> {{ item.income }} </span>
						</view>

						<view class="u-body-item-title u-line-2 qyy-font-size-7">
							{{ item.description }}
						</view>
					</view>
				</view>
        </u-card>
      </view>
    </view>
  </view>
</template>

<script>
const indexList = require("../../mock/mock-user-list.json");
export default {
  data() {
    return {
      title: "Hello",
      indexList: indexList.content,
      urls: [],
    };
  },
  onLoad() {
    this.loadmore();
  },
  methods: {
    scrolltolower() {
      this.loadmore();
    },
    loadmore() {
      for (let i = 0; i < 30; i++) {
        this.indexList.push({
          url: this.urls[uni.$u.random(0, this.urls.length - 1)],
        });
      }
    },
  },
};
</script>

<style lang="scss">
.u-page {
  width: 100%;
	background: #F3F2F2;
  .qyy-filter {
    width: 100%;
    overflow-x: auto;
  }

	.u-card {
		margin: 8px;
		.u-border-bottom:after {
			border: none !important;
		}

		.qyy-card-title-age{
			color: $u-type-info-dark;
			margin: 0 8rpx;
		}

		.qyy-card-title-career{
			color: $u-type-info-dark;
			margin: 0 8rpx;
		}

		.qyy-card-title-income{
			color: $u-type-info-dark;
			margin: 0 8rpx;
		}
	}
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

.u-card-wrap {
  background-color: $u-bg-color;
  padding: 1px;
}

.icon-woman{
	color: $u-type-error;
	font-size: 29rpx;
	margin: 0 9rpx;
}

.icon-man{
	color: $u-type-primary;
	font-size: 29rpx;
	margin: 0 9rpx;
}

.u-body-item {
  font-size: 32rpx;
  color: #333;
  padding: 20rpx 10rpx;
}

.u-body-item image {
  width: 120rpx;
  flex: 0 0 120rpx;
  height: 120rpx;
  border-radius: 20rpx;
  margin-right: 12rpx;
}
</style>
