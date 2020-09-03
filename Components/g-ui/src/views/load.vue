<template>
  <div class="home-alert">
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow1">loading样式1</button>
    <button @click="handleClickLoadShow2">loading样式2</button>
    <button @click="handleClickLoadShow3">loading样式3</button>
    <button @click="handleClickLoadShow4">loading样式4</button>
    <div class="load-mask">
      <div class="load">
        <div class="load-item"></div>
        <div class="load-item"></div>
        <div class="load-item"></div>
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
.load {
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
.load-item {
  width: 15px;
  height: 15px;
  border: 3px solid #ffc200;
  /* border: 3px solid #ffffff; */
  border-radius: 50%;
  animation: scaleLoad 1.5s ease 0ms infinite;
  transform: scale(0);
  box-sizing: border-box;
}
.load-item:nth-child(1) {
  animation-delay: 0.3s;
}
.load-item:nth-child(2) {
  animation-delay: 0.6s;
}
.load-item:nth-child(3) {
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
</style>