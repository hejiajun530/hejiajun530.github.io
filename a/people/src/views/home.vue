<template>
  <div class="home">
    <div class="home-head"></div>
    <div class="home-menu">
      <div class="home-menu-list d-flex jc-start ai-center w">
        <div
          class="home-menu-list-item text-center pointSB text-ellipsis"
          :class="menuIndex == index ? 'active' : ''"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleClickMenu(index, item.url)"
        >{{item.name}}</div>
      </div>
    </div>
    <div class="home-box w">
      <div
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
      >未登录</div>
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
          url: '/home'
        },
        {
          name: '心情随笔',
          url: '/suibi'
        },
        {
          name: '过往故事',
          url: '/gushi'
        },
        {
          name: '技术分享',
          url: '/fenxiang'
        },
        {
          name: 'Blog留言',
          url: '/liuyan'
        },
        {
          name: '关于我',
          url: '/guanyuwo'
        },
        {
          name: 'Me',
          url: '/me'
        }
      ],
      menuIndex: 0
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
    handleClickMenu(index, url) {
      var _self = this;
      _self.menuIndex = index;
      console.log(url);
    }
  },
  created() {
    var _self = this;
    console.log(_self.tyqUser, 'parent-tyqUser');
    console.log(_self.tyqToken, 'parent-tyqToken');
  },
  mounted() {
    var _self = this;
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
    height: 100%;
    .home-menu-list-item {
      min-width: 5.3125rem;
      height: 100%;
      font-size: 1.125rem;
      color: #ffffff;
      line-height: 3.125rem;
      margin: 0 0.3125rem 0 0;
      border-top: 0.1875rem solid transparent;
      &:hover,
      &.active {
        color: #222222;
        background: #fffbf0;
        border-top: 0.1875rem solid #f77825;
      }
    }
  }
}
.home-box {
}
</style>