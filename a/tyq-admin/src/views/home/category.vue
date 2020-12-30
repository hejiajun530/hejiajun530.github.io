<template>
  <div class="category">
    <h1 class="d-flex jc-between ai-center">
      分类列表
      <a-button
        type="primary"
        @click="visible = true"
      >添加分类</a-button>
    </h1>

    <!-- 分类列表 -->
    <a-table rowkey={record=> record.id}
      :columns="columnList"
      :data-source="categoryList"
      >
      <a
        slot="text"
        slot-scope="item"
      >{{ item }}</a>
    </a-table>

    <!-- 添加分类 弹出框 -->
    <a-modal
      v-model="visible"
      title="添加分类"
      @ok="handleClickAddCategory"
    >
      <a-input
        placeholder="请输入分类名称"
        v-model="text"
      />
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: "",
      categoryList: [],
      columnList: [
        {
          dataIndex: "text",
          key: "name",
          title: "名称"
        },
        {
          dataIndex: "createTime",
          key: "time",
          title: "创建时间"
        }
      ]
    };
  },
  created() {
    const _self = this;
    _self.handleGetCategory();
  },
  methods: {
    // 获取分类列表
    handleGetCategory() {
      const _self = this;
      _self.$http.get("/getCategory").then(res => {
        console.log(res);
        _self.categoryList = res.data.res;
      });
    },
    // 添加分类
    handleClickAddCategory() {
      const _self = this;
      if (!_self.text) {
        _self.$message.error("分类名称不能为空", 2);
      }
      _self.$http.post("/addCategory", { text: _self.text }).then(res => {
        console.log(res);
        if (res.data.res.protocol41) {
          _self.visible = false;
          _self.$message.success(res.data.msg, 2);
          _self.handleGetCategory();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>