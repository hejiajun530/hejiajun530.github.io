<template>
  <div class="hello">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu
          router
          :default-active="$route.path"
        >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>分类管理</template>
            <el-menu-item index="/posts/edit">新建分类</el-menu-item>
            <el-menu-item index="/posts/list">分类列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i
              class="el-icon-setting"
              style="margin-right: 15px"
            ></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/_handle.scss";
.common-util {
  font-size: 18px;
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");
}
.el-header {
  /* background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  font-size: 18px; */
  @include font_color("font_color1");
  @include background_color("background_color1");
  @include border_color("border_color1");
}

.el-aside {
  color: #333;
}
</style>
