<template>
  <a-menu
    :default-selected-keys="[$route.path]"
    :default-open-keys="[$route.path]"
    mode="inline"
    theme="dark"
    :inline-collapsed="$parent.collapsed"
  >
    <template v-for="item in menus">
      <!-- 一级菜单 -->
      <a-menu-item
        :key="item.path"
        v-if="!item.children"
      >
        {{item.meta.text}}
      </a-menu-item>

      <!-- 一级菜单 -->
      <a-sub-menu
        :key="item.path"
        v-else
      >
        <span slot="title">
          <a-icon type="mail" /><span>{{item.name + ' ' + item.path}}</span></span>
        <!-- 二级菜单 -->
        <a-menu-item :key="item.path">
          {{item.meta.text}}
        </a-menu-item>
        <homeMenu :menus="item.children"></homeMenu>
      </a-sub-menu>
    </template>

  </a-menu>
</template>

<script>
export default {
  name: "homeMenu",
  props: {
    menus: {
      type: Array
    },
  },
  data() {
    return {};
  },
  created() {
    console.log(this.menus);
  }
};
</script>