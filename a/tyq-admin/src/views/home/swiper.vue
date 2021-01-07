<template>
  <div class="swiper">
    <!-- 标签页 -->
    <!-- default-active-key="1" -->
    <a-tabs
      :activeKey="tabindex"
      @change="callback"
    >
      <a-tab-pane
        key="1"
        tab="轮播图列表"
      >
        <!-- 第一个标签页 -->
        轮播图列表
        <a-table
          :rowKey="record => record.swiperid"
          :data-source="swiperList"
          :columns="columnList"
        >
          <div
            slot="src"
            slot-scope="src"
            class="swiper-item"
          >
            <img :src="src">
          </div>
          <a
            slot="createTime"
            slot-scope="createTime"
          >{{ toymd(createTime, 'yy-mm-dd hh:mm:ss') }}</a>
          <template
            slot="make"
            slot-scope="text, record"
          >
            <a-button @click="handleClickDelSwiper(record)">删除</a-button>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane
        key="2"
        tab="上传图片"
        force-render
      >
        <!-- 第二个标签页 -->
        <a-button @click="handleClickUploadSwiper">上传图片</a-button>
        <a-upload
          action="http://localhost:3000/admin/api/upload"
          method="post"
          :headers="{'Authorization': 'Bearer ' + token}"
          list-type="picture-card"
          :file-list="fileList"
          @change="handleChange"
        >
          <!-- @preview="handlePreview" -->
          <a-icon type="plus" />
          <div class="ant-upload-text">
            Upload
          </div>
        </a-upload>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  data() {
    return {
      swiperList: [],
      columnList: [
        {
          dataIndex: "src",
          key: "src",
          title: "图片",
          scopedSlots: { customRender: "src" }
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
      fileList: [],
      token: "",
      tabindex: "1"
    };
  },
  created() {
    const _self = this;
    _self.handleGetSwiper();
    _self.token = sessionStorage.tyqAdminToken || "";
  },
  methods: {
    callback(key) {
      console.log(key);
      const _self = this;
      _self.tabindex = key;
    },
    // 获取轮播图
    handleGetSwiper() {
      const _self = this;
      _self.$http.get("/getSwiper").then(res => {
        _self.swiperList = res.data.res;
        console.log(_self.swiperList);
      });
    },
    // -----------
    // handleCancel() {
    //   this.previewVisible = false;
    // },
    // async handlePreview(file) {
    //   if (!file.url && !file.preview) {
    //     file.preview = await getBase64(file.originFileObj);
    //   }
    //   this.previewImage = file.url || file.preview;
    //   this.previewVisible = true;
    // },
    handleChange({ fileList }) {
      this.fileList = fileList;
      console.log(this.fileList);
    },
    // 上传轮播图
    handleClickUploadSwiper() {
      const _self = this;
      _self.fileList.map(item => {
        _self.$http.post("/addSwiper", { src: item.response.url }).then(res => {
          console.log(res);
          if (res.data.res.protocol41) {
            _self.$message.success("添加成功", 1);
            _self.handleGetSwiper();
            _self.tabindex = "1";
            _self.fileList = [];
          }
        });
      });
    },
    // 删除轮播图
    handleClickDelSwiper(item) {
      const _self = this;
      _self.$confirm({
        title: "删除",
        content: `您确定要删除该图片吗?`,
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          console.log("OK");
          _self.$http.get(`/delSwiper?swiperid=${item.swiperid}`).then(res => {
            console.log(res);
            if (res.data.res.protocol41) {
              _self.$message.success(`删除成功`, 2);
              _self.handleGetSwiper();
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
.swiper-item {
  height: 100px;
  img {
    height: 100%;
  }
}
</style>