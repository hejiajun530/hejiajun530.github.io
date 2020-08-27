<template>
  <div class="home-alert">
    <!-- 气泡提示 -->
    <g-pop
      ref="pop"
      title="标题1"
      content="内容1"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
    <g-pop
      ref="pop"
      title="标题2"
      content="内容2"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
    <g-pop
      ref="pop"
      title="标题3"
      content="内容3"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
  </div>
</template>
<script>
import pop from "@/components/pop/index";
export default {
  data() {
    return {};
  },
  components: {
    "g-pop": pop
  },
  methods: {
    // 显示pop
    handleClickPopShow(e) {
      var _self = this;
      _self.$refs.pop.handleClickPopTop(e);
    }
  }
};
</script>