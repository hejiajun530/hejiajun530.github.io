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
        <div class="info-edit-item-label">歌词文件</div>
        <div class="info-edit-item-content d-flex jc-start ai-center">
          <g-upload
            @g-uploadList="handleGetUploadList"
            type="2"
          ></g-upload>
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
    <div
      class="test"
      v-for="item in musiclist"
      :key="item.music"
      @click="handleClickPlayMusic(item.content)"
    >{{item.title}}--{{item.auther}}</div>
  </div>
</template>

<script>
import upload from '@/components/upload/index';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    'g-upload': upload
  },
  data() {
    return {
      model: {
        title: '',
        auther: '',
        content: '',
        text: ''
      },
      musiclist: [],
      mp3: null
    };
  },
  created() {
    const _self = this;
    _self.handleGetMusicList();
  },
  mounted() {},
  methods: {
    // 获取upload的数组
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
        }
      });
    },
    // 获取音乐列表
    handleGetMusicList() {
      const _self = this;
      _self.$http.post('/getMusicList').then(res => {
        _self.musiclist = res.data.res;
        console.log(_self.musiclist, 'musiclist');
      });
    },
    // 播放音乐
    handleClickPlayMusic(src) {
      const _self = this;
      // 音频播放
      if (_self.mp3 != null) {
        _self.mp3 = null;
      }
      _self.mp3 = new Audio(src); // 创建音频对象
      console.log(_self.mp3);
      _self.mp3.load(); // 重新加载
      _self.mp3.play(); // 播放
    }
  }
};
</script>

<style lang="scss" scoped>
.music {
  position: relative;
  padding: 3.125rem 0 0 0;
}
.test {
  width: 150px;
  height: 30px;
  background: skyblue;
  margin: 5px 0;
}
</style>