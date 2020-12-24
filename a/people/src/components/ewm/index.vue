<template>
  <div class="ewm">
    <a
      :href="data"
      download="tyq121-welcome"
    ><img
        class="ewm-img"
        title="下载网站链接二维码"
      ></a>
    <div class="ewm-canvas"></div>
  </div>
</template>

<script>
import './jquery.min.js';
import './qrcode.min.js';
export default {
  props: {
    url: {
      type: String
    }
  },
  data() {
    return {
      data: ''
    };
  },
  mounted() {
    const _self = this;
    // console.log(_self.$route);
    var qrcode = $('.ewm-canvas')
      .qrcode('http://www.tyq121.top' + _self.url)
      .hide();
    var canvas = qrcode.find('canvas').get(0);
    _self.data = canvas.toDataURL('image/jpg');
    $('.ewm-img').attr('src', _self.data);
  }
};
</script>

<style lang="scss" scoped>
.ewm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 !important;
  box-sizing: border-box;
  .ewm-img {
    width: 100%;
    box-sizing: border-box;
  }
}
</style>