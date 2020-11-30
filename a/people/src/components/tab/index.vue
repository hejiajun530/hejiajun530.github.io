<template>
  <div class="tab">
    <div class="tab-head">
      <div class="tab-head-list flex-start-center">
        <div
          class="tab-head-list-item flex-center-center"
          :class="tabIndex == index ? 'active' : ''"
          v-for="(item, index) in tablist"
          :key="index"
          @click="handleClickTab(index)"
        >{{item}}</div>
      </div>
    </div>
    <div class="tab-content">
      <div
        class="tab-content-list flex-center-center"
        :style="'left:' +(-tabIndex * 600)+ 'px;'"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          class="tab-content-list-item"
          v-for="(item, index) in tablist"
          :key="index"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tablist: {
      type: Array,
      default: function() {
        return ['tab1', 'tab2'];
      }
    }
  },
  data() {
    return {
      tabIndex: 0,
      // 手指初始坐标
      startX: 0,
      // 手指移动坐标
      moveX: 0
    };
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 切换tab栏
    handleClickTab(index) {
      var _self = this;
      _self.tabIndex = index;
    },
    // 移动端 手指  初始
    handleTouchStart(e) {
      var _self = this;
      _self.startX = e.targetTouches[0].clientX;
    },
    // 移动端 手指  移动
    handleTouchMove(e) {
      var _self = this;
      var content = document.querySelector('.tab-content-list');
      _self.moveX = e.targetTouches[0].clientX - _self.startX;
      content.style.transition = 'none';
      content.style.transform = 'translateX(' + _self.moveX + 'px)';
    },
    // 移动端 手指  结束
    handleTouchEnd(e) {
      var _self = this;
      var content = document.querySelector('.tab-content-list');
      content.style.transition = '0.5s';
      content.style.transform = 'translateX(0px)';
      var idx = 0;
      if (Math.abs(_self.moveX) > 50) {
        if (_self.moveX > 0) {
          idx = _self.tabIndex - 1;
          if (idx >= 0 && idx <= _self.tablist.length - 1) {
            _self.tabIndex = idx;
          }
        } else {
          idx = _self.tabIndex + 1;
          if (idx >= 0 && idx <= _self.tablist.length - 1) {
            _self.tabIndex = idx;
          }
        }
      }
      // 初始化坐标
      _self.startX = 0;
      _self.moveX = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.tab {
  width: 600px;
  height: 300px;
}
.tab-head {
  width: 100%;
  height: 50px;
  overflow: scroll;
  /* 火狐滚动条隐藏 */
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* 谷歌滚动条隐藏 */
.tab-head::-webkit-scrollbar {
  display: none;
}
.tab-head-list {
  height: 100%;
}
.tab-head-list-item {
  position: relative;
  width: 100px;
  height: 100%;
  transition: 0.5s;
  box-sizing: border-box;
  cursor: pointer;
}
.tab-head-list-item.active {
  color: #ff0000;
}
.tab-head-list-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #ff0000;
  animation: border 0.5s ease-out forwards;
  transform: translate(-50%, 0);
  z-index: 3;
}
@keyframes border {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.tab-content {
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
}
.tab-content-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 100%;
  transition: 0.5s;
}
.tab-content-list-item {
  float: left;
  width: 20%;
  height: 100%;
}
.flex-start-center {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.flex-center-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>