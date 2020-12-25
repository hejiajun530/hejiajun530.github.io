<template>
  <div class="home-alert">
    <!-- 日历 -->
    <g-rili
      class="home-rili"
      :oneSelect="false"
      @g-riliStartTime="handleGetTime"
    ></g-rili>
    <g-rili
      class="home-rili"
      @g-riliStartTime="handleGetTime"
    ></g-rili>
    <g-dateTime @g-dateTime="handleClickChooseTime">{{time ? time : '请选择时间'}}</g-dateTime>
  </div>
</template>
<script>
import dateTime from "@/components/dateTime";
import rili from "@/components/rili/index";
export default {
  data() {
    return {
      time: ""
    };
  },
  components: {
    "g-rili": rili,
    "g-dateTime": dateTime
  },
  methods: {
    // 获取日历的 日期
    handleGetTime(startTime, endTime) {
      var _self = this;
      console.log(startTime, endTime);
    },
    // 选择时间
    handleClickChooseTime(date) {
      const _self = this;
      _self.$set(_self.model, "time", date);
    }
  }
};
</script>
<style scoped>
.home-rili {
  margin: 50px auto;
}
</style>