<template>
  <view class="container list">
    <view class="fixbg"></view>
    <music-head :title="title" :icon="true" style="color: white"></music-head>
    <view class="container">
      <scroll-view scroll-y>
        <view class="list-head">
          <!-- 图片部分 -->
          <view class="list-head-img">
            <image src="/static/wangyiyunyinyue.png"></image>
            <text class="iconfont iconyousanjiao">30亿</text>
          </view>
          <!-- 文字描述 -->
          <view class="list-head-text">
            <view>测试文字</view>
            <view>
              <image src="/static/wangyiyunyinyue.png"></image>
              测试文字
            </view>
            <view>
              测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
            </view>
          </view>
        </view>
        <!-- 分享按钮，条件编译 -->
        <!-- #ifdef MP-WEIXIN -->
        <button class="list-share" open-type="share">
          <text class="iconfont iconicon-"></text>
          分享给微信好友
        </button>
        <!-- #endif -->
        <!--  音乐列表  -->
        <view class="list-music">
          <view class="list-music-head">
            <text class="iconfont iconbofang1"></text>
            <text>播放全部</text>
            <text>(共100首)</text>
          </view>
          <view class="list-music-item">
            <view class="list-music-item-top">1</view>
            <view class="list-music-item-song">
              <view>与我无关</view>
              <view>
                <image src="/static/dujia.png"></image>
                <image src="/static/sq.png"></image>
                阿容 - 与我无关
              </view>
            </view>
            <text class="iconfont iconbofang"></text>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import musicHead from "@/components/MusicHead/index.vue";
import '@/styles/iconfont.css'

export default {
  components: {
    musicHead
  },
  data() {
    return {
      // 歌单ID
      id: null,
      // 歌单名称
      title: ""
    }
  },
  onLoad(options) {
    this.id = options.id;
    this.title = options.title;
  },
  props: []
}
</script>

<style scoped>

.list-head {
  display: flex;
  margin: 15px;

}

.list-head-img {
  width: 132px;
  height: 132px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  margin-right: 21px;
}

.list-head-img image {
  width: 100%;
  height: 100%;

}

.list-head-img text {
  position: absolute;
  right: 4px;
  top: 4px;
  color: white;
  font-size: 13px;
}

.list-head-text {
  flex: 1;
  color: white;
}

.list-head-text view:nth-child(1) {
  color: white;
  font-size: 17px;
}

.list-head-text view:nth-child(2) {
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  align-items: center; /* 垂直居中 */
}

.list-head-text view:nth-child(2) image {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  margin-right: 7px;
}

.list-head-text view:nth-child(3) {
  line-height: 17px;
  font-size: 11px;
}

.list-share {
  width: 165px;
  height: 37px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 18px;
  color: white;
  text-align: center; /* 左右居中 */
  line-height: 37px; /* 上下居中 */
  font-size: 14px;
}

.list-share text {
  margin-right: 8px;
}

.list-music {
  background: white;
  border-radius: 25px;
  margin-top: 20px;
  overflow: hidden;
}

.list-music-head {
  height: 25px;
  margin: 15px 0 35px 11px;
}

.list-music-head text:nth-child(1) {
  height: 25px;
  font-size: 25px;
}

.list-music-head text:nth-child(2) {
  font-size: 15px;
  margin: 0 5px 0 13px;
}

.list-music-head text:nth-child(3) {
  font-size: 13px;
  color: #b2b2b2;
}

.list-music-item {
  display: flex;
  margin: 0 16px 33px 20px;
  align-items: center; /* flex容器的元素垂直居中 */
}

.list-music-item text {
  font-size: 25px;
  color: #c7c7c7;
}

.list-music-item-top {
  width: 29px;
  font-size: 15px;
  line-height: 15px;
  color: #959595;
}

.list-music-item-song {
  flex: 1;
}

.list-music-item-song view:nth-child(1) {
  font-size: 14px;
  color: black;
}

.list-music-item-song view:nth-child(2) {
  display: flex;
  font-size: 10px;
  color: #959595;
  align-items: center;
}

.list-music-item-song view:nth-child(2) image {
  width: 16px;
  height: 10px;
  margin-right: 5px;
}
</style>