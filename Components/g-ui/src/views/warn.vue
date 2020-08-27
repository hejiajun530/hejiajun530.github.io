<template>
  <div class="home-alert">
    <!-- warn 提示 -->
    <g-warn
      type="success"
      title="成功提示"
    ></g-warn>
    <g-warn
      type="warn"
      title="警告提示"
    ></g-warn>
    <g-warn
      type="info"
      title="信息提示"
    ></g-warn>
    <g-warn
      type="error"
      title="错误提示"
    ></g-warn>
  </div>
</template>
<script>
import warn from "@/components/warn/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-warn": warn
  },
  methods: {}
};
</script>