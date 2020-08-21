<template>
  <div class="pop-box">
    <!-- v-clickOutSide="handleClickHide" 加了这个，同时调用多个组件时就会无法显示 -->
    <div class="pop">
      <div class="pop-title">{{title}}</div>
      <div class="pop-content">{{content}}</div>
    </div>
  </div>
</template>
<script>
import { clickOutSide } from "../../commons/directive";
export default {
  // props: ["title", "content"],
  data() {
    return {
      // show: true
      title: "",
      content: ""
    };
  },
  directives: {
    clickOutSide
  },
  methods: {
    handleClickHide() {
      var pop = document.querySelector(".pop");
      // if (_self.show) {
      //   _self.show = false;
      // } else {
      //   _self.show = true;
      // }
      pop.style.display = "none";
    },
    // 上方显示
    handleClickPopTop(title, content, e) {
      var _self = this;
      _self.title = title;
      _self.content = content;
      // console.log(e);
      var pop = document.querySelector(".pop");
      // if (_self.show) {
      //   _self.show = false;
      // } else {
      //   _self.show = true;
      // }
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