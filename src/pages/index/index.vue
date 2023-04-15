<template>
  <view class="content">
    <view class="u-page qyy-bg-color-0">
      <view class="qyy-filter-bar">
        <view class="qyy-filter-bar-container qyy-d-flex-row qyy-flex-content-between qyy-bg-color-1 qy-text-color-1">

          <view class="qyy-d-flex-row qyy-filter-left">
            <view class="qyy-filter-bar-item" :class="{'qyy-selected-tab': filterId === filter.key}" v-for="filter in filterList" :key="filter.key" @click="()=>{openDrawer(filter.key)}" name="filter.title">
              {{filter.title}} &nbsp; <u-icon :name="filter.icon" class="qyy-font-size-6"></u-icon>
            </view>
          </view>
            
          <view class="qyy-filter-right">
            <view class="qyy-filter-bar-item" :class="{'qyy-selected-tab': filterId === filterAll.key}" @click="()=>{openDrawer(filterAll.key)}" name="filterAll.title">
              {{filterAll.title}} &nbsp; <u-icon :name="filterAll.icon" class="qyy-font-size-12"></u-icon>
            </view>
          </view>

            <!-- <view class="qyy-filter-bar-item" @click="()=>{openDrawer(0)}" name="0">所在地 &nbsp; <u-icon name="arrow-down-fill" class="qyy-font-size-6"></u-icon></view>
            <view class="qyy-filter-bar-item" @click="()=>{openDrawer(1)}" name="1">年龄 &nbsp; <u-icon name="arrow-down-fill" class="qyy-font-size-6"></u-icon></view>
            <view class="qyy-filter-bar-item" @click="()=>{openDrawer(2)}" name="2">学历 &nbsp; <u-icon name="arrow-down-fill" class="qyy-font-size-6"></u-icon></view>
            <view class="qyy-filter-bar-item" @click="()=>{openDrawer(3)}" name="3">购房 &nbsp; <u-icon name="arrow-down-fill" class="qyy-font-size-6"></u-icon></view>
         -->
        </view>
      </view>

      <template>
        <u-popup v-model="showFilter" mode="top" :length="filterPopLength" zoom="false">
          <view class="qyy-filter-container qyy-bg-color-2">
            <FiltersComponent :filterId="filterId" :id="'test'"></FiltersComponent>
          </view>
        </u-popup>
      </template>

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
          @click="openDetails()"
					border-radius="35"
					margin="20"
					padding="20rpx 8"
        >
				<view slot="body" class="u-body-item u-flex u-border-bottom u-col-between ">
					<image :src="item.profile" mode="aspectFill"></image>
					<view>
						<view class="qyy-d-flex-row u-line-2">
							<view class="u-body-item-title qyy-font-weight-bold">{{ item.nicname }}</view>
							<view>
								<u-icon v-if="item.gender === '男'" name="man" class="icon-man"></u-icon>
								<u-icon v-if="item.gender === '女'" name="woman" class="icon-woman"></u-icon>
							</view>
							<view class="qyy-tags-container">
								<u-tag :text="item.education" type="success" class="qyy-tag" mode="dark"/>
								<u-tag :text="item.house" type="error" class="qyy-tag qyy-text-color-light" mode="dark"/>
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
import FiltersComponent from '../components/filters.vue'
import { FilterList } from '../../common/constants/common.constants' 
const indexList = require("../../mock/mock-user-list.json");

export default {
  data() {
    return {
      filterId: '',
      title: "Hello",
      indexList: indexList.content,
      urls: [],
      showFilter: false,
      filterList: FilterList.slice(0, FilterList.length - 1),
      filterAll: FilterList[FilterList.length - 1],
      filterPopLength: 500
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

    openDrawer(e) {
      console.log('openDrawer-----', e)
      this.showFilter = true
      this.filterId = e
      if (e === 'all') { this.filterPopLength = 800; return}
      this.filterPopLength = 400
    },

    openDetails(){
      console.log('--openDetails----')
      uni.navigateTo({
        url: '/subcom-pkg/personalDetails/index'
      })
    }
  },
   components: {
    FiltersComponent
  }
}

</script>

<style lang="scss">
.u-page {
  width: 100%;
  .qyy-filter-bar {
    width: 100%;
    overflow-x: auto;
    height: 60rpx;
    .qyy-filter-bar-container{
      height: 60rpx;
      line-height: 60rpx;
        width: 100%;
      left:0;
      position: fixed;
      z-index: 9999999;
      .qyy-filter-bar-item{
        padding: 5rpx 15rpx;
      }
    }
  }

  .qyy-filter-container{
    padding: 0 20rpx;
    padding-top: 80rpx;
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

.qyy-filter-left{
  width: calc(100% - 70rpx);
}

.qyy-filter-right{
  width: 70rpx;
}
</style>
