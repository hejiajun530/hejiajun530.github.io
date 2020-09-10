<template>
  <div class="hello">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside
        width="200px"
        style="background-color: rgb(238, 241, 246)"
      >
        <el-menu
          router
          :default-openeds="['1']"
        >
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>分类管理</template>
            <el-menu-item index="/posts/create">新建分类</el-menu-item>
            <el-menu-item index="/posts/edit">分类列表</el-menu-item>
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
          <el-table :data="tableData">
            <el-table-column
              prop="date"
              label="日期"
              width="140"
            >
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
            >
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2015-07-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  created() {
    var _self = this;
    _self.$http.get("/ceatroyList").then(res => {
      console.log(res);
      _self.tableData = res.data;
    });
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
