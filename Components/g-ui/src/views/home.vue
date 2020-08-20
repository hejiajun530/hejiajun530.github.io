<template>
  <div>
    <h1>首页</h1>
    <button @click="handleClickShow">alert</button>
    <!-- <g-alert></g-alert> -->
  </div>
</template>

<script>
import alert from "../components/alert";
export default {
  data() {
    return {
      gAlertShow: false
    };
  },
  components: {
    "g-alert": alert
  },
  methods: {
    // 显示alert
    handleClickShow() {
      var _self = this;
      _self
        .$gAlert({
          title: "标题",
          msg: "这是一段弹出框内容!",
          btn: {
            confirmVal: "确1定",
            cancelVal: "取1消"
          }
        })
        .then(() => {
          console.log("ok");
        })
        .catch(() => {
          console.log("close");
        });
      // console.log(test);
    }
  }
};
</script>

<style lang="stylus" scoped></style>