<template>
  <div
    class="pop-mask"
    v-clickOutSide="handleClickHide"
  >
    <div class="pop-box">
      <div :class="'pop' + num + ' pop'">
        <div class="pop-title">{{title}}</div>
        <div class="pop-content">{{content}}</div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { clickOutSide } from "../../commons/directive";
export default {
  props: ["title", "content"],
  data() {
    return {
      popShow: false,
      num: Math.random()
        .toString()
        .substr(2, 10)
    };
  },
  directives: {
    clickOutSide
  },
  methods: {
    handleClickHide() {
      var _self = this;
      var pop = document.querySelector(`.pop${_self.num}`);
      pop.style.display = "none";
      _self.popShow = false;
    },
    // 上方显示
    handleClickPopTop(e) {
      var _self = this;
      let className =
        e.target.previousElementSibling.firstElementChild.classList[0];
      // console.log(
      //   e.target.previousElementSibling.firstElementChild.classList[0]
      // );
      // console.log(e);
      var pop = document.querySelector(`.${className}`);
      if (
        pop.style.display == "none" ||
        pop.style.display == "" ||
        pop.style.display == null
      ) {
        pop.style.display = "block";
      } else {
        pop.style.display = "none";
      }
      _self.$nextTick(function() {
        let x = e.target.offsetLeft + e.target.offsetWidth / 2;
        let y = e.target.offsetTop;
        pop.style.top = y - 10 + "px";
        pop.style.left = x + "px";
      });
    }
  }
};
</script>
<style scoped>
.pop-mask {
  display: inline-block;
}
.pop-box {
  width: 100%;
}
.pop {
  display: none;
  position: absolute;
  width: 200px;
  padding: 15px;
  background-color: #ffffff;
  transform: translate(-50%, -100%);
  border-radius: 15px;
  text-align: left;
  z-index: 900;
}
.pop::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  border: 10px solid;
  border-color: #ffffff transparent transparent transparent;
  transform: translate(-50%, 100%);
  z-index: 999;
}
.pop-title {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>