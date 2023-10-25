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
  /* 超出的元素隐藏 */
  overflow: hidden;
}

.container scroll-view {
  height: 100%;
}

.fixbg {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-size: cover; /* 背景图片完全覆盖背景区域，并保持其宽高比例不变 */
  background-position: center 0; /* 横向位置设置为水平居中，纵向位置设置为顶部边缘 */
  filter: blur(20px); /* 模糊 */
  transform: scale(1.2); /*  放大1.2倍 */
}
</style>
