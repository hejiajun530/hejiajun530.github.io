<template>
  <div class="homeindex">
    <!-- 轮播图  pc端 -->
    <div
      class="homeindex-swiperpc"
      v-if="!phoneFlag"
    >
      <g-swiperAnimate
        :imglist="swiperAnimaImg"
        :configs="configs"
      ></g-swiperAnimate>
    </div>
    <!-- 轮播图  移动端 -->
    <div
      class="homeindex-swiperphone"
      v-else
    >
      <g-swiper
        :imglist="swiperAnimaImg"
        duration="5000"
      ></g-swiper>
    </div>
    <!-- 文章列表 -->
    <div class="homeindex-articlelist">
      <!-- 最新文章标题 -->
      <div class="articlelist-title d-flex jc-between ai-center">
        <div class="articlelist-title-left">最新文章</div>
        <!-- <div class="articlelist-title-right">过往故事(11) 技术分享(156)</div> -->
      </div>
      <articlelist http="getArticleList"></articlelist>
    </div>
  </div>
</template>

<script>
import swiperAnimate from '@/components/swiper/swiperAnimation.vue';
import swiper from '@/components/swiper/index.vue';
import articlelist from './article/articlelist';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    'g-swiperAnimate': swiperAnimate,
    'g-swiper': swiper,
    articlelist
  },
  data() {
    return {
      // swiper
      configs: [
        {
          width: 680,
          height: 100,
          top: 0,
          left: -50,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 2
        }, //0
        {
          width: 680,
          height: 250,
          top: 50,
          left: -100,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 3
        }, //1
        {
          width: 680,
          height: 300,
          top: 25,
          left: 105,
          opacity: 1,
          transform: 'translate(-12.5%, 0) rotateY(0)',
          zIndex: 4
        }, //2
        {
          width: 680,
          height: 250,
          top: 50,
          left: 250,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 3
        }, //3
        {
          width: 680,
          height: 100,
          top: 0,
          left: 450,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 2
        } //4
      ],
      swiperAnimaImg: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg'
      ]
    };
  },
  methods: {},
  created() {
    var _self = this;
  },
  mounted() {
    var _self = this;
  }
};
</script>

<style lang="scss" scoped>
.homeindex {
  min-height: 56.25rem;
  .homeindex-swiperpc {
    width: 45rem;
    height: 21.875rem;
    margin: 0 auto;
    border: 0.0625rem solid #dddddd;
  }
  .homeindex-swiperphone {
    width: 31.25rem;
    height: 21.875rem;
    margin: 0 auto;
    border: 0.0625rem solid #dddddd;
  }
  .homeindex-articlelist {
    margin: 1.25rem 0 0 0;
    padding: 0 0.9375rem;
    .homeindex-articlelist-pageing {
      margin: 1.25rem 0;
    }
  }
}
.articlelist-title {
  border-bottom: 0.3125rem solid orangered;
  padding: 0.625rem 0;
  .articlelist-title-left {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>