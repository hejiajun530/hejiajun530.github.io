<template>
  <div class="error">
    <h1>坏了，页面找不到了~</h1>
    <img
      src="../assets/img/error.jpg"
      alt="404"
    >
    <div
      class="pointSB toHome"
      @click="$router.push('/')"
    >跳转到首页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.error {
  height: calc(100vh - 6.875rem);
  background: #3e3a39;
  color: #ffffff;
  h1 {
    padding: 20px 0;
    background: #666666;
  }
  .toHome {
    display: block;
    width: 120px;
    padding: 15px 0;
    background: #000000;
    border-radius: 10px;
    margin: 0 auto;
    &:hover {
      color: orangered;
      text-decoration: underline;
    }
  }
}
</style>