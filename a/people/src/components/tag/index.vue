<template>
  <div class="tag d-flex jc-start ai-center">
    <div
      class="tag-item d-flex jc-start ai-center"
      v-for="item in taglist"
      :key="item.id"
    >
      <i class="iconfont icon-shengdanbiaoqian"></i>
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['taglist'],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.tag {
  .tag-item {
    min-width: 3.125rem;
    height: 1.5rem;
    background: paleturquoise;
    margin: 0 0.3125rem 0 0;
    padding: 0 0.3125rem 0 0.0625rem;
    line-height: 1.5rem;
  }
  .iconfont {
    color: #ff6b5b;
    margin: 0 0.125rem 0 0;
  }
}
</style>