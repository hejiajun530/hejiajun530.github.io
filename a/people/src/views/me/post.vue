<template>
  <div class="post">
    <h3 class="me-title positionTopLeft">文章发表</h3>
    <div class="info-edit">
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章标题</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="model.title"
            placeholder="请输入文章标题"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章分类</div>
        <div class="info-edit-item-content">
          <g-select
            :selectList='articleList'
            chooseIndex='0'
            :nowdata="model.category"
            @g-selectValue="handleGetSelectValueCategory"
            id="ceatgory"
          ></g-select>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章标签</div>
        <div class="info-edit-item-content">
          <g-select
            :selectList='tagList'
            chooseIndex='1'
            :nowdata="model.tag"
            @g-selectValue="handleGetSelectValueTag"
            id="tips"
          ></g-select>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">上传封面</div>
        <div class="info-edit-item-content d-flex jc-start ai-center">
          <img
            :src="model.cover"
            v-if="model && model.cover"
            class="cover"
          >
          <g-upload @g-uploadList="handleGetUploadList"></g-upload>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章内容</div>
        <div class="info-edit-item-content">
          <VueEditor
            v-model="model.content"
            useCustomImageHandler
            @image-added="handleImageAdded"
          ></VueEditor>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章展示</div>
        <div
          class="info-edit-item-content flex-1 text-left"
          v-html="model.content"
        >
        </div>
      </div>
      <div class="info-edit-item">
        <button
          class="me-button pointSB"
          @click="handleClickAddArticle"
        >{{postFlag ? '发表文章' : '编辑文章'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import upload from '@/components/upload/index';
import select from '@/components/select/index';
import { VueEditor } from 'vue2-editor';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    VueEditor,
    'g-upload': upload,
    'g-select': select
  },
  data() {
    return {
      articleList: ['技术分享', '过往故事', '心情随笔'],
      tagList: ['js', 'css', 'html'],
      model: {
        title: '',
        category: '',
        tag: '',
        content: '',
        cover: '',
        userid: '',
        count: 1
      },
      postFlag: true // true 为发表文章  false 为编辑文章
    };
  },
  methods: {
    // 获取upload的数组
    handleGetUploadList(file) {
      var _self = this;
      // console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      // 上传图片
      _self.$http.post('/upload', formData).then(res => {
        _self.$set(_self.model, 'cover', res.data.url);
        console.log(_self.model);
      });
    },
    // 获取select下拉框组件选择的值 数组形式  分类
    handleGetSelectValueCategory(value) {
      var _self = this;
      // console.log(value);
      _self.$set(_self.model, 'category', value[0]);
      console.log(_self.model);
    },
    // 获取select下拉框组件选择的值 数组形式  标签
    handleGetSelectValueTag(value) {
      var _self = this;
      console.log(value);
      var data = '';
      value.map((item, index) => {
        // console.log(item, index)
        // 把数组转为逗号隔开的字符串    使用三元表达式让第一个不加逗号
        data += index == 0 ? item : ',' + item;
      });
      _self.$set(_self.model, 'tag', data);
      // console.log(_self.model);
    },
    // 富文本添加图片
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append('file', file);
      const res = await this.$http.post('/upload', formData);
      // console.log(res);
      Editor.insertEmbed(cursorLocation, 'image', res.data.url);
      resetUploader();
    },
    // 添加文章
    handleClickAddArticle() {
      var _self = this;
      _self.$set(_self.model, 'userid', _self.tyqUser.userid);
      // 文章的浏览记录，如果浏览记录有值，就使用原值，没有就为0
      let count = _self.model.count ? _self.model.count : 1;
      _self.$set(_self.model, 'count', count);
      console.log(_self.model);
      var allFlag = true;
      Object.keys(_self.model).forEach(key => {
        console.log(_self.model[key], key);
        // '测试' title
        // '心情随笔'  category
        // 'js,css'  tag
        // 'ceshitest'  content
        // 'http://localhost:3000/upload/33.jpg'  cover
        // 1 'userid'
        if (!_self.model[key]) {
          //如果有一个值为空，就不往后执行
          allFlag = false;
          console.log('有值为空，不调用接口');
        }
      });
      if (!allFlag) {
        _self.$gMessage({
          title: '请填写内容，不要缺失!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      // console.log(_self.model);
      if (_self.postFlag) {
        // postFlag 为true，添加文章
        _self.$http.post('/addArticle', _self.model).then(res => {
          console.log(res);
          if (res.data.flag) {
            _self.$gMessage({
              title: '发表成功',
              duration: 2000,
              type: 'success'
            });
            _self.$router.push('/me/postlist');
          }
        });
      } else {
        // postFlag 为false，修改文章
        console.log(_self.model);
        // return false;
        _self.$http.post('/editArticleById', _self.model).then(res => {
          console.log(res.data);
          if (res.data.flag) {
            _self.$gMessage({
              title: '修改成功',
              duration: 2000,
              type: 'success'
            });
            _self.$router.push('/me/postlist');
          }
        });
      }
    }
  },
  created() {},
  mounted() {
    var _self = this;
    // console.log(_self.$route.query.articleid);
    if (_self.$route.query.articleid) {
      _self.postFlag = false;
      _self.$http
        .get(`/getArticleByArticleId?articleid=${_self.$route.query.articleid}`)
        .then(res => {
          console.log(res.data);
          _self.model = res.data.res[0];
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  padding: 3.125rem 0 0 0;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  /* 火狐滚动条隐藏 */
  -ms-overflow-style: none;
  scrollbar-width: none;
  // 谷歌滚动条隐藏
  &::-webkit-scrollbar {
    display: none;
  }
  .info-edit-item-content {
    min-height: 1.25rem;
    border: 0.0625rem solid #dddddd;
    /deep/img,
    /deep/video {
      max-height: 21.875rem;
    }
    /deep/p {
      text-indent: 2em;
    }
  }
}
.cover {
  width: 5rem;
  height: 5rem;
}
</style>