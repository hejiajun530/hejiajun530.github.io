<template>
  <div class="count">
    <!-- 计数器 -->
    <g-count @g-countNum="handleGetCountNum"></g-count>
  </div>
</template>
<script>
import count from "@/components/count/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-count": count
  },
  methods: {
    // 获取计数器的 值
    handleGetCountNum(num) {
      var _self = this;
      console.log(num, "获取计数器的值");
    }
  }
};
</script>
<style scoped>
.count {
  display: inline-block;
  background: #dddddd;
}
</style>