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
</style>