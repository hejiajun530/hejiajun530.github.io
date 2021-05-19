<template>
  <div class="category">
    <h1 class="d-flex jc-between ai-center">
      用户列表
    </h1>

    <!-- 分类列表 -->
    <!-- :rowKey="record => record.categoryid" -->
    <a-table
      :rowKey="(record, index) => index"
      :columns="columnList"
      :data-source="userList"
      :pagination="false"
    >
      <a
        slot="username"
        slot-scope="username"
      >{{ username }}</a>
      <div
        slot="avator"
        slot-scope="avator"
        class="avator"
      >
        <img :src="avator">
      </div>
      <template
        slot="role"
        slot-scope="role"
      >
        <a-tag
          color="#f50"
          v-if="role == 0"
        >
          已禁用
        </a-tag>
        <a-tag
          color="#108ee9"
          v-else
        >
          使用中
        </a-tag>
      </template>
      <a
        slot="createTime"
        slot-scope="createTime"
      >{{ toymd(createTime, 'yy-mm-dd hh:mm:ss') }}</a>
      <template
        slot="make"
        slot-scope="text, record"
      >
        <a-button
          class="editable-add-btn"
          @click="() => handleClickCloseArticle(record)"
        >
          {{record.role == 0 ? '取消禁用' : '禁用'}}
        </a-button>
      </template>
    </a-table>
    <a-pagination
      :current="body.page"
      :total="total"
      :defaultPageSize="body.num"
      show-less-items
      @change="handleClickChangePage"
    />

    <!-- 添加分类 弹出框 -->
    <a-modal
      v-model="visible"
      :title="title"
      @ok="visible = false"
    >
      <div
        v-html="text"
        class="article-content"
      ></div>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: "",
      title: "",
      userList: [],
      columnList: [
        {
          dataIndex: "username",
          key: "username",
          title: "用户"
        },
        {
          dataIndex: "avator",
          key: "avator",
          title: "头像",
          scopedSlots: { customRender: "avator" }
        },
        {
          dataIndex: "email",
          key: "email",
          title: "邮箱"
        },
        {
          dataIndex: "role",
          key: "role",
          title: "是否禁用",
          scopedSlots: { customRender: "role" }
        },
        {
          dataIndex: "createTime",
          key: "createTime",
          title: "注册时间",
          scopedSlots: { customRender: "createTime" }
        },
        {
          dataIndex: "make",
          title: "操作",
          scopedSlots: { customRender: "make" }
        }
      ],
      body: {
        page: 1,
        num: 5
      },
      total: 0
    };
  },
  created() {
    const _self = this;
    _self.handleGetUser();
  },
  methods: {
    handleClickChangePage(page, pagesize) {
      const _self = this;
      console.log(page, pagesize);
      _self.$set(_self.body, "page", page);
      _self.$set(_self.body, "num", pagesize);
      _self.handleGetUser();
    },
    // 获取用户列表
    handleGetUser() {
      const _self = this;
      _self.$http.post("/getUserList", _self.body).then(res => {
        console.log(res);
        _self.userList = res.data.res;
        _self.total = res.data.res[0].total;
      });
    },
    // 禁用用户
    handleClickCloseArticle(item) {
      const _self = this;
      // console.log(item);
      _self.$confirm({
        title: "删除",
        content: `您确定要禁用 '${item.username}' 吗?`,
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          console.log("OK");
          _self.$http
            .get(`/delArticleById?articleid=${item.articleid}`)
            .then(res => {
              console.log(res);
              if (res.data.res.protocol41) {
                _self.$message.success(`禁用 '${item.username}' 成功`, 2);
                _self.handleGetUser();
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
.avator {
  height: 80px;
  img {
    height: 100%;
  }
}
.article-content {
  width: 100%;
  max-height: 600px;
  overflow-y: scroll;
  /deep/img {
    width: 100% !important;
  }
  &::-webkit-scrollbar {
    display: block;
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    /* background: #424381; */
    /* background: #424381; */
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(219, 236, 252, 1);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #333;
  }
}
.text-ellipsis {
  max-width: 150px;
}
</style>