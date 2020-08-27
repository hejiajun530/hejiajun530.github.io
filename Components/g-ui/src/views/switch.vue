<template>
  <div class="home-alert">
    <!-- switch 开关组件 -->
    <g-switch @g-switchFlag="handleGetSwitchFlag"></g-switch>
  </div>
</template>
<script>
import gswitch from "@/components/switch/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-switch": gswitch
  },
  methods: {
    // 获取switch开关的值
    handleGetSwitchFlag(value) {
      var _self = this;
      console.log(value);
    }
  }
};
</script>