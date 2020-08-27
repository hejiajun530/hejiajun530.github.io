<template>
  <div class="home-alert">
    <!-- alert 弹出框 -->
    <button @click="handleClickAlertShow">alert</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    // 显示alert
    handleClickAlertShow() {
      var _self = this;
      _self.$gAlert({
        title: "标题",
        content: "这是一段弹出框内容!",
        btn: {
          confirmVal: "确1定",
          cancelVal: "取1消"
        },
        success: function(res) {
          console.log(res);
        }
      });
      // console.log(test);
    }
  }
};
</script>