<template>
  <div class="music text-left">
    <h3 class="positionTopLeft me-title">上传歌曲</h3>
    <div class="info-edit d-flex flex-column">
      <div class="info-edit-item">
        <div class="info-edit-item-label">歌曲名称</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="model.title"
            placeholder="请输入用户名"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">演唱者</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="model.auther"
            placeholder="请输入个性标签"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">歌曲文件</div>
        <div class="info-edit-item-content d-flex jc-start ai-center">
          <g-upload
            @g-uploadList="handleGetUploadList"
            type="2"
          ></g-upload>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">歌曲封面</div>
        <div class="info-edit-item-content d-flex jc-start ai-center">
          <img
            :src="model.text"
            v-if="model && model.text"
            class="avator"
          >
          <g-upload @g-uploadList="handleGetUploadListImg"></g-upload>
        </div>
      </div>
      <div class="info-edit-item">
        <button
          class="me-button pointSB"
          @click="handleClickUploadMusic"
        >提交</button>
      </div>
    </div>
    <!-- 测试 -->
    <!-- <musiclist :musiclist="musiclist"></musiclist>
    <pageing
      :num="total"
      @g-getpage="handleClickChangePage"
    ></pageing> -->
  </div>
</template>

<script>
// import pageing from '@/components/pageing/index';
// import musiclist from '../musiclist/index';
import upload from '@/components/upload/index';
// import mixin from '@/mixins';
export default {
  // mixins: [mixin],
  components: {
    'g-upload': upload
    // musiclist,
    // pageing
  },
  data() {
    return {
      model: {
        title: '',
        auther: '',
        content: '',
        text: ''
      }
      // musiclist: [],
      // query: {
      //   page: 1,
      //   num: 3
      // },
      // total: 0
    };
  },
  created() {
    const _self = this;
    // _self.handleClickChangePage('1');
  },
  mounted() {},
  methods: {
    // 获取upload的数据
    handleGetUploadList(file) {
      var _self = this;
      console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      console.log(formData.get('file'), '----------');
      _self.$http.post('/upload', formData).then(res => {
        console.log(res.data.url);
        _self.$set(_self.model, 'content', res.data.url);
      });
    },
    // 获取upload上传图片的数据
    handleGetUploadListImg(file) {
      var _self = this;
      console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      console.log(formData.get('file'), '----------');
      _self.$http.post('/upload', formData).then(res => {
        console.log(res.data.url);
        _self.$set(_self.model, 'text', res.data.url);
      });
    },
    // 上传音乐
    handleClickUploadMusic() {
      const _self = this;
      if (!_self.model.title || !_self.model.auther || !_self.model.content) {
        _self.$gMessage({
          title: '不能为空',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      console.log(_self.model);
      // return false;
      _self.$http.post('/addMusic', _self.model).then(res => {
        console.log(res);
        if (res.data.res.affectedRows) {
          _self.$gMessage({
            title: '发表成功',
            duration: 2000
          });
          _self.$router.push('/home/mood');
        } else {
          _self.$gMessage({
            title: '发表失败',
            duration: 2000,
            type: 'error'
          });
        }
      });
    }
    // 获取音乐列表
    // handleClickChangePage(num) {
    //   const _self = this;
    //   _self.$set(_self.query, 'page', num);
    //   _self.$http.post('/getMusicList', _self.query).then(res => {
    //     _self.musiclist = res.data.res;
    //     if (_self.musiclist[0].total) {
    //       _self.total = Math.ceil(_self.musiclist[0].total / _self.query.num);
    //     }
    //     console.log(_self.musiclist, 'musiclist');
    //   });
    // }
  }
};
</script>

<style lang="scss" scoped>
.music {
  position: relative;
  padding: 3.125rem 0 0 0;
}
.avator {
  height: 5rem;
}
</style>