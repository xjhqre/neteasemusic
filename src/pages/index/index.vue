<template>
  <view class="index">
    <music-head title="网易云音乐" :icon="false"></music-head>
    <view class="container">
      <!-- 页面在y轴方向上进行滚动，保持头部固定不动 -->
      <scroll-view scroll-y>
        <!-- 搜索框部分 -->
        <view class="index-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲"/>
        </view>
        <!-- 歌单列表部分 -->
        <view class="index-list">
          <view class="index-list-item" v-for="(item, index) in topListDetail" :key="index"
                @tap="handleToList(item.id, item.name)">
            <view class="index-list-item-img">
              <image :src="item.coverImgUrl"></image>
              <text>{{ item.updateFrequency }}</text>
            </view>
            <view class="index-list-item-text">
              <view class="index-list-item-text-item" v-for="(item, index) in item.tracks" :key="index">
                {{ index + 1 }}.{{ item.first }} - {{ item.second }}
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import '@/styles/iconfont.css'
import musicHead from "@/components/MusicHead/index.vue";
import {topListDetail} from "@/api/api";

export default {
  components: {
    musicHead
  },
  data() {
    return {
      topListDetail: []
    }
  },
  onLoad() {
    topListDetail().then(res => {
      if (res.length) {
        this.topListDetail = res;
      }
    })
  },
  methods: {
    handleToList(id, title) {
      uni.navigateTo({
        url: `/pages/list/index?id=${id}&title=${title}`
      })
    }
  }
}
</script>

<style scoped>
.index-search {
  display: flex;
  /* 交叉轴上居中对齐，使它们在垂直方向上居中显示 */
  align-items: center;
  height: 35px;
  margin: 35px 15px 15px 15px;
  background: #f7f7f7;
  border-radius: 25px;
}

.index-search text {
  font-size: 13px;
  margin-right: 13px;
  margin-left: 14px;
}

.index-search input {
  font-size: 14px;
  flex: 1;
}

.index-list {
  margin: 0 15px;
}

.index-list-item {
  /* 左右排列 */
  display: flex;
  margin-bottom: 17px;
}

.index-list-item-img {
  flex: 0 0 auto; /* 保持元素不被压缩 */
  width: 106px;
  height: 106px;
  position: relative;
  border-radius: 15px;
  overflow: hidden; /* index-list-item-img加了圆角但是图片还是会溢出，需要隐藏 */
  margin-right: 11px;
}

.index-list-item-img image {
  width: 100%;
  height: 100%;
}

/* 图片文底部字 */
.index-list-item-img text {
  position: absolute;
  left: 6px;
  bottom: 8px;
  color: white;
  font-size: 10px;
}

/* 右侧歌曲名字 */
.index-list-item-text {
  flex: 1;
  font-size: 12px;
  line-height: 35px;
}

.index-list-item-text-item {
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
