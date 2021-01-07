<template>
  <div class="category">
    <h1 class="d-flex jc-between ai-center">
      文章列表
    </h1>

    <!-- 分类列表 -->
    <!-- :rowKey="record => record.categoryid" -->
    <a-table
      :rowKey="(record, index) => index"
      :columns="columnList"
      :data-source="articleList"
      :pagination="false"
    >
      <a
        slot="title"
        slot-scope="title"
        class="text-ellipsis"
      >{{ title }}</a>
      <a
        slot="username"
        slot-scope="username"
      >{{ username }}</a>
      <div
        slot="cover"
        slot-scope="cover"
        class="cover"
      >
        <img :src="cover">
      </div>
      <a
        slot="createTime"
        slot-scope="createTime"
      >{{ toymd(createTime, 'yy-mm-dd hh:mm:ss') }}</a>
      <template
        slot="make"
        slot-scope="text, record"
      >
        <a-button
          type="primary"
          @click="() => handleClickLookArticle(record)"
        >
          查看
        </a-button>
        <a-button
          class="editable-add-btn"
          @click="() => handleClickDelArticle(record)"
        >
          删除
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
      articleList: [],
      columnList: [
        {
          dataIndex: "title",
          key: "title",
          title: "文章标题",
          scopedSlots: { customRender: "title" }
        },
        {
          dataIndex: "username",
          key: "username",
          title: "作者"
        },
        {
          dataIndex: "cover",
          key: "cover",
          title: "封面",
          scopedSlots: { customRender: "cover" }
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
      ],
      body: {
        category: "",
        page: 1,
        num: 5
      },
      total: 0
    };
  },
  created() {
    const _self = this;
    _self.handleGetArticle();
  },
  methods: {
    handleClickChangePage(page, pagesize) {
      const _self = this;
      console.log(page, pagesize);
      _self.$set(_self.body, "page", page);
      _self.$set(_self.body, "num", pagesize);
      _self.handleGetArticle();
    },
    // 获取文章列表
    handleGetArticle() {
      const _self = this;
      _self.$http.post("/getArticleList", _self.body).then(res => {
        console.log(res);
        _self.articleList = res.data.res;
        _self.total = res.data.total[0].total;
      });
    },
    // 查看文章内容
    handleClickLookArticle(item) {
      const _self = this;
      _self.visible = true;
      _self.text = item.content;
      _self.title = item.title;
      console.log(item);
    },
    // 删除文章
    handleClickDelArticle(item) {
      const _self = this;
      // console.log(item);
      _self.$confirm({
        title: "删除",
        content: `您确定要删除 '${item.title}' 吗?`,
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
                _self.$message.success(`删除 '${item.title}' 成功`, 2);
                _self.handleGetArticle();
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
.cover {
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