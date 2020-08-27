<template>
  <div class="home-alert">
    <!-- message 消息提示 -->
    <button @click="handleClickMessageShow">message</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 显示message
    handleClickMessageShow() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个消息弹出框内容!",
        duration: 2000,
        type: "success"
      });
    }
  }
};
</script>