<template>
  <div>
    <div
      class="star"
      v-if="type == 0"
    >
      <div
        class="star-box"
        @mouseleave="handleMouseLeaveStarNum"
      >
        <img
          :src="starIndex >= index ? starImg.starActive : starImg.star"
          v-for="index in 5"
          :key="index"
          @click="handleClickStarNum(index)"
          @mouseenter="handleMouseEnterStarNum(index)"
        >
      </div>
      <div class="star-text">{{starText[starIndex - 1]}}</div>
    </div>
    <div
      class="star"
      v-if="type == 1"
    >
      <div class="star-box">
        <img
          v-for="index in 5"
          :key="index"
          :src="index >= Math.ceil(showIndex) ? (Math.ceil(showIndex) == index ? starImg.starHelf : starImg.star) : starImg.starActive"
          :style="Math.ceil(showIndex) == index ? 'transform: scale(1.6);' : ''"
        >
        <!-- <block
          v-for="index in 5"
          :key="index"
        >
          <img
            src="./star.png"
            v-if="index > Math.ceil(showIndex)"
          >
          <img
            src="./star-helf.png"
            v-if="Math.ceil(showIndex) == index"
            style="transform: scale(1.6);"
          >
          <img
            src="./star-active.png"
            v-if="showIndex > index"
          >
        </block> -->
      </div>
      <div class="star-text">{{showIndex}}分</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "showIndex"],
  data() {
    return {
      starIndex: 0,
      // 点击选中后的值
      clickIndex: 0,
      // 中文评价
      starText: ["极差", "失望", "一般", "满意", "惊喜"],
      // 不可修改评分
      // showIndex: 4.2,
      starImg: {
        star: require("./star.png"),
        starActive: require("./star-active.png"),
        starHelf: require("./star-helf.png")
      }
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 选择几星
    handleClickStarNum(index) {
      var _self = this;
      // console.log(index);
      _self.starIndex = index;
      _self.clickIndex = _self.starIndex;
      _self.$emit("g-starIndex", _self.clickIndex);
    },
    // 鼠标移入事件
    handleMouseEnterStarNum(index) {
      var _self = this;
      _self.starIndex = index;
    },
    // 鼠标移出事件
    handleMouseLeaveStarNum() {
      var _self = this;
      _self.starIndex = _self.clickIndex;
    }
  }
};
</script>
<style scoped>
.star {
  width: 180px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.star-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
  height: 20px;
  /* overflow: hidden; */
}
.star-box img {
  width: 20px;
  height: 20px;
  transition: 1s;
  cursor: pointer;
}
.star-box img:hover {
  transform: scale(1.4);
}
.star-text {
  flex: 1;
  text-align: center;
}
</style>