<template>
  <div class="switch">
    <div
      class="switch-box"
      @click="handleClickTaggle"
      :class="switchFlag ? 'active' : ''"
    >
      <img
        src="./switch.png"
        :class="switchFlag ? 'active' : ''"
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switchFlag: false
    };
  },
  methods: {
    // 控制switch组件开关
    handleClickTaggle() {
      var _self = this;
      _self.switchFlag = !_self.switchFlag;
      _self.$emit("g-switchFlag", _self.switchFlag);
    }
  }
};
</script>
<style scoped>
.switch-box {
  width: 60px;
  height: 30px;
  background-color: #cccccc;
  border-radius: 30px;
  border: 1px solid #888888;
  box-sizing: border-box;
  transition: 0.5s;
  cursor: pointer;
}
.switch-box.active {
  background-color: #ff000f;
}
.switch-box img {
  display: block;
  width: 30px;
  height: 30px;
  transform: translate(0, 0);
  transition: 0.5s;
}
.switch-box img.active {
  transform: translate(100%, 0);
}
</style>