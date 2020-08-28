<template>
  <div class="home-alert">
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow">loading</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 显示loading
    handleClickLoadShow() {
      var _self = this;
      _self.$gLoad(true, 4);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 5000);
    }
  }
};
</script>