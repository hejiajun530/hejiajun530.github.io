<template>
  <div class="home-alert">
    <!-- 星级评分
    type 0 可以选择 1 只用于显示，不可修改 -->
    <g-star
      :type="0"
      @g-starIndex="handleGetStarIndex"
    ></g-star>
    <g-star
      :type="1"
      :showIndex="3.2"
    ></g-star>
  </div>
</template>
<script>
import star from "@/components/star/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-star": star
  },
  methods: {
    // 获取星级评分的 值
    handleGetStarIndex(num) {
      var _self = this;
      console.log(num, "获取星级评分的值");
    }
  }
};
</script>