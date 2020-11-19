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
            @g-selectValue="handleGetSelectValueTag"
            id="tips"
          ></g-select>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">上传封面</div>
        <div class="info-edit-item-content">
          <g-upload @g-uploadList="handleGetUploadList"></g-upload>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">文章内容</div>
        <div class="info-edit-item-content">
          <VueEditor v-model="model.content"></VueEditor>
        </div>
      </div>
      <div class="info-edit-item">
        <button class="me-button pointSB" @click="handleClickAddArticle">提交</button>
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
      articleList: [
        {
          name: '技术分享',
          value: 'share'
        },
        {
          name: '过往故事',
          value: 'story'
        },
        {
          name: '心情随笔',
          value: 'mood'
        }
      ],
      tagList: [{
        name: 'js',
        value: 'js'
      },{
        name: 'css',
        value: 'css'
      },{
        name: 'html',
        value: 'html'
      }],
      model: {
        title: '',
        category: '',
        tag: '',
        content: '',
        cover: ''
      }
    };
  },
  methods: {
    // 获取upload的数组
    handleGetUploadList(file) {
      var _self = this;
      // console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      _self.$http.post('/upload', formData).then(res => {
        _self.$set(_self.model, 'cover', res.data.url);
        console.log(_self.model);
      });
    },
    // 获取select下拉框组件选择的值 数组形式  分类
    handleGetSelectValueCategory(value) {
      var _self = this;
      // console.log(value);
      _self.$set(_self.model, 'category', value[0].value);
      console.log(_self.model);
    },
    // 获取select下拉框组件选择的值 数组形式  标签
    handleGetSelectValueTag(value) {
      var _self = this;
      console.log(value);
      var data = '';
      value.map((item, index) => {
        // console.log(item, index)
        data += index == 0 ? item.value : (',' + item.value);
      })
      _self.$set(_self.model, 'tag', data);
      console.log(_self.model);
    },
    // 添加文章
    handleClickAddArticle() {
      var _self = this;
      console.log(_self.model);
      _self.$http.post('/addArticle', _self.model).then(res => {
        console.log(res);
      })
    }
  },
  created() {},
  mounted() {}
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
}
</style>