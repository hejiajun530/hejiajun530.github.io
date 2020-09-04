<template>
  <div class="home-alert">
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow1">loading样式1</button>
    <button @click="handleClickLoadShow2">loading样式2</button>
    <button @click="handleClickLoadShow3">loading样式3</button>
    <button @click="handleClickLoadShow4">loading样式4</button>
    <div class="load-mask">
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
      <div class="load-rotateLine">
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-dot"></div>
      </div>
    </div>
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
}
</style>