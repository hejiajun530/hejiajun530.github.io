<template>
  <div>
    <el-form
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="ID">
        <el-input v-model="formLabelAlign.userId"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formLabelAlign.userName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="formLabelAlign.usreSex"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="formLabelAlign.userAge"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleClickSubmit"
        >{{editflag ? "修改" : "添加"}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLabelAlign: {
        userId: "",
        userName: "",
        usreSex: "",
        userAge: ""
      },
      editflag: false
    };
  },
  created() {
    var _self = this;
    if (_self.$route.query.id) {
      _self.editflag = true;
      _self.handleGetListId(_self.$route.query.id);
    }
  },
  methods: {
    // 提交表单
    handleClickSubmit() {
      var _self = this;
      if (_self.editflag) {
        _self.$http.put("/editlist", _self.formLabelAlign).then(res => {
          console.log(res.data);
          if (res.data) {
            _self.$message.success("成功");
            _self.$router.push("/posts/list");
          } else {
            _self.$message.error("失败");
          }
        });
      } else {
        _self.$http.post("/addlist", _self.formLabelAlign).then(res => {
          console.log(res);
          if (res.data) {
            _self.$message.success("成功");
            _self.$router.push("/posts/list");
          } else {
            _self.$message.error("失败");
          }
        });
      }
    },
    // 根据id获取数据
    handleGetListId(id) {
      var _self = this;
      _self.$http.get("/getlistId/" + id).then(res => {
        console.log(res.data[0]);
        _self.formLabelAlign = res.data[0];
      });
    }
  }
};
</script>

<style scoped>
</style>