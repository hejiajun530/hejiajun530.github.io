<template>
  <div class="videoImg">
    图片
    <video
      id="video"
      ref="video"
      controls
      preload="auto"
    >
      <source
        ref="videosrc"
        src="../../assets/smoke.mp4"
      >
    </video>
    <img
      class="videoImg-img"
      ref="videoimg"
    >
  </div>
</template>

<script>
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
    _self.handleGetVideoImg();
  },
  methods: {
    // 获取视频封面
    handleGetVideoImg() {
      const _self = this;
      let video = _self.$refs.video;
      let videosrc = _self.$refs.videosrc;
      let videoimg = _self.$refs.videoimg;
      videoimg.setAttribute('crossOrigin', 'Anonymous');
      // videosrc.src = 'http://www.tyq121.top:80/upload/smoke.mp4';
      video.onloadeddata = () => {
        var canvas = document.createElement('canvas');
        canvas.width = 100;
        canvas.height = 100;
        canvas
          .getContext('2d')
          .drawImage(video, 0, 0, canvas.width, canvas.height);
        let imgsrc = canvas.toDataURL('image/png');
        videoimg.src = imgsrc;
        console.log(videoimg);
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.videoImg {
  width: 100%;
  height: 100%;
  #video {
    display: none;
  }
  img {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>