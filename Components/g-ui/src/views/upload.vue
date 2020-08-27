<template>
  <div class="home-alert">
    <!-- upload 上传图片
    type=0时 @g-uploadList 只有一个参数
    type=2时 @g-uploadList 有两个参数 -->
    <g-upload
      :type="0"
      :multiple="true"
      @g-uploadList="handleGetUploadList"
    ></g-upload>
    <g-upload
      :type="2"
      :multiple="false"
      @g-uploadList="handleGetUploadList"
    ></g-upload>
  </div>
</template>
<script>
import upload from "@/components/upload/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-upload": upload
  },
  methods: {
    // 获取upload的数组
    handleGetUploadList(list, name) {
      var _self = this;
      console.log(list, name);
    }
  }
};
</script>