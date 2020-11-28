<template>
  <div
    id="app"
    @contextmenu.prevent="function() {return false}"
  >
    <router-view />
    <div
      class="tyq-bkmusic"
      @click="handleClickPlayMusic('http://www.tyq121.top/upload/%E5%B0%8F%E6%83%85%E6%AD%8C.m4a')"
    >背景音乐</div>
    <div class="tyq-mask"></div>
    <div class="tyq d-flex flex-column jc-center ai-center">
      <div
        class="tyq-header pointSB"
        @click="$router.push('/')"
      >@TYQ121. 湘ICP备2020021274号-1</div>
      <div class="tyq-box">个人学习分享网站，大家喜欢的话可以分享给朋友~</div>
      <div class="tyq-foot">1962679391@qq.com</div>
    </div>
    <!-- v-if="backFlag" -->
    <div
      class="tyq-back d-flex jc-center ai-center pointSB"
      ref="tyqBack"
      @mousedown="handleMouseDownBack"
      @mousemove="handleMouseMoveBack"
      @mouseup="handleMouseUpBack"
      @touchstart="handleTouchStartBack"
      @touchmove="handleTouchMoveBack"
      @touchend="handleTouchEndBack"
    >Back</div>
    <!-- @click="handleClickTop" -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveFlag: false,
      offsetX: 0,
      offsetY: 0,
      backFlag: true,
      tyqBackLeft: '',
      phone: false,
      mp3: null
    };
  },
  mounted() {
    var _self = this;
    // window.document.documentElement.setAttribute( "data-theme", 'light' );
    document.oncontextmenu = function(e) {
      e.preventDefault();
      return false;
    };
    _self.$nextTick(() => {
      _self.tyqBackLeft = _self.$refs.tyqBack.offsetLeft;
      console.log(_self.$refs.tyqBack.offsetLeft);
    });
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    );
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) != -1) {
        // phoneFlag = true;
        console.log('移动端');
        _self.phone = true;
      }
    }
    // 因为监听是针对window的，所以增加监听后每个页面都会监听，只对某个页面进行监听的话需要在destroyed中将监听移除
    // window.addEventListener('scroll', function() {
    //   // 页面往下滚动超过 xx 就显示返回顶部盒子
    //   if (window.pageYOffset > 20) {
    //     _self.backFlag = true;
    //   } else {
    //     _self.backFlag = false;
    //   }
    // });
  },
  methods: {
    // 播放背景音乐
    handleClickPlayMusic(src) {
      const _self = this;
      // 音频播放
      if (_self.mp3 != null) {
        _self.mp3 = null;
      }
      _self.mp3 = new Audio(src); // 创建音频对象
      console.log(_self.mp3);
      _self.mp3.load(); // 重新加载
      _self.mp3.play(); // 播放
    },
    // 移动端js控制rem，不适合pc端
    // setHtmlFz() {
    //   // 基础值
    //   var baseVal = 16; // 设计稿的宽度
    //   var desPage = 375; // 要适配的屏幕的宽度
    //   var width = document.querySelector('html').offsetWidth; // 基础值*要适配的屏幕的宽度/设计稿的宽度
    //   var fz = (baseVal * width) / desPage; // 设置到html标签中
    //   document.querySelector('html').style.fontSize = fz + 'px';
    // },
    // 鼠标按下事件 back 自由移动
    handleMouseDownBack(e) {
      var _self = this;
      if (!_self.phone) {
        _self.offsetX = e.offsetX; // e.offsetX 鼠标到div盒子的左侧的距离
        _self.offsetY = e.offsetY; // e.offsetX 鼠标到div盒子的上侧的距离
        // console.log(_self.offsetX, _self.offsetY);
        _self.moveFlag = true;
        console.log('pc-mouseDown');
      }
    },
    // 鼠标移动事件 back 自由移动
    handleMouseMoveBack(e) {
      var _self = this;
      let moveX = e.clientX - _self.offsetX;
      let moveY = e.clientY - _self.offsetY;
      if (_self.moveFlag && !_self.phone) {
        // _self.backFlag = false;
        if (moveX < 0) {
          moveX = 0;
        } else if (moveX >= document.body.offsetWidth - e.target.offsetWidth) {
          moveX = document.body.offsetWidth - e.target.offsetWidth;
        }
        if (moveY < 0) {
          moveY = 0;
        } else if (
          moveY >=
          document.body.offsetHeight - e.target.clientHeight
        ) {
          moveY = document.body.offsetHeight - e.target.clientHeight;
        }
        _self.$refs.tyqBack.style.left = moveX + 'px';
        _self.$refs.tyqBack.style.top = moveY + 'px';
        console.log('pc-mouseMove');
      }
    },
    // 鼠标弹起事件 back 自由移动
    handleMouseUpBack(e) {
      var _self = this;
      if (!_self.phone) {
        // console.log(e);
        _self.moveFlag = false;
        _self.handleClickTop();
        _self.backFlag = true;
        setTimeout(() => {
          _self.handleIsRight();
        }, 500);
        console.log('pc-mouseUp');
      }
    },
    // 手指按下事件 back 自由移动
    handleTouchStartBack(e) {
      var _self = this;
      console.log('phone-touchStart');
    },
    // 手指移动事件 back 自由移动
    handleTouchMoveBack(e) {
      var _self = this;
      e.preventDefault();
      _self.backFlag = false;
      let moveX = e.targetTouches[0].clientX - e.target.clientWidth / 2;
      let moveY = e.targetTouches[0].clientY - e.target.clientHeight / 2;
      if (moveX < 0) {
        moveX = 0;
      } else if (moveX >= document.body.offsetWidth - e.target.clientWidth) {
        moveX = document.body.offsetWidth - e.target.clientWidth;
      }
      if (moveY < 0) {
        moveY = 0;
      } else if (moveY >= document.body.offsetHeight - e.target.clientWidth) {
        moveY = document.body.offsetHeight - e.target.clientWidth;
      }
      _self.$refs.tyqBack.style.left = moveX + 'px';
      _self.$refs.tyqBack.style.top = moveY + 'px';
      console.log('phone-touchMove');
    },
    // 手指弹起事件 back 自由移动
    handleTouchEndBack(e) {
      var _self = this;
      _self.handleClickTop();
      _self.backFlag = true;
      setTimeout(() => {
        _self.handleIsRight();
      }, 500);
      console.log('phone-touchEnd');
    },
    // 判断back盒子是否在右侧，如果不在，移动到右侧
    handleIsRight() {
      var _self = this;
      if (_self.$refs.tyqBack.style.left != _self.tyqBackLeft) {
        _self.animate(_self.$refs.tyqBack, _self.tyqBackLeft);
        console.log('handleIsRight');
      }
    },
    // 回到顶部
    handleClickTop() {
      var _self = this;
      if (_self.backFlag) {
        let timer = null;
        var i = window.pageYOffset;
        timer = setInterval(function() {
          if (window.pageYOffset > 0) {
            window.scrollTo(0, i);
          } else {
            clearInterval(timer);
            timer = null;
            // console.log('回到顶部');
          }
          i -= 20;
        }, 10);
      }
    },
    // 动画函数
    animate(obj, target, fn) {
      var _self = this;
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == Math.abs(target)) {
          clearInterval(obj.timer);
          fn && fn();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
      }, 15);
    }
  }
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100vh;
  background: #fffbf0;
  // cursor: url('~@/assets/logo.png'), auto !important;
}
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  // 取消高亮
  -webkit-tap-highlight-color: transparent;
  // 禁止选择文字
  -moz-user-select: none !important; /*火狐*/
  -webkit-user-select: none !important; /*webkit浏览器*/
  -ms-user-select: none !important; /*IE10*/
  -khtml-user-select: none !important; /*早期浏览器*/
  user-select: none !important;
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
  min-height: 100vh;
  @include font_color('font_color1');
  @include background_color('background_color1');
  @include border_color('border_color1');
}
@media screen and (max-width: 768px) {
  html {
    font-size: 8px;
  }
  .w {
    width: 100% !important;
    margin: 0 auto;
  }
  .home-head {
    #canvasTime {
      width: 142px !important;
      height: 20px !important;
    }
    .home-head-weather-bottom-weather::after {
      height: 60% !important;
    }
  }
  .home-menu-bk,
  .home-menu-list-item {
    width: 5rem !important;
  }
  .tyq-back {
    width: 40px !important;
    height: 40px !important;
  }
}
@media screen and (max-width: 1300px) and (min-width: 768px) {
  html {
    font-size: 14px;
  }
}
.tyq-mask {
  height: 6.875rem;
}
.tyq {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6.875rem;
  background: dimgrey;
  font-size: 0.8rem;
  color: #ffffff;
  z-index: 9999;
  .tyq-header {
    font-size: 1.25rem;
    &:hover {
      color: #ff0000;
      text-decoration: underline;
    }
  }
  div {
    padding: 0.225rem 0;
  }
}
.tyq-bkmusic {
  position: fixed;
  top: 50%;
  left: 10px;
  width: 50px;
  height: 50px;
  background: #ff0000;
}
.tyq-back {
  position: fixed;
  bottom: 3.125rem;
  right: 1.875rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 1);
  color: #ffffff;
  z-index: 9999;
}
</style>
