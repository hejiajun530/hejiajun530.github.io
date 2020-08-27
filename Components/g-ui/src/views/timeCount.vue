<template>
  <div class="home-alert">
    <!-- timeCount 倒计时
    nowTime 为空时，自动取现在的时间 -->
    <g-timeCount
      :nowTime="nowTime"
      :targetTime="targetTime"
    ></g-timeCount>
    <g-timeCount
      nowTime="2020-10-19 00:00:00"
      targetTime="2020-10-19 13:13:15"
    ></g-timeCount>
    <g-timeCount targetTime="2020-08-30 13:13:15"></g-timeCount>
  </div>
</template>
<script>
import timeCount from "@/components/timeCount/index";
export default {
  data() {
    return {
      nowTime: new Date(),
      targetTime: "2020-10-19 09:33:15"
    };
  },
  components: {
    "g-timeCount": timeCount
  },
  methods: {
    // 获取select下拉框组件选择的值 数组形式
    handleGetSelectValue(value) {
      var _self = this;
      console.log(value);
    }
  }
};
</script>