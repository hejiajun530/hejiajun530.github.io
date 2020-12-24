<template>
  <div class="info">
    <h3 class="positionTopLeft me-title">修改个人信息</h3>
    <div class="info-edit d-flex flex-column">
      <div class="info-edit-item">
        <div class="info-edit-item-label">修改头像</div>
        <div class="info-edit-item-content d-flex jc-start ai-center">
          <img
            :src="tyqUser.avator"
            v-if="tyqUser && tyqUser.avator"
            class="avator"
          >
          <g-upload @g-uploadList="handleGetUploadList"></g-upload>
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">修改用户名</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="tyqUser.username"
            placeholder="请输入用户名"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">个性标签</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="tyqUser.tips"
            placeholder="请输入个性标签"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">邮箱</div>
        <div class="info-edit-item-content">
          <input
            type="text"
            v-model="tyqUser.email"
            placeholder="请输入邮箱"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <button
          class="me-button pointSB"
          @click="handleClickEditUser"
        >提交</button>
      </div>
    </div>
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
    return {};
  },
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
        _self.$set(_self.tyqUser, 'avator', res.data.url);
      });
    },
    // 修改用户信息
    async handleClickEditUser() {
      var _self = this;
      if (!_self.tyqUser.username) {
        _self.$gMessage({
          title: '用户名不能为空!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      console.log(_self.tyqUser);
      let res = await _self.$http.post('/editUser', _self.tyqUser);
      if (res.data.affectedRows == 1) {
        _self.$http
          .get('/getUserById?userid=' + _self.tyqUser.userid)
          .then(result => {
            console.log(result);
            _self.tyqUser = result.data[0];
            // localStorage.setItem('tyqUser', JSON.stringify(result.data[0]));
            sessionStorage.setItem('tyqUser', JSON.stringify(result.data[0]));
            // _self.$parent.tyqUser = JSON.parse(localStorage.getItem('tyqUser'));
            _self.$parent.tyqUser = JSON.parse(
              sessionStorage.getItem('tyqUser')
            );
          });
      }
    }
  },
  created() {
    var _self = this;
    // console.log(_self);
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.info {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3.125rem 0 0 0;
  overflow-y: scroll;
  /* 火狐滚动条隐藏 */
  -ms-overflow-style: none;
  scrollbar-width: none;
  // 谷歌滚动条隐藏
  &::-webkit-scrollbar {
    display: none;
  }
}
.avator {
  width: 5rem;
  height: 5rem;
}
</style>