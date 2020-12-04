<template>
  <div class="home">
    <div class="home-head">
      <!-- 右上角时间 -->
      <timecanvs></timecanvs>
      <!-- 天气 -->
      <weather></weather>
    </div>
    <div class="home-menu-mask"></div>
    <!-- 菜单栏 -->
    <div
      class="home-menu"
      id="home-menu"
      ref="homeMenu"
    >
      <div class="home-menu-list d-flex jc-start ai-center w">
        <!-- 当跳转到详情页面时，自动 /home/index 盒子添加active类，$route.path.indexOf('/home/articledetail') != -1 && '/home/index' == item.url -->
        <div
          class="home-menu-list-item text-center pointSB text-ellipsis"
          :class="$route.path == item.url || $route.path.indexOf('/home/articledetail') != -1 && '/home/index' == item.url ? 'active' : ''"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleClickMenu(index, item.url, $event)"
          @mouseenter="handleMouseEnterAnimate(index, $event)"
          @mouseleave="handleMouseLeaveAnimate(index, $event)"
        >{{item.name}}</div>
        <!-- 移动的菜单栏背景 -->
        <div
          class="home-menu-bk positionTopLeft"
          ref="homeBk"
        ></div>
        <!-- 菜单栏右方的头像 -->
        <div class="home-menu-login positionTopRight pointSB">
          <img
            :src="tyqUser.avator"
            @click="loginFlag = !loginFlag"
            v-if="tyqUser && tyqUser.avator"
          >
          <img
            v-else
            src="../assets/logo.png"
            @click="loginFlag = !loginFlag"
          >
          <div
            class="home-menu-login-box"
            v-show="loginFlag"
          >
            <div
              class="home-menu-login-box-loginout text-ellipsis"
              @click="handleClickLoginOut"
            >退出登录</div>
            <div
              class="home-menu-login-box-loginout text-ellipsis"
              @click="handleChangeBk"
            >换肤</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-box w d-flex jc-between ai-start">
      <!-- 子页面 -->
      <div class="home-box-left flex-1">
        <keep-alive>
          <!-- 需要缓存 -->
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <!-- 不需要缓存的 -->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
      <!-- 头像/用户名/最新文章/友情链接 -->
      <div
        class="home-box-right"
        v-if="!phoneFlag"
      >
        <infoarticle></infoarticle>
      </div>
    </div>
  </div>
</template>

<script>
import timecanvs from './homeItem/timecanvs';
import infoarticle from './homeItem/infoarticle';
import weather from './homeItem/weather';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    timecanvs,
    weather,
    infoarticle
  },
  data() {
    return {
      loginFlag: false,
      // 菜单数组
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
          name: '搜索',
          url: '/home/search'
        },
        {
          name: 'Me',
          url: '/me'
        }
      ],
      menuTop: '',
      theme: 'light' // 主题色
      // animationTime: null
    };
  },
  watch: {
    $route(to, from) {
      const _self = this;
      _self.handleMouseLeaveAnimate();
    }
  },
  methods: {
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
      let num = _self.menuList.map(item => item.url).indexOf(path);
      return num <= 0 ? 0 : num;
    },
    // 鼠标移入事件 菜单
    handleMouseEnterAnimate(index, e) {
      var _self = this;
      _self.animate(_self.$refs.homeBk, index);
    },
    // 鼠标移出事件 菜单
    handleMouseLeaveAnimate(index, e) {
      var _self = this;
      // console.log(_self.handleGetArrIndex(_self.$route.path));
      _self.animate(
        _self.$refs.homeBk,
        _self.handleGetArrIndex(_self.$route.path)
      );
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
    },
    // 退出登录
    handleClickLoginOut() {
      var _self = this;
      localStorage.removeItem('tyqUser');
      // sessionStorage.removeItem('tyqUser');
      localStorage.removeItem('tyqToken');
      // sessionStorage.removeItem('tyqToken');
      _self.$router.push('/login');
    },
    // 菜单栏 固定与移动
    homeMenuScroll() {
      const _self = this;
      let homeMenu = document.querySelector('#home-menu');
      if (_self.$route.path.indexOf('/home') != -1) {
        // 页面往下滚动超过 xx 就显示返回顶部盒子
        if (window.pageYOffset > _self.menuTop) {
          homeMenu.style.position = 'fixed';
          homeMenu.style.top = '0px';
        } else {
          homeMenu.style.position = 'absolute';
          homeMenu.style.top = _self.menuTop + 'px';
        }
      }
    },
    // 换肤
    handleChangeBk() {
      const _self = this;
      _self.theme = _self.theme == 'light' ? 'dark' : 'light';
      // console.log(_self.theme);
      window.document.documentElement.setAttribute('data-theme', _self.theme);
    }
  },
  created() {
    var _self = this;
    // console.log(_self.tyqUser, 'parent-tyqUser');
    // console.log(_self.tyqToken, 'parent-tyqToken');
  },
  mounted() {
    var _self = this;
    // bk位置 根据路由地址 改变
    let index = _self.handleGetArrIndex(_self.$route.path);
    _self.$refs.homeBk.style.left =
      index * _self.$refs.homeBk.offsetWidth + 'px';
    // console.log(_self.$refs.homeMenu.offsetTop, 'top');
    _self.menuTop = _self.$refs.homeMenu.offsetTop;
    // 因为监听是针对window的，所以增加监听后每个页面都会监听，只对某个页面进行监听的话需要在destroyed中将监听移除

    // console.log(_self.$refs.homeMenu);
    window.addEventListener('scroll', _self.homeMenuScroll);
  }
};
</script>

<style lang="scss" scoped>
.home {
  .home-head {
    width: 100%;
    height: 12.5rem;
    background: url('../assets/img/homehead.jpg') no-repeat center 61%;
    background-size: 100%;
  }
  .home-menu-mask {
    height: 5rem;
  }
  .home-menu {
    position: absolute;
    top: 12.5rem;
    width: 100%;
    height: 3.125rem;
    background: #bfab86;
    z-index: 9999;
    .home-menu-list {
      position: relative;
      height: 100%;
      .home-menu-list-item {
        width: 6.25rem;
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
        width: 6.25rem;
        height: 100%;
        background: #fffbf0;
        border-top: 0.1875rem solid #f77825;
        z-index: 0;
      }
      .home-menu-login {
        width: 5.625rem;
        height: 100%;
        img {
          width: 3.125rem;
          height: 3.125rem;
          border-radius: 50%;
        }
        .home-menu-login-box {
          position: absolute;
          top: 3.125rem;
          left: 0;
          width: 100%;
          background: #000000;
          color: #ffffff;
          div {
            width: 5.625rem;
            height: 1.875rem;
            line-height: 1.875rem;
          }
        }
      }
    }
  }
  .home-box {
    .home-box-right {
      width: 15.625rem;
      min-height: 18.75rem;
      box-shadow: 0 0 5px #dddddd;
    }
  }
}
</style>