<template>
  <div
    class="swiper"
    ref="swiper"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="swiper-left flex-center-center"
      @click="handleClickPre"
      v-if="PreNextShow && index > 0"
    >
      <img src="./prev.png">
    </div>
    <div
      class="swiper-right flex-center-center"
      @click="handleClickNext"
      v-if="PreNextShow && index < (_self.imglist.length - 1)"
    >
      <img src="./next.png">
    </div>
    <ul class="swiper-circles">
      <li
        @click="handleClickIndex(idx)"
        v-for="(item, idx) in imglist"
        :key="idx"
        :class="idx == index ? 'active' : ''"
      >
      </li>
    </ul>
    <div
      class="swiper-images"
      ref="swiperImages"
      :style="'left:' + -(index * moveWidth) + 'px;transition: 1s;'"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <img
        :src="item"
        v-for="(item, index) in imglist"
        :key="index"
      >
      <div class="swiper-mask"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imglist", "duration"],
  data() {
    return {
      index: 0,
      timer: null,
      timeInterval: null,
      temp: 1,
      PreNextShow: false,
      // 移动初始位置
      startX: 0,
      // 移动移动位置
      moveX: 0,
      moveWidth: 0
    };
  },
  mounted() {
    var _self = this;
    _self.autoplay();
    _self.$nextTick(function() {
      // console.log(_self.$refs.swiper.clientWidth);
      _self.moveWidth = _self.$refs.swiper.clientWidth;
      _self.$refs.swiperImages.style.width =
        _self.$refs.swiper.clientWidth * _self.imglist.length + "px";
      var imgs = document.querySelectorAll(".swiper-images img");
      for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.width = _self.$refs.swiper.clientWidth + "px";
      }
    });
  },
  methods: {
    // 鼠标 移入 轮播图区域  停止自动播放
    handleMouseEnter() {
      var _self = this;
      // console.log("enter");
      _self.PreNextShow = true;
      clearInterval(_self.timeInterval);
    },
    // 鼠标 移出 轮播图区域  开始自动播放
    handleMouseLeave() {
      var _self = this;
      // console.log("leave");
      _self.PreNextShow = false;
      clearInterval(_self.timeInterval);
      _self.autoplay();
    },
    // 上一张
    handleClickPre() {
      var _self = this;
      let idx = _self.index - 1;
      _self.index = idx;
    },
    // 下一张
    handleClickNext() {
      var _self = this;
      let idx = _self.index + 1;
      _self.index = idx;
    },
    // 点小圆点移动图片
    handleClickIndex(idx) {
      var _self = this;
      _self.index = idx;
    },
    // 自动轮播
    autoplay() {
      var _self = this;
      _self.timeInterval = setInterval(() => {
        // console.log(_self.index);
        if (_self.index <= 0) {
          _self.temp = 1;
        } else if (_self.index >= _self.imglist.length - 1) {
          _self.temp = -1;
        }
        _self.index = _self.index + _self.temp;
      }, _self.duration);
    },
    // 移动端 手指 初始
    handleTouchStart(e) {
      var _self = this;
      // 手指移开屏幕后 停止自动播放
      clearInterval(_self.timeInterval);
      _self.startX = e.targetTouches[0].clientX;
    },
    // 移动端 手指 移动
    handleTouchMove(e) {
      var _self = this;
      var images = document.querySelector(".swiper-images");
      // 移动位置
      _self.moveX = e.targetTouches[0].clientX - _self.startX;
      // 设置元素随着手指移动而移动
      images.style.transition = "none";
      images.style.transform = "translateX(" + _self.moveX + "px)";
    },
    // 移动端 手指 结束
    handleTouchEnd(e) {
      var _self = this;
      var idx = 0;
      // 手指移开屏幕后 开启自动播放
      clearInterval(_self.timeInterval);
      _self.autoplay();
      // 初始化 style
      var images = document.querySelector(".swiper-images");
      images.style.transition = "1s";
      images.style.transform = "translateX(0px)";
      // 移动位置 超过50 就切换
      if (Math.abs(_self.moveX) > 50) {
        if (_self.moveX > 0) {
          idx = _self.index - 1;
          if (idx < 0 || idx >= _self.imglist.length) {
            return false;
          }
          _self.index = idx;
        } else {
          // _self.index++;
          idx = _self.index + 1;
          if (idx < 0 || idx >= _self.imglist.length) {
            return false;
          }
          _self.index = idx;
        }
      }
      // 初始化 位置坐标
      _self.startX = 0;
      _self.moveX = 0;
    }
  }
};
</script>
<style scoped>
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-between-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-around-center {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul,
li {
  list-style: none;
}

.swiper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.swiper-left,
.swiper-right {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 10%;
  height: 25%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  z-index: 10;
  cursor: pointer;
}
.swiper-left img,
.swiper-right img {
  width: 100%;
}
.swiper-left {
  left: 0;
}

.swiper-right {
  right: 0;
}

.swiper-circles {
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: 10;
  cursor: pointer;
}

.swiper-circles li {
  float: left;
  width: 1.45rem;
  height: 1.45rem;
  background-color: #000000;
  border-radius: 50%;
  margin: 0 5px;
}

.swiper-circles li.active {
  background-color: #ff0000;
}

.swiper-images {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

.swiper-images img {
  float: left;
  height: 100%;
}

.swiper-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>