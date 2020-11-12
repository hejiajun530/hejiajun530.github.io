<template>
  <div id="app">
    <router-view />
    <div class="tyq-mask"></div>
    <div class="tyq d-flex flex-column jc-center ai-center">
      <div class="tyq-header">@TYQ121</div>
      <div class="tyq-box">个人学习分享网站，大家喜欢的话可以分享给朋友~</div>
      <div class="tyq-foot">1962679391@qq.com</div>
    </div>
    <div
      v-if="backFlag"
      class="tyq-back d-flex jc-center ai-center pointSB"
      ref="tyqBack"
      @mousedown="handleMouseDownBack"
      @mousemove="handleMouseMoveBack"
      @mouseup="handleMouseUpBack"
      @click="handleClickTop"
    >Back</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      moveFlag: false,
      offsetX: 0,
      offsetY: 0,
      backFlag: false
    };
  },
  mounted() {
    var _self = this;
    document.oncontextmenu = function() {
      return false;
    };
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
        // _self.setHtmlFz();
      }
    }
    // 因为监听是针对window的，所以增加监听后每个页面都会监听，只对某个页面进行监听的话需要在destroyed中将监听移除
    window.addEventListener('scroll', function() {
      // 页面往下滚动超过 xx 就显示返回顶部盒子
      if (window.pageYOffset > 20) {
        _self.backFlag = true;
      } else {
        _self.backFlag = false;
      }
    });
  },
  methods: {
    // 移动端js控制rem，不适合pc端
    setHtmlFz() {
      // 基础值
      var baseVal = 16; // 设计稿的宽度
      var desPage = 375; // 要适配的屏幕的宽度
      var width = document.querySelector('html').offsetWidth; // 基础值*要适配的屏幕的宽度/设计稿的宽度
      var fz = (baseVal * width) / desPage; // 设置到html标签中
      document.querySelector('html').style.fontSize = fz + 'px';
    },
    // 鼠标按下事件
    handleMouseDownBack(e) {
      var _self = this;
      _self.offsetX = e.offsetX; // e.offsetX 鼠标到div盒子的左侧的距离
      _self.offsetY = e.offsetY; // e.offsetX 鼠标到div盒子的上侧的距离
      // console.log(_self.offsetX, _self.offsetY);
      _self.moveFlag = true;
    },
    // back 自由移动
    handleMouseMoveBack(e) {
      var _self = this;
      if (_self.moveFlag) {
        _self.$refs.tyqBack.style.left = e.clientX - _self.offsetX + 'px';
        _self.$refs.tyqBack.style.top = e.clientY - _self.offsetY + 'px';
      }
    },
    // back 自由移动
    handleMouseUpBack(e) {
      var _self = this;
      // console.log(e);
      _self.moveFlag = false;
    },
    // 回到顶部
    handleClickTop() {
      var _self = this;
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
  }
};
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  html {
    font-size: 8px;
  }
  .w {
    width: 100% !important;
    margin: 0 auto;
  }
  .home-box {
    #canvasTime {
      width: 122px !important;
      height: 15px !important;
    }
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
  .tyq-header {
    font-size: 1.25rem;
  }
  .tyq div {
    padding: 0.1875rem 0;
  }
}
.tyq-back {
  position: fixed;
  bottom: 50px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 1);
  color: #ffffff;
  z-index: 9999;
}
</style>
