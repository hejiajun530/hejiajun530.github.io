<template>
  <div class="me d-flex">
    <div
      class="me-left"
      :style="phoneFlag ? 'width: 6.25rem;' : ''"
    >
      <!-- 头像 -->
      <div class="me-left-header d-flex flex-column jc-center ai-center">
        <img
          :src="tyqUser.avator"
          v-if="tyqUser && tyqUser.avator"
          @click="$router.push('/')"
        >
        <img
          v-else
          src="@/assets/logo.png"
          @click="$router.push('/')"
        >
        <!-- 用户名 -->
        <h2 class="me-left-header-username">{{tyqUser && tyqUser.username ? tyqUser.username : '用户名'}}</h2>
        <!-- 个性签名 -->
        <h5 class="me-left-header-tips text-ellipsis">{{tyqUser && tyqUser.tips ? tyqUser.tips : '这个人很懒，什么都没写...'}}</h5>
      </div>
      <!-- 侧边菜单栏 -->
      <div class="me-left-menu">
        <div
          class="me-left-menu-item d-flex jc-start ai-center pointSB"
          :class="$route.path == item.url ? 'active' : ''"
          v-for="(item) in meMenuList"
          :key="item.name"
          @click="handleClickMenu(item.url)"
        >
          <i
            class="me-left-menu-item-icon text-center iconfont"
            :class="item.icon"
          ></i>
          <div
            class="me-left-menu-item-name text-ellipsis"
            v-if="!phoneFlag"
          >{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="me-right flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/logo.png';
import mixin from '../mixins';
export default {
  mixins: [mixin],
  data() {
    return {
      meMenuList: [
        {
          icon: 'icon-gerenxinxi',
          name: '信息修改',
          url: '/me/info'
        },
        {
          icon: 'icon-mima',
          name: '密码修改',
          url: '/me/password'
        },
        {
          icon: 'icon-wenzhang',
          name: '文章发表',
          url: '/me/post'
        },
        {
          icon: 'icon-wenzhangliebiaoxiangqing',
          name: '文章列表',
          url: '/me/postlist'
        },
        {
          icon: 'icon-guidang',
          name: '个人归档',
          url: '/me/arch'
        },
        {
          icon: 'icon-tubiaozhizuomobanyihuifu-',
          name: '上传音乐',
          url: '/me/music'
        },
        {
          icon: 'icon-ico-',
          name: '用户列表',
          url: '/me/user'
        },
        {
          icon: 'icon-liaotian1',
          name: '聊天室',
          url: '/me/chat'
        },
        {
          icon: 'icon-liaotian1',
          name: '待做事项',
          url: '/me/wait'
        }
      ],
      meIndex: 0
    };
  },
  methods: {
    // 点击切换路由
    handleClickMenu(url) {
      var _self = this;
      _self.$router.push(url);
    }
  },
  created() {
    var _self = this;
    // _self.$http.get('/getUser?username=tz').then(res => {
    //   console.log(res.data);
    //   _self.userInfo = res.data[0];
    //   // localStorage.setItem('tyqUser', JSON.stringify(res.data[0]));
    //   sessionStorage.setItem('tyqUser', JSON.stringify(res.data[0]));
    // });
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.me {
  height: 100vh;
  .me-left {
    width: 15.625rem;
    height: 100%;
    box-shadow: 0.0625rem 0.0625rem 0.3125rem #dddddd;
    padding: 3.125rem 0 0 0;
    .me-left-header {
      img {
        width: 6.25rem;
        height: 6.25rem;
        border-radius: 50%;
        transition: all 2s;
        cursor: pointer;
        &:hover {
          transform: rotate(360deg);
        }
      }
      .me-left-header-tips {
        width: 100%;
      }
    }
    .me-left-menu {
      width: 100%;
      margin: 3rem 0 0 0;
      .me-left-menu-item {
        height: 3.125rem;
        font-weight: 600;
        border-left: 0.3125rem solid transparent;
        margin: 0.3125rem 0;
        .me-left-menu-item-icon {
          padding: 0 0.625rem 0 1.25rem;
        }
        .me-left-menu-item-name {
          width: 5rem;
        }
        &.active,
        &:hover {
          border-left: 0.3125rem solid orangered;
          background: #ffffff;
        }
      }
    }
  }
  .me-right {
    height: 100%;
    padding: 1.25rem 2.1875rem;
  }
}
</style>