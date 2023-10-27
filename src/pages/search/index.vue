<template>
  <view class="search">
    <music-head title="搜索" :icon="true" :iconblack="true"></music-head>
    <view class="cotainer">
      <scroll-view scroll-y>
        <view class="search-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲"/>
          <text class="iconfont iconguanbi"></text>
        </view>
        <view class="search-history">
          <view class="search-history-head">
            <text>历史记录</text>
            <text class="iconfont iconlajitong"></text>
          </view>
          <view class="search-history-list">
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
            <view>测试</view>
          </view>
        </view>
        <view class="search-hot">
          <view class="search-hot-head">热搜榜</view>
          <view class="search-hot-item">
            <view class="search-hot-item-top">1</view>
            <view class="search-hot-item-word">
              <view>
                少年
                <image src=""></image>
              </view>
              <view>大大阿达是的</view>
            </view>
            <text class="search-hot-item-count">25135</text>
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
  methods: {},
  components: {musicHead},
  data() {
    return {}
  },
}
</script>

<style>
.search-search {
  display: flex;
  align-items: center;
  height: 35px;
  margin: 10px 15px 25px 15px;
  background: #f7f7f7;
  border-radius: 25px;
}

.search-search text {
  margin: 0 13px;
}

.search-search input {
  flex: 1;
  font-size: 13px;
}

.search-history {
  margin: 0 15px;
  font-size: 13px;
  margin-bottom: 30px;
}

.search-history-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.search-history-list {
  display: flex;
  flex-wrap: wrap;
}

.search-history-list view {
  padding: 8px 14px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background: #f7f7f7;
}

.search-hot {
  margin: 0 15px;
  font-size: 13px;
}

.search-hot-head {
  margin-bottom: 18px;
}

.search-hot-item {
  display: flex;
  align-items: center;
  margin-bottom: 29px;

}

.search-hot-item-top {
  color: #fb2222;
  width: 30px;
  margin-left: 4px;
}

.search-hot-item-word {
  flex: 1;
}

.search-hot-item-word view:nth-child(1) {
  font-size: 15px;
  color: black;
}

.search-hot-item-word view:nth-child(2) {
  font-size: 12px;
  color: #878787;
}

.search-hot-item-word image {
  width: 24px;
  height: 11px;
}

.search-hot-item-count {
  color: #878787;
}
</style>
