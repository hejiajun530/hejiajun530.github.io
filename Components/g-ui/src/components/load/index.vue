<template>
  <div>
    <div
      id="g-loading-mask"
      v-if="loadShow"
    >
      <!-- 默认 -->
      <div
        class="loading"
        v-if="type == 1"
      ><img src="./loading.png"></div>
      <!-- 第一种 loading-rotate -->
      <div
        class="loading"
        v-if="type == 2"
      >
        <div
          class="loading-box"
          style="--i: 1"
        ></div>
        <div
          class="loading-box"
          style="--i: 2"
        ></div>
        <div
          class="loading-box"
          style="--i: 3"
        ></div>
        <div
          class="loading-box"
          style="--i: 4"
        ></div>
        <div
          class="loading-box"
          style="--i: 5"
        ></div>
        <div
          class="loading-box"
          style="--i: 6"
        ></div>
        <div
          class="loading-box"
          style="--i: 7"
        ></div>
        <div
          class="loading-box"
          style="--i: 8"
        ></div>
      </div>
      <!-- 第二种 月亮转 -->
      <div
        class="loading"
        v-if="type == 3"
      >
        <div class="loading-circle"></div>
      </div>
      <!-- 第三种 loading跳 -->
      <div
        class="loading"
        v-if="type == 4"
      >
        <div class="loading-font">
          <span style="--i: 1">L</span>
          <span style="--i: 2">o</span>
          <span style="--i: 3">a</span>
          <span style="--i: 4">d</span>
          <span style="--i: 5">i</span>
          <span style="--i: 6">n</span>
          <span style="--i: 7">g</span>
          <span style="--i: 8">.</span>
          <span style="--i: 9">.</span>
          <span style="--i: 10">.</span>
        </div>
      </div>
      <!-- 第四种 三个点 省略号 -->
      <div
        class="load-ellipsis"
        v-if="type == 5"
      >
        <div class="load-ellipsis-item"></div>
        <div class="load-ellipsis-item"></div>
        <div class="load-ellipsis-item"></div>
      </div>
      <!-- 第五种 旋转的方块 -->
      <div
        class="load-rotateRect"
        v-if="type == 6"
      >
        <div class="load-rotateRect-content"></div>
      </div>
      <!-- 第六种 旋转的三条线 -->
      <div
        class="load-rotateLine"
        v-if="type == 7"
      >
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-item"></div>
        <div class="load-rotateLine-dot"></div>
      </div>
      <!-- 第七种 box-shadow 旋转球 -->
      <div
        class="load-shadow"
        v-if="type == 8"
      >
        <div class="load-shadow-content"></div>
      </div>
      <!-- 第八种 三个点 移动球 -->
      <div
        class="load-moveball"
        v-if="type == 9"
      >
        <div class="load-moveball-item"></div>
        <div class="load-moveball-item"></div>
        <div class="load-moveball-item"></div>
      </div>
      <!-- 第九种 旋转圈 -->
      <div
        class="load-quan"
        v-if="type == 10"
      >
        <div class="load-quan-item"></div>
        <div class="load-quan-item"></div>
        <div class="load-quan-item"></div>
      </div>
      <!-- 第10种 来回转圈 -->
      <div
        class="load-quanback"
        v-if="type == 11"
      >
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
        <div class="load-quanback-item"></div>
      </div>
      <!-- 第11种 延时转圈 -->
      <div
        class="load-quanDelay"
        v-if="type == 12"
      >
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadShow: true,
      type: 1
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {}
};
</script>
<style scoped>
#g-loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading img {
  width: 60px;
  height: 60px;
  animation: rotate 1s linear infinite;
  transform-origin: center center;
}
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
/* loading-rotate */
.loading-box {
  width: 6px;
  height: 50px;
  background: #fff;
  border-radius: 10px;
  margin: 0 3px;
  animation: loading 1.1s linear infinite;
  animation-delay: calc(0.1s * var(--i));
  transform-style: preserve-3d;
}
@keyframes loading {
  0% {
    transform: rotateX(0);
  }
  100% {
    transform: rotateX(360deg);
  }
}
/* 月亮转 */
.loading-circle {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: -webkit-linear-gradient(
    45deg,
    transparent,
    transparent 40%,
    #e5f403
  );
  animation: animate 1s linear infinite;
}
@keyframes animate {
  0% {
    transform: rotate(0);
    filter: hue-rotate(0);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
.loading-circle::before {
  content: "";
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background: #222;
  filter: blur(2px);
  border-radius: 50%;
  z-index: 1000;
}
.loading-circle::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: -webkit-linear-gradient(
    45deg,
    transparent,
    transparent 40%,
    #e5f403
  );
  border-radius: 50%;
  z-index: 1;
  filter: blur(30px);
}
/* 第三种 */
.loading-font {
  width: 100%;
  font-size: 3em;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  position: relative;
  -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(255, 255, 255, 0.5));
}
.loading-font span {
  position: relative;
  display: inline-block;
  animation: bolan 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes bolan {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, -20px);
  }
  40%,
  100% {
    transform: translate(0, 0);
  }
}
/* 第四种 三个点 省略号 */
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
}

/* 第五种 旋转的方块 */
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
}

/* 第六种 旋转的三条线 */
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
/* 第七种 box-shadow 旋转球 */
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
}

/* 第八种 三个点 移动球 */
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
}

/* 第九种 旋转圈 */
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
}

/* 第10种 来回转圈 */
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
}

/* 第11种 延时转圈 */
.load-quanDelay {
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
}
</style>