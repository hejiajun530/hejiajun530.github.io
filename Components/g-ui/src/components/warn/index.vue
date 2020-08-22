<template>
  <div>
    <div
      class="warnning"
      :class="type"
      v-if="warnShow"
    >
      <div>
        <span
          class="iconfont icon-dui"
          v-if="type == 'success'"
        ></span>
        <span
          class="iconfont icon-cuowu"
          v-if="type == 'error'"
        ></span>
        <span
          class="iconfont icon-info"
          v-if="type == 'info'"
        ></span>
        <span
          class="iconfont icon-jingshigantanhao2"
          v-if="type == 'warn'"
        ></span>
        <span>{{title}}</span>
      </div>
      <span @click="handleClickCloseWarn">×</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "title", "icon"],
  data() {
    return {
      warnShow: true
    };
  },
  methods: {
    // 关闭警告框
    handleClickCloseWarn() {
      var _self = this;
      _self.warnShow = false;
    }
  }
};
</script>
<style scoped>
.warnning {
  width: 500px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  background-color: #f0f9eb;
  color: #93c78f;
  border-radius: 5px;
}
.warnning .iconfont {
  margin: 0 10px 0 5px;
}
.warnning.success {
  background-color: #f0f9eb;
  color: #74c55c;
}
.warnning.warn {
  background-color: #fdf6ec;
  color: #e7b291;
}
.warnning.info {
  background-color: #edf2fc;
  color: #a8b0b6;
}
.warnning.error {
  background-color: #fef0f0;
  color: #f69c9b;
}
.warnning > span:nth-child(2) {
  display: inline-block;
  padding: 5px;
  color: #c5d3de;
  cursor: pointer;
}
</style>