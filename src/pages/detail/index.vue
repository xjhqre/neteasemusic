<template>
  <view class="detail">
    <view class="fixbg" :style="{ backgroundImage: 'url(' + song.al.picUrl + ')' }"></view>
    <music-head :title="song.name" :icon="true" style="color: white"></music-head>
    <view class="container" v-show="!isLoading">
      <scroll-view scroll-y>

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
      this.song = res.data.songs[0]
      this.isLoading = false
    })
  },
}
</script>

<style scoped>

</style>