<template>
  <div class="mood">
    心情随笔
    <div style="width: 300px; height: 200px">
      <videoImg></videoImg>
    </div>
  </div>
</template>

<script>
import videoImg from '@/components/videoImg/index';
export default {
  components: {
    videoImg
  },
  data() {
    return {};
  },
  methods: {
    vSetImg(obj) {
      const _self = this;
      _self.$refs.video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 100;
        canvas
          .getContext('2d')
          .drawImage(obj, 0, 0, canvas.width, canvas.height);
        obj.setAttribute('poster', canvas.toDataURL('image/png'));
        //插入img标签查看封面图（调试用）
        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/png');
        document.querySelector('.mood').appendChild(img);
      };
    }
  },
  created() {},
  mounted() {
    const _self = this;
    // _self.vSetImg(_self.$refs.video);
  }
};
</script>

<style lang="scss" scoped>
.mood {
  video {
    width: 500px;
  }
}
</style>