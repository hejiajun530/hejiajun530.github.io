<template>
  <div class="swiper clearfix">
    <div
      class="swiper-box"
      :class="' swiper-box'+num"
    >
      <div
        class="swiper-box-imgs"
        :class="' swiper-box-imgs'+num"
        style="transform: translate(-12.5%, 0);"
        v-for="(item, index) in imglist"
        :key="index"
      >
        <img :src="item">
      </div>
      <div
        class="prev"
        @click="handlePrev"
      >
        <img src="./prev.png">
      </div>
      <div
        class="next"
        @click="handleNext"
      >
        <img src="./next.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["imglist", "configs"],
  data() {
    return {
      rotateFlag: true,
      timer: "",
      num: Math.random()
        .toString()
        .substr(2, 10)
    };
  },
  mounted() {
    var _self = this;
    _self.assign();
  },
  methods: {
    //点击左箭头 去旋转
    handlePrev() {
      var _self = this;
      if (_self.rotateFlag) {
        //如果阀门是打开的 才执行动画
        _self.rotateFlag = false; //进来之后就立即把阀门关闭
        _self.configs.push(_self.configs.shift());
        _self.assign();
      }
    },
    //点击右箭头 去旋转
    handleNext() {
      var _self = this;
      if (_self.rotateFlag) {
        _self.configs.unshift(_self.configs.pop());
        _self.assign();
        _self.rotateFlag = false;
      }
    },
    assign() {
      var _self = this;
      var slide = document.querySelector(".swiper-box" + _self.num);
      var lis = document.querySelectorAll(".swiper-box-imgs" + _self.num);
      for (var i = 0; i < lis.length; i++) {
        //lis[i]
        _self.animate(lis[i], _self.configs[i], function() {
          //动画执行完成后 才执行这个回调函数
          _self.rotateFlag = true; //动画执行完了 重新打开阀门
        }); //把每一个配置设置给每一个li
      }
    },
    animate(obj, config, fn) {
      var _self = this;
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        var flag = true;
        var target;
        var leader;
        var step;
        for (var k in config) {
          if (k === "opacity") {
            target = config[k] * 100;
            leader = _self.getStyle(obj, k) * 100;
            step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader / 100;
          } else if (k === "zIndex") {
            obj.style.zIndex = config[k];
          } else if (k === "transform") {
            obj.style.transform = config[k];
          } else {
            target = config[k];
            leader = parseInt(_self.getStyle(obj, k)) || 0;
            step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + "px";
          }
          if (leader !== target) {
            flag = false;
          }
        }
        if (flag) {
          clearInterval(obj.timer);
          if (fn) {
            fn();
          }
        }
      }, 15);
    },
    getStyle(obj, attr) {
      var _self = this;
      if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
      } else {
        return obj.currentStyle[attr];
      }
    }
  }
};
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  /* margin: 100px auto; */
  overflow: hidden;
}
.swiper-box {
  height: 100%;
  position: relative;
  perspective: 2000px;
}
.swiper-box-imgs {
  position: absolute;
  left: 200px;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  /* transform: translate(-12.5%, 0); */
}
.swiper-box-imgs img {
  width: 100%;
  height: 100%;
}
.prev,
.next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 112px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: pointer;
}
.prev {
  left: 15px;
}
.next {
  right: 15px;
}
.prev img,
.next img {
  width: 100%;
}
</style>