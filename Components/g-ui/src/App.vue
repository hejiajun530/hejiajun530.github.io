<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./assets/normal.css";
import "./assets/iconfont.css";
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
}
</style>
