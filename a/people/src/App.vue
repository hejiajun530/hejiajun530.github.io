<template>
  <div id="app">
    <router-view />
    <div class="tyq-mask"></div>
    <div class="tyq d-flex flex-column jc-center ai-center">
      <div class="tyq-header">@TYQ121</div>
      <div class="tyq-box">个人学习分享网站，大家喜欢的话可以分享给朋友~</div>
      <div class="tyq-foot">1962679391@qq.com</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.oncontextmenu = function() {
      return false;
    };
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  background: #fffbf0;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  // 取消高亮
  -webkit-tap-highlight-color: transparent;
  // 禁止选择文字
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
a {
  color: #ffffff;
  text-decoration: none;
}
input,
button {
  border: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
@media screen and (max-width: 768px) {
  html {
    font-size: 8px;
  }
  .w {
    width: 100% !important;
    margin: 0 auto;
  }
}
.tyq-mask {
  height: 6.875rem;
}
.tyq {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6.875rem;
  background: dimgrey;
  font-size: 0.8rem;
  color: #ffffff;
}
.tyq-header {
  font-size: 1.25rem;
}
.tyq div {
  padding: 0.1875rem 0;
}
</style>
