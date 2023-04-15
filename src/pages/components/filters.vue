<template>
  <view>
    <view class="filter-all-label qyy-pd-t-2" v-if="filterId === 'all'">地区:</view>
    <view v-if="filterId === 'location' || filterId === 'all'" class="qyy-filters-location qyy-d-flex-row qyy-d-flex-wrap">
      <u-button shape="circle" type="info" size="mini" v-for="location in locations" :key="location" class="filter-items qy-text-color-0">
      <span>{{ location }}</span></u-button >
    </view>

    <view class="filter-all-label qyy-pd-t-2" v-if="filterId === 'all'">年龄:</view>

    <view v-if="filterId === 'age' || filterId === 'all'" class="qyy-filters-age qyy-pd-t-2">
      <view class="age-container">
            <u-slider v-model="value" min="18" max="80"></u-slider>
            <!-- <vue-slider v-model="value" tooltip="always" :min=min :max=max :tooltip-style="tooltipStyle" -->
					<!-- :tooltip-formatter="'{value}小时'" :enable-cross=false></vue-slider> -->
      </view>

    </view>

    <view class="filter-all-label qyy-pd-t-2" v-if="filterId === 'all'">学历:</view>

    <view v-if="filterId === 'education' || filterId === 'all'" class="qyy-filters-education qyy-pd-t-2">
      <view class="qyy-d-flex-row qyy-d-flex-wrap">
        <u-button shape="circle" type="info" size="mini" v-for="education in educations" :key="education" class="filter-items qy-text-color-0">
          <span>{{ education }}</span>
        </u-button >
      </view>

      <!-- <u-switch v-model="studyAbroad" size=35></u-switch> -->
      <view class="qyy-pd-t-2"> 
            <span>拥有留学经历:</span>
            <view>
              <u-button shape="circle" type="info" size="mini" class="filter-items qy-text-color-0">
                <span>有</span>
              </u-button >
              <u-button shape="circle" type="info" size="mini" class="filter-items qy-text-color-0">
                <span>无</span>
              </u-button >
            </view>
      </view>

    </view>

    <!-- <view v-if="filterId === 'location' || filterId === 'all'" class="qyy-filters-location">
      <li>{{ filterId }} {{ id }}</li>
    </view> -->
  </view>
</template>

<script>
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/default.css'
import { LOCATION, EDUCATION } from '../../common/constants/common.constants'
// Vue.component('VueSlider', VueSlider)
export default {
  props: {
    filterId: String,
    id: String,
  },
  data(){
    return {
      locations: LOCATION,
      educations: EDUCATION,
      age: 25,
      value: [0, 10],
			min: 0,
			max: 24,
			tooltipStyle: {
				color: '#FFFFFF',
				width: '58px',
				height: '22px',
				background: 'red',
				borderRadius: '16px',
				padding: '3px 10px'
			},
      studyAbroad: 'false'
    }
  },
  methods: {
    radioChange: ()=>{
      console.log('radioChange')
    }
  }
};
</script>

<style lang="scss">
  .filter-items {
    margin-right: 20rpx;
    margin-top: 15rpx;
  }
  .age-container {
    width: 80%;
  }
</style>
