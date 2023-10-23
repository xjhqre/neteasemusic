<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
.container {
  width: 100%;
  /* vh表示视口（viewport）的高度。视口高度是指用户在浏览器中可见内容的区域高度 */
  height: calc(100vh - 70px);
  /* 超出的元素隐藏 */
  overflow: hidden;
}

.container scroll-view {
  height: 100%;
}
</style>
