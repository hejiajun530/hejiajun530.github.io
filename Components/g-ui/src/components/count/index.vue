<template>
  <div class="count-box">
    <button @click="handleClickSubDay">
      <img src="./减.png">
    </button>
    <!-- disabled -->
    <input
      type="text"
      v-model="xuzhuDay"
    >
    <button @click="handleClickAddDay">
      <img src="./加.png">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xuzhuDay: 1
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 续住天数  增加
    handleClickAddDay() {
      var _self = this;
      _self.xuzhuDay++;
      _self.$emit("g-countNum", _self.xuzhuDay);
    },
    // 续住天数  减少
    handleClickSubDay() {
      var _self = this;
      _self.xuzhuDay = _self.xuzhuDay <= 1 ? 1 : --_self.xuzhuDay;
      _self.$emit("g-countNum", _self.xuzhuDay);
    }
  }
};
</script>
<style scoped>
.count-box {
  display: flex;
  justify-content: space-between;
  width: 202px;
  height: 52px;
  background: url("./矩形.png");
  background-size: 100% 100%;
  margin: 0 auto;
}
.count-box input {
  width: 52px;
  height: 48px;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 20px;
  color: #fff;
  vertical-align: top;
  outline: none;
}
.count-box button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: rgba(255, 255, 255, 0.12);
  margin: 0 !important;
  padding: 0 !important;
  outline: none;
}
.count-box button img {
  width: 50%;
}
</style>