<template>
<view class="content">

  <view class="u-page">
    <u-card v-for="item in indexList" :key="item.key" :show-head="false" :foot-border-top="false" :show-foot="false" :thumb="thumb">
      <view class="" slot="body">
        <view class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0">
          <image src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg" mode="aspectFill"></image>
          <view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
        </view>
      </view>
    </u-card>
  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      indexList: [{
          name: '12334',
          key: '3233'
        },
        {
          name: 'ewe',
          key: 'fgf'
        },
        {
          name: 'ret',
          key: 'hghg'
        }
      ],
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

<style>
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
