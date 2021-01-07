<template>
  <div class="tag">
    <h1 class="d-flex jc-between ai-center">
      标签列表
      <a-button
        type="primary"
        @click="visible = true"
      >添加标签</a-button>
    </h1>

    <!-- 分类列表 -->
    <!-- :rowKey="record => record.categoryid" -->
    <a-table
      :rowKey="(record, index) => index"
      :columns="columnList"
      :data-source="tagist"
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
        @click="() => handleClickDelTag(record)"
      >
        删除
      </a-button>
    </a-table>

    <!-- 添加分类 弹出框 -->
    <a-modal
      v-model="visible"
      title="添加标签"
      @ok="handleClickAddTag"
    >
      <a-input
        placeholder="请输入标签名称"
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
      tagist: [],
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
    _self.handleGetTag();
  },
  watch: {
    visible() {
      const _self = this;
      _self.text = "";
    }
  },
  methods: {
    // 获取分类列表
    handleGetTag() {
      const _self = this;
      _self.$http.get("/getTag").then(res => {
        console.log(res);
        _self.tagist = res.data.res;
      });
    },
    // 添加分类
    handleClickAddTag() {
      const _self = this;
      if (!_self.text) {
        _self.$message.error("分类名称不能为空", 2);
      }
      _self.$http.post("/addTag", { text: _self.text }).then(res => {
        console.log(res);
        if (res.data.res.protocol41) {
          _self.visible = false;
          _self.$message.success(res.data.msg, 2);
          _self.handleGetTag();
        }
      });
    },
    // 删除分类
    handleClickDelTag(item) {
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
          _self.$http.get(`/delTag?tagid=${item.tagid}`).then(res => {
            console.log(res);
            if (res.data.res.protocol41) {
              _self.$message.success(`删除 '${item.text}' 成功`, 2);
              _self.handleGetTag();
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