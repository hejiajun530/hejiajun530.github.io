<template>
  <div class="home-alert">
    <!-- dateSelect 日期选择器 -->
    <g-dateSelect @g-dateSelectTime="handleGetDateSelectTime"></g-dateSelect>
  </div>
</template>
<script>
import dateSelect from "@/components/dateSelect/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-dateSelect": dateSelect
  },
  methods: {
    // 获取日期选择器的 日期
    handleGetDateSelectTime(startTime, endTime) {
      var _self = this;
      console.log(startTime, endTime);
    }
  }
};
</script>