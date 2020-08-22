<template>
  <div class="renwchoose-right-add">
    <button @click="handleClickSubDay">
      <img src="./减.png">
    </button>
    <input
      type="text"
      v-model="xuzhuDay"
      disabled
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
.renwchoose-right-add {
  display: flex;
  justify-content: space-between;
  width: 402px;
  height: 102px;
  background: url("./矩形.png");
  margin: 0 auto;
}
.renwchoose-right-add input {
  width: 202px;
  height: 98px;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 40px;
  color: #fff;
  vertical-align: top;
  outline: none;
}
.renwchoose-right-add button {
  width: 100px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-color: rgba(255, 255, 255, 0.12);
  outline: none;
}
</style>