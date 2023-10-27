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
</style>
