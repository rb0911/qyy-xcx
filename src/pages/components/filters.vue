<template>
  <view>
    <view v-if="filterId === 'location' || filterId === 'all'" class="qyy-filters-location qyy-flex-row qyy-flex-wrap">
      <u-button shape="circle" type="info" size="mini" v-for="location in locations" :key="location" class="filter-items qy-text-color-0">
      <span>{{ location }}</span></u-button >
    </view>

    <view v-if="filterId === 'age' || filterId === 'all'" class="qyy-filters-age">
      <li>{{ filterId }} {{ id }}</li>
    </view>

    <view v-if="filterId === 'education' || filterId === 'all'" class="qyy-filters-education">
      <li>{{ filterId }} {{ id }}</li>
    </view>

    <!-- <view v-if="filterId === 'location' || filterId === 'all'" class="qyy-filters-location">
      <li>{{ filterId }} {{ id }}</li>
    </view> -->
  </view>
</template>

<script>
import { LOCATION } from '../../common/constants/common.constants'

export default {
  props: {
    filterId: String,
    id: String,
  },
  data(){
    return {
      locations: LOCATION
    }
  }
};
</script>

<style lang="scss">
  .filter-items {
    margin-right: 20rpx;
    margin-top: 15rpx;
  }
</style>
