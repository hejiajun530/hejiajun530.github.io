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
    <!-- :rowKey="record => record.categoryid" -->
    <a-table
      :rowKey="(record, index) => index"
      :columns="columnList"
      :data-source="categoryList"
    >
      <a
        slot="text"
        slot-scope="text"
      >{{ text }}</a>
      <a
        slot="createTime"
        slot-scope="createTime"
      >{{ toymd(createTime, 'yy-mm-dd hh:mm:ss') }}</a>
      <a-button
        class="editable-add-btn"
        slot="make"
        slot-scope="text, record"
        @click="() => handleClickDelCategory(record)"
      >
        删除
      </a-button>
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
          key: "text",
          title: "名称"
        },
        {
          dataIndex: "createTime",
          key: "createTime",
          title: "创建时间",
          scopedSlots: { customRender: "createTime" }
        },
        {
          dataIndex: "make",
          title: "操作",
          scopedSlots: { customRender: "make" }
        }
      ]
    };
  },
  created() {
    const _self = this;
    _self.handleGetCategory();
  },
  watch: {
    visible() {
      const _self = this;
      _self.text = "";
    }
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
    },
    // 删除分类
    handleClickDelCategory(item) {
      const _self = this;
      // console.log(item);
      _self.$confirm({
        title: "删除",
        content: `您确定要删除 '${item.text}' 吗?`,
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          console.log("OK");
          _self.$http
            .get(`/delCategory?categoryid=${item.categoryid}`)
            .then(res => {
              console.log(res);
              if (res.data.res.protocol41) {
                _self.$message.success(`删除 '${item.text}' 成功`, 2);
                _self.handleGetCategory();
              }
            });
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>