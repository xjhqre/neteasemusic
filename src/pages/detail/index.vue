<template>
  <view class="detail">
    <view class="fixbg" :style="{ backgroundImage: 'url(' + song.al.picUrl + ')' }"></view>
    <music-head :title="song.name" :icon="true" style="color: white"></music-head>
    <view class="container" v-show="!isLoading">
      <scroll-view scroll-y>
        <!-- 唱片图像 -->
        <view class="detail-play">
          <image :src="song.al.picUrl"></image>
          <text class="iconfont iconpause"></text>
          <view></view>
        </view>
        <!-- 歌词 -->
        <view class="detail-lyric">
          <view class="detail-lyric-wrap">
            <view class="detail-lyric-item">测试测试测试测试测试测试</view>
            <view class="detail-lyric-item active">测试测试测试测试测试测试</view>
            <view class="detail-lyric-item">测试测试测试测试测试测试</view>
          </view>
        </view>
        <!-- 其他喜欢 -->
        <view class="detail-like">
          <view class="detail-like-head">
            喜欢这首歌的人也听
          </view>
          <view class="detail-like-item">
            <view class="detail-like-item-img">
              <image></image>
            </view>
            <view class="detail-like-item-song">
              <view>蓝</view>
              <view>
                <image src="/static/dujia.png"></image>
                <image src="/static/sq.png"></image>
                失败起 - 蓝
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
import {songDetail} from "@/api/api";
import musicHead from "@/components/MusicHead/index.vue";
import '@/styles/iconfont.css'

export default {
  components: {musicHead},
  data() {
    return {
      song: {
        name: '',
        al: {
          picUrl: ''
        }
      },
      isLoading: true
    }
  },
  onLoad(options) {
    songDetail(options.songId).then(res => {
      // console.log(options.songId)
      this.song = res.data.songs[0]
      this.isLoading = false
    })
  },
}
</script>

<style scoped>
.detail-play {
  width: 290px;
  height: 290px;
  background: url(~@/static/disc.png);
  background-size: cover;
  margin: 107px auto 0 auto;
  position: relative;
}

.detail-play image {
  width: 185px;
  height: 185px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.detail-play text {
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.detail-play view {
  width: 115px;
  height: 180px;
  background: url(~@/static/needle.png);
  position: absolute;
  left: 50px;
  right: 0;
  top: -107px;
  margin: auto;
  background-size: cover;
}

.detail-lyric {
  font-size: 16px;
  line-height: 41px;
  height: 123px;
  text-align: center;
  overflow: hidden;
  color: #6f6e73;
}

.detail-lyric-wrap {
}

.detail-lyric-item {
  height: 41px;
}

.detail-lyric-item.active {
  color: white;
}


.detail-like {
  margin: 0 15px;
}

.detail-like-head {
  font-size: 18px;
  color: white;
  margin: 25px 0;
}

.detail-like-item {
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

/* 播放按钮 */
.detail-like-item text {
  font-size: 25px;
  color: #c6c2bf
}


.detail-like-item-img {
  width: 41px;
  height: 41px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;;
}

/* 歌曲封面 */
.detail-like-item-img image {
  width: 100%;
  height: 100%;
}

.detail-like-item-song {
  flex: 1;
  color: #c6c2bf;
}

.detail-like-item-song view:nth-child(1) {
  font-size: 14px;
  color: white;
  margin-bottom: 6px;
}

.detail-like-item-song view:nth-child(2) {
  font-size: 11px;
}

/* 标签 */
.detail-like-item-song image {
  width: 13px;
  height: 10px;
  margin-right: 5px;
}
</style>