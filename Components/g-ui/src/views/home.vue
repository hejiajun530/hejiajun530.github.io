<template>
  <div class="home">
    <div class="home-left">
      <div class="home-left-item">弹出框</div>
    </div>
    <div class="home-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    var _self = this;
    // setInterval(function() {
    //   _self.startTime = new Date().getTime();
    // }, 1000);
  },
  methods: {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #dddddd;
}
.home-left {
  width: 250px;
  height: 100%;
  box-shadow: 0 0 5px #222222;
  overflow-y: auto;
}
.home-right {
  float: 1;
  height: 100%;
  padding: 50px 30px 30px 30px;
  box-sizing: border-box;
}
.banner {
  width: 600px;
  height: 300px;
}
button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
}
</style>