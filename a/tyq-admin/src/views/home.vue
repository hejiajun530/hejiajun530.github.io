<template>
  <div class="home text-left">
    <a-layout id="components-layout-demo-custom-trigger">
      <!-- 侧边 菜单栏 -->
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo" />
        <homeMenu :menus="menus"></homeMenu>
      </a-layout-sider>

      <!-- 头部 -->
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>

        <!-- 主体部分 -->
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import homeMenu from "./homeMenu/index";
export default {
  name: "Home",
  components: {
    homeMenu
  },
  data() {
    return {
      collapsed: false, // 用于控制侧边栏是否显示文字
      menus: [
        {
          name: "index",
          path: "/home/index",
          meta: {
            icon: "",
            text: "权限设置",
            role: "superadmin"
          }
        },
        {
          name: "category",
          path: "/home/category",
          meta: {
            icon: "",
            text: "分类"
          }
        },
        {
          name: "tag",
          path: "/home/tag",
          meta: {
            icon: "",
            text: "标签"
          }
        }
      ]
    };
  },
  created() {
    const _self = this;
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  #components-layout-demo-custom-trigger {
    height: 100%;
    .trigger {
      font-size: 18px;
      line-height: 64px;
      padding: 0 24px;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #1890ff;
      }
    }
    .logo {
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    }
  }
}
</style>