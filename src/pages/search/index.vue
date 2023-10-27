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
  margin: 35px 15px 15px 15px;
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
</style>
