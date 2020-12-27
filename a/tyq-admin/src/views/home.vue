<template>
  <div class="home text-left">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider
        v-model="collapsed"
        :trigger="null"
        collapsible
      >
        <div class="logo" />
        <a-menu
          :default-selected-keys="[$route.path]"
          :default-open-keys="['sub1']"
          mode="inline"
          theme="dark"
          :inline-collapsed="collapsed"
        >
          <a-menu-item key="/home">
            <a-icon type="pie-chart" />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="desktop" />
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="inbox" />
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="mail" /><span>Navigation One</span></span>
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
            <a-menu-item key="7">
              Option 7
            </a-menu-item>
            <a-menu-item key="8">
              Option 8
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">
              <a-icon type="appstore" /><span>Navigation Two</span></span>
            <a-menu-item key="9">
              Option 9
            </a-menu-item>
            <a-menu-item key="10">
              Option 10
            </a-menu-item>
            <a-sub-menu
              key="sub3"
              title="Submenu"
            >
              <a-menu-item key="11">
                Option 11
              </a-menu-item>
              <a-menu-item key="12">
                Option 12
              </a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      collapsed: false // 用于控制侧边栏是否显示文字
    };
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