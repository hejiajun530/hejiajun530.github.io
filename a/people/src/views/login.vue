<template>
  <div class="login">
    <div class="login-box positionCenter">
      <div class="login-box-title">
        <h2>LOGIN</h2>
        <h4>登录</h4>
      </div>
      <div class="login-box-form text-left">
        <div class="login-box-form-input">
          <input
            type="text"
            v-model="username"
            placeholder="用户名"
          >
          <p>{{usernameMsg}}</p>
        </div>
        <div class="login-box-form-input">
          <input
            type="password"
            v-model="password"
            placeholder="密码"
          >
          <p>{{passwordMsg}}</p>
        </div>
        <div class="login-box-form-input">
          <div class="login-box-form-checkout d-flex jc-between ai-center">
            <input
              type="text"
              v-model="checkcode"
              placeholder="验证码"
            >
            <canvas
              id="loginCheckout"
              ref="loginCheckout"
              @click="handleLoginCheckCode"
            >当前浏览器不支持canvas，请更换浏览器后再试</canvas>
          </div>
          <p>{{checkcodeMsg}}</p>
        </div>
        <div
          class="login-box-form-button  text-center"
          @click="handleClickLogin"
        >登录</div>
        <a
          href="javascript:;"
          @click="$router.push('/regist')"
        >还未注册?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomNum: '', // 1000-9999随机数
      username: '', // 用户名
      password: '', // 密码
      checkcode: '', // 验证码
      usernameMsg: '', // 用户名提示
      passwordMsg: '', // 密码提示
      checkcodeMsg: '' // 验证码提示
    };
  },
  methods: {
    // 生成验证码
    handleLoginCheckCode() {
      var _self = this;
      var canvas = _self.$refs.loginCheckout;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 设置字体
      ctx.font = '60px bold 黑体';
      // 设置颜色
      ctx.fillStyle = '#fff';
      // 设置水平对齐方式
      ctx.textAlign = 'center';
      // 设置垂直对齐方式
      ctx.textBaseline = 'middle';
      // 随机数 1000-9999
      _self.randomNum = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
      // 绘制文字（参数：要写的字，x坐标，y坐标）
      ctx.fillText(_self.randomNum, canvas.width / 2, canvas.height / 2);
      // console.log(canvas);
    },
    // 登录按钮
    handleClickLogin() {
      var _self = this;
      // 用户名简单验证
      if (
        _self.username.trim() == '' ||
        _self.username.trim().length == 0 ||
        _self.username.trim() == null
      ) {
        _self.usernameMsg = '用户名不能为空!';
        return false;
      } else if (
        _self.username.trim().length < 2 ||
        _self.username.trim().length > 10
      ) {
        _self.usernameMsg = '用户名的长度为2-10位!';
        return false;
      } else {
        _self.usernameMsg = '';
      }
      // 密码简单验证
      if (
        _self.password.trim() == '' ||
        _self.password.trim().length == 0 ||
        _self.password.trim() == null
      ) {
        _self.passwordMsg = '密码不能为空!';
        return false;
      } else if (
        _self.password.trim().length < 6 ||
        _self.password.trim().length > 16
      ) {
        _self.passwordMsg = '密码的长度为6-16位!';
        return false;
      } else {
        _self.passwordMsg = '';
      }
      // 验证码简单验证
      if (_self.randomNum != _self.checkcode) {
        // alert('验证码错误');
        _self.checkcodeMsg = '验证码错误!';
        _self.handleLoginCheckCode();
        return false;
      } else {
        _self.checkcodeMsg = '';
      }
      _self.handleLoginCheckCode();

      // 用户登录 接口
      _self.$http
        .get(`/login?username=${_self.username}&password=${_self.password}`)
        .then(res => {
          console.log(res);
          if (res.data.flag) {
            _self.$gMessage({
              title: res.data.msg,
              duration: 2000,
              type: 'success'
            });
            localStorage.setItem('tyqUser', JSON.stringify(res.data.res[0]));
            localStorage.setItem('tyqToken', res.data.token);
            _self.$router.push('/home');
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
    _self.handleLoginCheckCode();
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100vh;
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
      margin: 0 auto;
      input {
        width: 16.5rem;
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
