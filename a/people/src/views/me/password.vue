<template>
  <div class="password">
    <h3 class="me-title positionTopLeft">修改密码</h3>
    <div class="info-edit">
      <div class="info-edit-item">
        <div class="info-edit-item-label">新密码</div>
        <div class="info-edit-item-content">
          <input
            type="password"
            v-model="password"
            placeholder="请输入新密码"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <div class="info-edit-item-label">确认密码</div>
        <div class="info-edit-item-content">
          <input
            type="password"
            v-model="repassword"
            placeholder="请再次输入新密码"
            class="me-input"
          >
        </div>
      </div>
      <div class="info-edit-item">
        <button
          class="me-button pointSB"
          @click="handleClickEditPassword"
        >提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  data() {
    return {
      password: '',
      repassword: ''
    };
  },
  methods: {
    // 修改密码
    handleClickEditPassword() {
      var _self = this;
      if (!_self.password || !_self.repassword) {
        _self.$gMessage({
          title: '密码不能为空!',
          type: 'error'
        });
        return false;
      } else if (_self.password.length < 6 || _self.password.length > 16) {
        _self.$gMessage({
          title: '密码长度为6-16!',
          type: 'error'
        });
        return false;
      } else if (_self.password != _self.repassword) {
        _self.$gMessage({
          title: '两次密码不一致!',
          type: 'error'
        });
        return false;
      }
      _self.$set(_self.tyqUser, 'password', _self.password);
      // console.log(_self.tyqUser);
      _self.$http.post('/editUser', _self.tyqUser).then(res => {
        console.log(res);
        if (res.data.affectedRows == 1) {
          localStorage.removeItem('tyqUser');
          localStorage.removeItem('tyqToken');
          _self.$router.push('/login');
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.password {
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