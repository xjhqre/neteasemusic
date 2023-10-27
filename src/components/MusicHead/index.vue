<template>
  <view class="music-head">
    <view v-if="icon" class="music-head-icon" :class="{'music-head-iconblack' : iconblack}">
      <text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text>
      |
      <text class="iconfont iconshouye" @tap="handleToHome"></text>
    </view>
    {{ title }}
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['title', 'icon', 'iconblack'],
  methods: {
    handleToBack() {
      uni.navigateBack();
    },
    handleToHome() {
      uni.navigateTo({
        url: '/pages/index/index'
      })
    }
  }
}
</script>

<style scoped>
/* 1px = 2rpx  photoshop里需要将高度设置成 750px。ps里量的是rpx的长度，需要除以2
*/
.music-head {
  width: 100%;
  height: 75px;
  font-size: 16px;
  line-height: 80px;
  text-align: center;
  color: black;
  position: relative;
}

/* line-height 会继承父元素导致看不见图标 */
.music-head-icon {
  position: absolute;
  left: 8px;
  top: 25px;
  width: 90px;
  height: 30px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: space-evenly; /* 将子元素沿主轴均匀分布，同时在第一个元素之前和最后一个元素之后留有相等的空白间距。 */
}

.music-head-iconblack {
  color: black;
  border: 1px #eaeaea solid;
  background: white;
}
</style>