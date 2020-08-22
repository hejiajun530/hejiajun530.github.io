<template>
  <div>
    <div
      id="g-loading-mask"
      v-if="loadShow"
    >
      <div class="loading"><img
          src="./loading.png"
          alt=""
        ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loadShow: true
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
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
</style>