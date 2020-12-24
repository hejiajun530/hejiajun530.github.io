<template>
  <div class="login">
    <div class="login-box positionCenter">
      <div class="login-box-title">
        <h2>REGIST</h2>
        <h4>注册</h4>
      </div>
      <div class="login-box-form text-left">
        <div class="login-box-form-input">
          <input
            type="text"
            v-model="username"
            placeholder="用户名"
            @keyup.enter="handleClickRegist"
          >
          <p>{{usernameMsg}}</p>
        </div>
        <div class="login-box-form-input">
          <input
            type="password"
            v-model="password"
            placeholder="密码"
            @keyup.enter="handleClickRegist"
          >
          <p>{{passwordMsg}}</p>
        </div>
        <div class="login-box-form-input">
          <input
            type="password"
            v-model="repassword"
            placeholder="确认密码"
            @keyup.enter="handleClickRegist"
          >
          <p>{{repasswordMsg}}</p>
        </div>
        <div class="login-box-form-input">
          <input
            type="text"
            v-model="email"
            placeholder="邮箱"
            @keyup.enter="handleClickRegist"
          >
          <p>{{emailMsg}}</p>
        </div>
        <div
          class="login-box-form-button  text-center"
          @click="handleClickRegist"
        >注册</div>
        <a
          href="javascript:;"
          @click="$router.push('/login')"
        >去登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNum: '',
      username: '',
      password: '',
      repassword: '',
      email: '',
      usernameMsg: '',
      passwordMsg: '',
      repasswordMsg: '',
      emailMsg: ''
    };
  },
  methods: {
    // 注册
    handleClickRegist() {
      var _self = this;
      var regEmail = /^[_0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,5}$/; //邮箱验证
      var regPassword = /^[0-9a-zA-Z]{6,16}$/; //密码验证
      var regUsername = /^[\u0391-\uFFE50-9a-zA-Z]{2,10}$/; //用户名验证
      // 用户名简单验证
      if (!regUsername.test(_self.username)) {
        _self.usernameMsg = '用户名为长度2-10位的汉字英文数字!';
        return false;
      } else {
        _self.usernameMsg = '';
      }
      // 密码简单验证
      if (!regPassword.test(_self.password)) {
        _self.passwordMsg = '密码为长度6-16位的英文数字!';
        return false;
      } else {
        _self.passwordMsg = '';
      }
      // 确认密码简单验证
      if (_self.password != _self.repassword) {
        _self.repasswordMsg = '两次密码不一致!';
        return false;
      } else {
        _self.repasswordMsg = '';
      }
      // 邮箱简单验证
      if (!regEmail.test(_self.email)) {
        _self.emailMsg = '邮箱格式不正确!';
        return false;
      } else {
        _self.emailMsg = '';
      }

      // 调用注册接口
      var data = {
        username: _self.username,
        password: _self.password,
        email: _self.email,
        role: 'normal'
      };
      _self.$http.post('/regist', data).then(res => {
        console.log(res);
        if (res.data.flag) {
          _self.$gMessage({
            title: res.data.msg,
            duration: 2000,
            type: 'success'
          });
          _self.$router.push('/login');
        } else {
          _self.$gMessage({
            title: res.data.msg,
            duration: 2000,
            type: 'error'
          });
        }
      });
    }
  },
  created() {},
  mounted() {
    var _self = this;
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: url('../assets/img/loginRegistbk.jpg') no-repeat center center;
  background-size: cover;
}
.login-box {
  width: 25rem;
  height: 70%;
  .login-box-title {
    h2 {
      font-size: 3.75rem;
      color: #ffffff;
      letter-spacing: 0.5rem;
      text-shadow: 0.1875rem 0.1875rem 0.3125rem #ffffff;
      padding: 0 0 1.875rem 0;
    }
    h4 {
      font-size: 1.875rem;
      color: #47918a;
      text-shadow: 0.125rem 0.125rem 0.25rem #47918a;
    }
  }
  .login-box-form {
    input {
      height: 3.125rem;
      background: rgba(255, 255, 255, 0.6);
      font-size: 1.375rem;
      color: #000000;
      padding: 0 0 0 1.25rem;
      border-radius: 0.3125rem;
    }
    .login-box-form-input {
      &:first-child {
        margin: 3.125rem 0 0 0;
      }
      height: 6.25rem;
      input {
        width: 100%;
      }
      p {
        font-size: 1.125rem;
        color: red;
        margin: 0.625rem 0 0 0;
      }
    }
    .login-box-form-checkout {
      width: 100%;
      margin: 3.125rem auto 0 auto;
      input {
        width: 12.5rem;
      }
      #loginCheckout {
        width: 6.25rem;
        height: 3.125rem;
        background: #000000;
        cursor: pointer;
      }
    }
    .login-box-form-button {
      width: 100%;
      height: 3.125rem;
      font-size: 1.375rem;
      color: #ffffff;
      line-height: 3.125rem;
      background: #47918a;
      margin: 0 auto;
      border-radius: 0.3125rem;
      cursor: pointer;
    }
    a {
      display: inline-block;
      margin: 1.25rem 0 0 0;
    }
  }
}
</style>
