<template>
  <div class="home-alert">
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow1">loading样式1</button>
    <button @click="handleClickLoadShow2">loading样式2</button>
    <button @click="handleClickLoadShow3">loading样式3</button>
    <button @click="handleClickLoadShow4">loading样式4</button>
    <button @click="handleClickLoadShow5">loading样式5</button>
    <button @click="handleClickLoadShow6">loading样式6</button>
    <button @click="handleClickLoadShow7">loading样式7</button>
    <button @click="handleClickLoadShow8">loading样式8</button>
    <button @click="handleClickLoadShow9">loading样式9</button>
    <button @click="handleClickLoadShow10">loading样式10</button>
    <button @click="handleClickLoadShow11">loading样式11</button>
    <button @click="handleClickLoadShow12">loading样式12</button>
    <!-- <div class="load-mask"> -->
    <!-- 三个点 省略号 -->
    <!-- <div class="load-ellipsis">
        <div class="load-ellipsis-item"></div>
        <div class="load-ellipsis-item"></div>
        <div class="load-ellipsis-item"></div>
      </div> -->
    <!-- 旋转的方块 -->
    <!-- <div class="load-rotateRect">
        <div class="load-rotateRect-content"></div>
      </div> -->
    <!-- 旋转的三条线 -->
    <!-- <div class="load-rotateLine">
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-dot"></div>
      </div> -->
    <!-- box-shadow 旋转球 -->
    <!-- <div class="load-shadow">
        <div class="load-shadow-content"></div>
      </div> -->
    <!-- 三个点 移动球 -->
    <!-- <div class="load-moveball">
        <div class="load-moveball-item"></div>
        <div class="load-moveball-item"></div>
        <div class="load-moveball-item"></div>
      </div> -->
    <!-- 旋转圈 -->
    <!-- <div class="load-quan">
        <div class="load-quan-item"></div>
        <div class="load-quan-item"></div>
        <div class="load-quan-item"></div>
      </div> -->
    <!-- 来回转圈 -->
    <!-- <div class="load-quanback">
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
      </div> -->
    <!-- 延时转圈 -->
    <!-- <div class="load-quanDelay">
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
        <div class="load-quanDelay-item"></div>
      </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 显示loading1
    handleClickLoadShow1() {
      var _self = this;
      _self.$gLoad(true, 1);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading2
    handleClickLoadShow2() {
      var _self = this;
      _self.$gLoad(true, 2);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading3
    handleClickLoadShow3() {
      var _self = this;
      _self.$gLoad(true, 3);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading4
    handleClickLoadShow4() {
      var _self = this;
      _self.$gLoad(true, 4);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading5
    handleClickLoadShow5() {
      var _self = this;
      _self.$gLoad(true, 5);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading6
    handleClickLoadShow6() {
      var _self = this;
      _self.$gLoad(true, 6);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading7
    handleClickLoadShow7() {
      var _self = this;
      _self.$gLoad(true, 7);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading8
    handleClickLoadShow8() {
      var _self = this;
      _self.$gLoad(true, 8);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading9
    handleClickLoadShow9() {
      var _self = this;
      _self.$gLoad(true, 9);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading10
    handleClickLoadShow10() {
      var _self = this;
      _self.$gLoad(true, 10);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading11
    handleClickLoadShow11() {
      var _self = this;
      _self.$gLoad(true, 11);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    },
    // 显示loading12
    handleClickLoadShow12() {
      var _self = this;
      _self.$gLoad(true, 12);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 3000);
    }
  }
};
</script>
<style scoped>
.load-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
/*三个点 省略号 
.load-ellipsis {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.load-ellipsis-item {
  width: 15px;
  height: 15px;
  border: 3px solid #ffc200;
  border-radius: 50%;
  animation: scaleLoad 1.5s ease 0ms infinite;
  transform: scale(0);
  box-sizing: border-box;
}
.load-ellipsis-item:nth-child(1) {
  animation-delay: 0.3s;
}
.load-ellipsis-item:nth-child(2) {
  animation-delay: 0.6s;
}
.load-ellipsis-item:nth-child(3) {
  animation-delay: 0.9s;
}
@keyframes scaleLoad {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
} */

/* 旋转的方块
.load-rotateRect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 100px;
  border: 3px solid #ffffff;
  box-sizing: border-box;
  animation: rotateRect 4s ease infinite;
}
@keyframes rotateRect {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  25% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  75% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.load-rotateRect-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: #ffffff;
  animation: rectAll 4s ease-in infinite;
}
@keyframes rectAll {
  25% {
    height: 0;
  }
  50% {
    height: 100%;
  }
  75% {
    height: 100%;
  }
  100% {
    height: 0;
  }
} */

/* 旋转的三条线
.load-rotateLine {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-rotateLine-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
}
.load-rotateLine-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.load-rotateLine-item:nth-child(1) {
  border-bottom: 3px solid #ffffff;
  animation: rotateLine1 2s linear infinite;
}
.load-rotateLine-item:nth-child(2) {
  border-right: 3px solid #ffffff;
  animation: rotateLine2 2s linear infinite;
}
.load-rotateLine-item:nth-child(3) {
  border-top: 3px solid #ffffff;
  animation: rotateLine3 2s linear infinite;
}
@keyframes rotateLine1 {
  0% {
    transform: translate(-50%, -50%) rotateX(35deg) rotateY(-45deg) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(35deg) rotateY(-45deg)
      rotate(360deg);
  }
}
@keyframes rotateLine2 {
  0% {
    transform: translate(-50%, -50%) rotateX(50deg) rotateY(10deg) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(50deg) rotateY(10deg)
      rotate(360deg);
  }
}
@keyframes rotateLine3 {
  0% {
    transform: translate(-50%, -50%) rotateX(35deg) rotateY(55deg) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotateX(35deg) rotateY(55deg)
      rotate(360deg);
  }
} */

/* box-shadow 旋转球
.load-shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-shadow-content {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ffffff;
  animation: rotateShadow 1.5s ease infinite;
}
@keyframes rotateShadow {
  0% {
    transform: rotate(0);
    box-shadow: 0 0 0 #ffffff, 0 0 0 #ffffff, 0 0 0 #ffffff, 0 -0 0 #ffffff,
      0 -0 0 #ffffff, 0 0 0 #ffffff, -0 -0 0 #ffffff, -0 0 0 #ffffff;
  }
  25%,
  75% {
    box-shadow: 50px 50px 0 #ffffff, -50px 50px 0 #ffffff, 0 70px 0 #ffffff,
      0 -70px 0 #ffffff, 50px -50px 0 #ffffff, 70px 0 0 #ffffff,
      -50px -50px 0 #ffffff, -70px 0 0 #ffffff;
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
    box-shadow: 0 0 0 #ffffff, 0 0 0 #ffffff, 0 0 0 #ffffff, 0 -0 0 #ffffff,
      0 -0 0 #ffffff, 0 0 0 #ffffff, -0 -0 0 #ffffff, -0 0 0 #ffffff;
  }
} */

/* 三个点 移动球
.load-moveball {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 30px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-moveball-item {
  position: absolute;
  top: 0;
  left: 125px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  animation: moveBall 1.5s linear infinite;
}
.load-moveball-item:nth-child(1) {
  animation-delay: -1s;
}
.load-moveball-item:nth-child(2) {
  animation-delay: -2s;
}
.load-moveball-item:nth-child(3) {
  animation-delay: -3s;
}
@keyframes moveBall {
  0% {
    transform: translateX(0) rotate(45deg) scale(0);
  }
  50% {
    transform: translateX(-233%) rotate(45deg) scale(1);
  }
  100% {
    transform: translateX(-466%) rotate(45deg) scale(0);
  }
} */

/* 旋转圈
.load-quan {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-quan-item {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
}
.load-quan-item:nth-child(1) {
  width: 10px;
  height: 10px;
  animation: rotateQuan1 1.5s linear infinite;
}
.load-quan-item:nth-child(2) {
  width: 70px;
  height: 70px;
  animation: rotateQuan2 1.5s linear infinite;
}
.load-quan-item:nth-child(3) {
  width: 100px;
  height: 100px;
  animation: rotateQuan3 1.5s linear infinite;
}
@keyframes rotateQuan1 {
  0% {
    transform: translate(-50%, -50%) rotate(100deg) rotateX(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg) rotateX(360deg);
  }
}
@keyframes rotateQuan2 {
  0% {
    transform: translate(-50%, -50%) rotate(100deg) rotateX(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0) rotateX(360deg);
  }
}
@keyframes rotateQuan3 {
  0% {
    transform: translate(-50%, -50%) rotate(20deg) rotateY(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(100deg) rotateY(360deg);
  }
} */

/* 来回转圈 
.load-quanback {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-quanback-item {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 5px solid transparent;
  border-top-color: #ffffff;
  border-left-color: #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotateQuanBack 2s linear infinite;
  transform: translate(-50%, -50%);
}
.load-quanback-item:nth-child(1) {
  width: 15px;
  height: 15px;
  animation-delay: 0;
}
.load-quanback-item:nth-child(2) {
  width: 40px;
  height: 40px;
  animation-delay: 0.15s;
}
.load-quanback-item:nth-child(3) {
  width: 60px;
  height: 60px;
  animation-delay: 0.3s;
}
.load-quanback-item:nth-child(4) {
  width: 80px;
  height: 80px;
  animation-delay: 0.45s;
}
.load-quanback-item:nth-child(5) {
  width: 100px;
  height: 100px;
  animation-delay: 0.6s;
}
@keyframes rotateQuanBack {
  50% {
    transform: translate(-50%, -50%) rotate(360deg) scale(0.7);
  }
} */

/* 延时转圈 */
/* .load-quanDelay {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
}
.load-quanDelay-item {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 2px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotateQuanDelay 2s cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite;
  transform: translate(-50%, -50%);
}
.load-quanDelay-item:nth-child(1) {
  width: 15px;
  height: 15px;
  animation-delay: 0s;
}
.load-quanDelay-item:nth-child(2) {
  width: 25px;
  height: 25px;
  animation-delay: 0.05s;
}
.load-quanDelay-item:nth-child(3) {
  width: 35px;
  height: 35px;
  animation-delay: 0.1s;
}
.load-quanDelay-item:nth-child(4) {
  width: 45px;
  height: 45px;
  animation-delay: 0.15s;
}
.load-quanDelay-item:nth-child(5) {
  width: 55px;
  height: 55px;
  animation-delay: 0.2s;
}
.load-quanDelay-item:nth-child(6) {
  width: 65px;
  height: 65px;
  animation-delay: 0.25s;
}
.load-quanDelay-item:nth-child(7) {
  width: 75px;
  height: 75px;
  animation-delay: 0.3s;
}
.load-quanDelay-item:nth-child(8) {
  width: 85px;
  height: 85px;
  animation-delay: 0.35s;
}
.load-quanDelay-item:nth-child(9) {
  width: 95px;
  height: 95px;
  animation-delay: 0.4s;
}
.load-quanDelay-item:nth-child(10) {
  width: 5px;
  height: 5px;
}
@keyframes rotateQuanDelay {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
} */
</style>