<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
  // 取消高亮
  -webkit-tap-highlight-color: transparent;
  // 禁止选择文字
  -moz-user-select: none !important; /*火狐*/
  -webkit-user-select: none !important; /*webkit浏览器*/
  -ms-user-select: none !important; /*IE10*/
  -khtml-user-select: none !important; /*早期浏览器*/
  user-select: none !important;
}
</style>
