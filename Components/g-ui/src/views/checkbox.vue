<template>
  <div class="home-alert">
    <!-- 多选框g-checkbox -->
    <g-checkbox
      :checkboxGroup="checkboxGroup"
      id="domain"
      @g-checkboxIndex="handleGetCheckboxIndex"
    ></g-checkbox>
  </div>
</template>
<script>
import checkbox from "@/components/checkbox/index";
export default {
  data() {
    return {
      checkboxGroup: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"]
    };
  },
  components: {
    "g-checkbox": checkbox
  },
  methods: {
    // 获取多选按钮的值
    handleGetCheckboxIndex(value) {
      var _self = this;
      console.log(value);
    }
  }
};
</script>