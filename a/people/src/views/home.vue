<template>
  <div class="home">
    <div class="home-head"></div>
    <div class="home-menu">
      <div class="home-menu-list d-flex jc-start ai-center w">
        <div
          class="home-menu-list-item text-center pointSB text-ellipsis"
          :class="$route.path == item.url ? 'active' : ''"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleClickMenu(index, item.url, $event)"
          @mouseenter="handleMouseEnterAnimate(index, $event)"
          @mouseleave="handleMouseLeaveAnimate(index, $event)"
        >{{item.name}}</div>
        <div
          class="home-menu-bk"
          ref="homeBk"
        ></div>
      </div>
    </div>
    <div class="home-box w">
      <!-- <div
        @click="$router.push('/login')"
        style="width: 200px;height: 30px;background: #E7753A;margin: 10px auto;line-height: 30px;color: #ffffff;"
      >登录</div>
      <div
        v-if="tyqUser && tyqToken"
        @click="test"
        style="height: 50px;background: #E7753A;"
      >已登录</div>
      <div
        v-else
        style="height: 50px;background: #E7753A;"
      >未登录</div> -->
      <canvas
        id="canvasTime"
        ref="canvasTime"
      >当前浏览器不支持canvas，请更换浏览器后再试</canvas>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins';
export default {
  mixins: [mixin],
  data() {
    return {
      menuList: [
        {
          name: '首页',
          url: '/home/index'
        },
        {
          name: '心情随笔',
          url: '/home/mood'
        },
        {
          name: '过往故事',
          url: '/home/story'
        },
        {
          name: '技术分享',
          url: '/home/share'
        },
        {
          name: 'Blog留言',
          url: '/home/liuyan'
        },
        {
          name: '关于我',
          url: '/home/about'
        },
        {
          name: 'Me',
          url: '/me'
        }
      ],
      // 数字 canvas  json数组
      digit: [
        [
          [0, 0, 1, 1, 1, 0, 0],
          [0, 1, 1, 0, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 0, 1, 1, 0],
          [0, 0, 1, 1, 1, 0, 0]
        ], //0
        [
          [0, 0, 0, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [1, 1, 1, 1, 1, 1, 1]
        ], //1
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ], //2
        [
          [1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //3
        [
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 0],
          [0, 1, 1, 0, 1, 1, 0],
          [1, 1, 0, 0, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 1]
        ], //4
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //5
        [
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //6
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0]
        ], //7
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //8
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 1, 1, 0, 0, 0, 0]
        ], //9
        [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ] //:
      ],
      colorArray: ['#fff'],
      canvasTimer: null
      // animationTime: null
    };
  },
  methods: {
    // 测试
    test() {
      var _self = this;
      _self.$http.get('/test').then(res => {
        console.log(res);
      });
    },
    // 选择菜单
    handleClickMenu(index, url, e) {
      var _self = this;
      _self.animate(_self.$refs.homeBk, _self.handleGetArrIndex(url));
      // 路由跳转
      _self.$router.push(url);
    },
    // 获取路由地址在数组的下标
    handleGetArrIndex(path) {
      var _self = this;
      return _self.menuList.map(item => item.url).indexOf(path);
    },
    // 鼠标移入事件 菜单
    handleMouseEnterAnimate(index, e) {
      var _self = this;
      _self.animate(_self.$refs.homeBk, index);
    },
    // 鼠标移出事件 菜单
    handleMouseLeaveAnimate(index, e) {
      var _self = this;
      _self.animate(
        _self.$refs.homeBk,
        _self.handleGetArrIndex(_self.$route.path)
      );
    },
    // canvas 时间
    handleCanvasTime() {
      var _self = this;
      const canvas = _self.$refs.canvasTime;
      let ctx = canvas.getContext('2d');
      // var H = 30,
      //   W = 200;
      canvas.width = canvas.scrollWidth;
      canvas.height = canvas.scrollHeight;
      var kx = canvas.width < 400 ? 9 : 13;
      /*获取时间数据*/
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      // console.log(temp);
      var data = [];
      //存储时间数字，由十位小时、个位小时、冒号、十位分钟、个位分钟、冒号、十位秒钟、个位秒钟这7个数字组成
      data.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
      // console.log(data);
      for (let i = 0; i <= temp.length; i++) {
        _self.handleOneNum(canvas, ctx, i, data[i], kx);
        // _self.addBalls(i, data[i]);
      }
    },
    // canvas 单个数字
    handleOneNum(canvas, ctx, index, num, kx) {
      var _self = this;
      var R = canvas.height / 20 - 1;
      for (let i = 0; i < _self.digit[num].length; i++) {
        for (let j = 0; j < _self.digit[num][i].length; j++) {
          if (_self.digit[num][i][j] == 1) {
            // 开始绘制
            ctx.beginPath();
            ctx.fillStyle =
              _self.colorArray[
                Math.floor(Math.random() * _self.colorArray.length)
              ];
            ctx.arc(
              kx * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
              i * 2 * (R + 1) + (R + 1),
              R < 1 ? 0.6 : 2.3,
              0,
              2 * Math.PI
            );
            // ctx.arc(
            //   13 * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
            //   i * 2 * (R + 1) + (R + 1),
            //   R < 1 ? 0.9 : R,
            //   0,
            //   2 * Math.PI
            // );
            // 结束绘制
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    },
    // 动画函数
    animate(obj, target, fn) {
      var _self = this;
      target = target * _self.$refs.homeBk.offsetWidth;
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
  },
  created() {
    var _self = this;
    console.log(_self.tyqUser, 'parent-tyqUser');
    console.log(_self.tyqToken, 'parent-tyqToken');
  },
  mounted() {
    var _self = this;
    // 右上角时间
    _self.handleCanvasTime();
    _self.canvasTimer = setInterval(function() {
      _self.handleCanvasTime();
    }, 1000);
    // bk位置 根据路由地址 改变
    let index = _self.handleGetArrIndex(_self.$route.path);
    _self.$refs.homeBk.style.left =
      index * _self.$refs.homeBk.offsetWidth + 'px';
  },
  beforeDestroy() {
    var _self = this;
    _self.canvasTimer = null;
    _self.handleCanvasTime = function() {};
  }
};
</script>

<style lang="scss" scoped>
.home-head {
  width: 100%;
  height: 12.5rem;
  background: url('../assets/img/homehead.jpg') no-repeat center 61%;
  background-size: 100%;
}
.home-menu {
  width: 100%;
  height: 3.125rem;
  background: #bfab86;
  .home-menu-list {
    position: relative;
    height: 100%;
    .home-menu-list-item {
      width: 5.3125rem;
      height: 100%;
      font-size: 1.125rem;
      color: #ffffff;
      line-height: 3.125rem;
      transition: all 0.3s;
      &:hover,
      &.active {
        color: #222222;
      }
      z-index: 1;
    }
    .home-menu-bk {
      position: absolute;
      top: 0;
      left: 0;
      width: 5.3125rem;
      height: 100%;
      background: #fffbf0;
      border-top: 0.1875rem solid #f77825;
      z-index: 0;
    }
  }
}
.home-box {
  #canvasTime {
    position: fixed;
    top: 0.625rem;
    right: 0.625rem;
    width: 405px;
    height: 60px;
  }
}
</style>