<template>
  <div class="index">
    <a-tabs
      default-active-key="1"
      @change="handleChangeTab"
    >
      <a-tab-pane
        key="1"
        tab="菜单拦"
      >
        菜单拦
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="用户权限"
        force-render
      >
        用户权限
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    const _self = this;
  },
  methods: {
    handleChangeTab(key) {
      console.log(key);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>