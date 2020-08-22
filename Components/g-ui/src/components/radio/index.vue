<template>
  <div class="radio">
    <div
      class="radio-item"
      :class="index == radioIndex ? 'active' : ''"
      v-for="(item, index) in radioGroup"
      :key="index"
      @click="handleClickChooseRadio(index)"
    >
      <div class="radio-item-img"><img
          :class="index == radioIndex ? 'active' : ''"
          :src="index == radioIndex ? radioImg.radioActive : radioImg.radio"
        ></div>
      <div class="radio-item-text">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["radioGroup"],
  data() {
    return {
      radioIndex: 0,
      radioImg: {
        radio: require("./radio.png"),
        radioActive: require("./radio-active.png")
      }
    };
  },
  methods: {
    // 选择单选按钮
    handleClickChooseRadio(index) {
      var _self = this;
      _self.radioIndex = index;
      _self.$emit("g-radioIndex", _self.radioIndex);
    }
  }
};
</script>
<style scoped>
* {
  display: inline-block;
}
.radio {
  display: flex;
  justify-content: flex-start;
}
.radio-item.active {
  color: #1296db;
}
.radio-item,
.radio-item-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
}
.radio-item-img,
.radio-item-img img {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.radio-item-img img {
  border-radius: 50%;
  border: 1px solid #666666;
}
.radio-item-img img.active {
  border: 1px solid #1296db;
}
</style>