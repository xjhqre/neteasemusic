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
              <image :src="song.al.picUrl"></image>
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
        <view class="detail-comment">
          <view class="detail-comment-head">精彩评论</view>
          <view class="detail-comment-item">
            <view class="detail-comment-item-img">

            </view>
            <view class="detail-comment-item-content">
              <view class="detail-comment-item-content-title">
                <view class="detail-comment-item-content-title-name">
                  <view>周杰伦</view>
                  <view>20231654</view>
                </view>
                <view class="detail-comment-item-content-title-like">
                  56027
                  <text class="iconfont iconlike"></text>
                </view>
              </view>
              <view class="detail-comment-item-content-text">
                测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
              </view>
            </view>
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
      // 相似歌曲列表
      simi: [],
      isLoading: true
    }
  },
  onLoad(options) {
    this.getMusic(options.songId)
  },
  methods: {
    getMusic(songId) {
      Promise.all([
        songDetail(songId).then(res => {
          console.log(songId)
          this.song = res.data.songs[0]
        }),

      ])

    }
  }
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

.detail-comment {
  margin: 0 15px;
}

.detail-comment-head {
  font-size: 18px;
  color: white;
  margin: 25px 0;
}

.detail-comment-item {
  margin-bottom: 14px;
  display: flex;
}

.detail-comment-item-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 9px;
}

.detail-comment-item-img image {
  width: 100%;
  height: 100%;
}

.detail-comment-item-content {
  flex: 1;
  color: #c7c7c9;
}

.detail-comment-item-content-title {
  display: flex;
  justify-content: space-between; /* 靠两边均匀分布 */
}

.detail-comment-item-content-title-name {

}

.detail-comment-item-content-title-name view:nth-child(1) {
  font-size: 13px;

}

.detail-comment-item-content-title-name view:nth-child(2) {
  font-size: 10px;
  color: #8b8a8b;
}

.detail-comment-item-content-title-like {
  font-size: 14px;
}

.detail-comment-item-content-text {
  line-height: 20px;
  font-size: 14px;
  color: white;
  margin-top: 10px;
  border-bottom: 1px #e0e0e0 solid;
  padding-bottom: 20px;
}

</style>