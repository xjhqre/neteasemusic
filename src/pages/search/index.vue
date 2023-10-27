<template>
  <view class="search">
    <music-head title="搜索" :icon="true" :iconblack="true"></music-head>
    <view class="cotainer">
      <scroll-view scroll-y>
        <view class="search-search">
          <text class="iconfont iconsearch"></text>
          <input type="text" placeholder="搜索歌曲" v-model="searchWord" @confirm="handleToSearch(searchWord)"/>
          <text v-show="searchWord" class="iconfont iconguanbi"></text>
        </view>
        <block v-if="searchType === 1">
          <view class="search-history">
            <view class="search-history-head">
              <text>历史记录</text>
              <text class="iconfont iconlajitong" @tap="handleToClear"></text>
            </view>
            <view class="search-history-list">
              <view v-for="(item, index) in searchHistory" :key="index" @tap="handleToWord(item)">
                {{ item }}
              </view>
            </view>
          </view>
          <view class="search-hot">
            <view class="search-hot-head">热搜榜</view>
            <view class="search-hot-item" v-for="(item, index) in hotDetails" :key="index"
                  @tap="handleToWord(item.searchWord)">
              <view class="search-hot-item-top">{{ index + 1 }}</view>
              <view class="search-hot-item-word">
                <view>
                  {{ item.searchWord }}
                  <!-- mode="aspectFit": 图像会等比例缩放以适应容器，并且图像的整个内容都会显示在容器内部。如果图像的宽高比与容器的宽高比不一致，那么会有一部分容器的背景会显示出来，以填充容器的空白区域 -->
                  <image :src="item.iconUrl" mode="aspectFit"></image>
                </view>
                <view>{{ item.content }}</view>
              </view>
              <text class="search-hot-item-count">{{ item.score }}</text>
            </view>
          </view>
        </block>
        <black v-else-if="searchType === 2">
          <view class="search-result">
            <view class="search-result-item">
              <view class="search-result-item-word">
                <view>少年</view>
                <view>阿斯顿萨达</view>
              </view>
              <text class="iconfont iconbofang"></text>
            </view>
          </view>
        </black>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import musicHead from "@/components/MusicHead/index.vue";
import '@/styles/iconfont.css'
import {searchHotDetail} from "@/api/api";

export default {
  components: {musicHead},
  data() {
    return {
      hotDetails: [],
      searchWord: '',
      searchHistory: [],
      searchType: 2,
    }
  },
  onLoad() {
    searchHotDetail().then(res => {
      this.hotDetails = res.data.data
      console.log(this.hotDetails)
    })
    uni.getStorage({
      key: 'searchHistory',
      success: res => {
        this.searchHistory = res.data
      }
    })
  },
  methods: {
    handleToWord(word) {
      this.searchWord = word
    },
    handleToSearch(word) {
      this.searchHistory.unshift(word)
      // 去重
      this.searchHistory = [...new Set(this.searchHistory)]
      // 限制数量
      if (this.searchHistory.length > 10) {
        this.searchHistory.length = 10
      }
      uni.setStorage({
        key: 'searchHistory',
        data: this.searchHistory
      })
    },
    // 清空历史记录
    handleToClear() {
      uni.removeStorage({
        key: 'searchHistory',
        success: res => {
          this.searchHistory = []
        }
      })
    }
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
  margin-left: 10px;
}

.search-hot-item-count {
  color: #878787;
}

.search-result {
  border-top: 1px #e4e4e4 solid;
  padding: 15px;
}

.search-result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;;
  margin-bottom: 15px;
  border-bottom: 1px #e4e4e4 solid;
}

.search-result-item text {
  font-size: 25px;
}

.search-result-item-word {
}

.search-result-item-word view:nth-child(1) {
  font-size: 14px;
  color: #235790;
  margin-bottom: 6px;
}

.search-result-item-word view:nth-child(2) {
  font-size: 11px;
  color: #898989;
}
</style>
