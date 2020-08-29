<template>
  <div class="home-alert">
    <!-- 轮播图 -->
    <div class="banner">
      <g-swiper
        :imglist="imglist"
        duration="5000"
      ></g-swiper>
    </div>
    <!-- 动画函数 轮播图 -->
    <div class="banner-new">
      <g-swiperAnima
        :imglist="swiperAnimaImg"
        :configs="configs"
      ></g-swiperAnima>
    </div>
    <h1 style="text-align: left;">该轮播图中图片不自适应，需手动配置</h1>
  </div>
</template>
<script>
import swiper from "@/components/swiper/index";
import swiperAnima from "@/components/swiper/swiperAnimation";
export default {
  data() {
    return {
      configs: [
        {
          width: 350,
          height: 100,
          top: 0,
          left: -50,
          opacity: 0,
          transform: "translate(-12.5%, 0) rotateY(45deg)",
          zIndex: 2
        }, //0
        {
          width: 350,
          height: 250,
          top: 50,
          left: -100,
          opacity: 0.8,
          transform: "translate(-12.5%, 0) rotateY(45deg)",
          zIndex: 3
        }, //1
        {
          width: 350,
          height: 300,
          top: 25,
          left: 120,
          opacity: 1,
          transform: "translate(-12.5%, 0) rotateY(0)",
          zIndex: 4
        }, //2
        {
          width: 350,
          height: 250,
          top: 50,
          left: 250,
          opacity: 0.8,
          transform: "translate(-12.5%, 0) rotateY(-45deg)",
          zIndex: 3
        }, //3
        {
          width: 350,
          height: 100,
          top: 0,
          left: 450,
          opacity: 0,
          transform: "translate(-12.5%, 0) rotateY(-45deg)",
          zIndex: 2
        } //4
      ],
      swiperAnimaImg: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg"
      ],
      imglist: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg"
      ]
    };
  },
  components: {
    "g-swiperAnima": swiperAnima,
    "g-swiper": swiper
  },
  methods: {
    // 获取select下拉框组件选择的值 数组形式
    handleGetSelectValue(value) {
      var _self = this;
      console.log(value);
    }
  }
};
</script>
<style scoped>
.banner {
  width: 31.25rem;
  height: 21.875rem;
}
.banner-new {
  width: 31.25rem;
  height: 21.875rem;
}
</style>