<template>
  <div class="home-alert">
    <!-- message 消息提示 -->
    <button @click="handleClickMessageShow1">成功</button>
    <button @click="handleClickMessageShow2">警告</button>
    <button @click="handleClickMessageShow3">信息</button>
    <button @click="handleClickMessageShow4">错误</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 显示message
    handleClickMessageShow1() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个成功消息弹出框内容!",
        duration: 2000,
        type: "success"
      });
    },
    // 显示message
    handleClickMessageShow2() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个警告消息弹出框内容!",
        duration: 5000,
        type: "warn"
      });
    },
    // 显示message
    handleClickMessageShow3() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个信息消息弹出框内容!",
        type: "info"
      });
    },
    // 显示message
    handleClickMessageShow4() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个错误消息弹出框内容!",
        duration: 1000,
        type: "error"
      });
    }
  }
};
</script>

<style scoped>
.home-alert {
  padding: 50px 0 0 0;
}
</style>