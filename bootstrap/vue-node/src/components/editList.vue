<template>
  <div>
    <el-input
      class="search"
      v-model="searchValue"
      placeholder="请输入搜索内容"
      @keyup.enter.native="handleKeyUpSearch"
    ></el-input>
    <el-table :data="tableData">
      <el-table-column
        prop="userName"
        label="姓名"
        width="140"
      >
      </el-table-column>
      <el-table-column
        prop="usreSex"
        label="性别"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="userAge"
        label="年龄"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleDelList(scope.row.userId, scope.row.userName)"
          >删除</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleEditList(scope.row.userId)"
          >修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      searchValue: ""
    };
  },
  created() {
    var _self = this;
    _self.handleGetList();
  },
  methods: {
    // 查询数据
    handleKeyUpSearch() {
      var _self = this;
      // console.log(111);
      _self.$http
        .get("/getlistName?userName=" + _self.searchValue)
        .then(res => {
          console.log(res.data);
          _self.tableData = res.data;
        });
    },
    // 获取数据
    handleGetList() {
      var _self = this;
      _self.$http.get("/getlist").then(res => {
        // console.log(res);
        _self.tableData = res.data;
      });
    },
    // 删除数据
    handleDelList(id, name) {
      var _self = this;
      _self
        .$confirm("此操作将永久删除 '" + name + "' , 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          _self.$http.delete("/delList/" + id).then(res => {
            console.log(res);
            _self.$message({
              type: "success",
              message: "删除成功!"
            });
            // _self.tableData = res.data;
            _self.handleGetList();
          });
        })
        .catch(() => {
          _self.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 修改数据
    handleEditList(id) {
      var _self = this;
      _self.$router.push("/posts/edit?id=" + id);
    }
  }
};
</script>

<style scoped>
.search {
  width: 250px;
}
</style>