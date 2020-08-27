<template>
  <div class="home-alert">
    <!-- 日历 -->
    <g-rili @g-riliStartTime="handleGetTime"></g-rili>
  </div>
</template>
<script>
import rili from "@/components/rili/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-rili": rili
  },
  methods: {
    // 获取日历的 日期
    handleGetTime(startTime, endTime) {
      var _self = this;
      console.log(startTime, endTime);
    }
  }
};
</script>