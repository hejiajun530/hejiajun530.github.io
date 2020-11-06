<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
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
}
</style>
