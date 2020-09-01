<template>
  <div class="home-alert">
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow1">loading样式1</button>
    <button @click="handleClickLoadShow2">loading样式2</button>
    <button @click="handleClickLoadShow3">loading样式3</button>
    <button @click="handleClickLoadShow4">loading样式4</button>
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