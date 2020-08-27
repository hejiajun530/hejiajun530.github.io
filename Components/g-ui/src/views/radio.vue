<template>
  <div class="home-alert">
    <!-- 单选框 -->
    <g-radio
      :radioGroup="radioGroup"
      @g-radioIndex="handleGetRadioIndex"
    ></g-radio>
  </div>
</template>
<script>
import radio from "@/components/radio/index";
export default {
  data() {
    return {
      radioGroup: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"]
    };
  },
  components: {
    "g-radio": radio
  },
  methods: {
    // 获取单选按钮的值
    handleGetRadioIndex(value) {
      var _self = this;
      console.log(value, _self.radioGroup[value]);
    }
  }
};
</script>