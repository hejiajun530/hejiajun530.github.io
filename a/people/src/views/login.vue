<template>
  <div class="login">
    <div class="login-box positionCenter">
      <div class="login-box-title">
        <h2>LOGIN</h2>
        <h4>登录</h4>
      </div>
      <div class="login-box-form text-left">
        <input
          type="text"
          placeholder="用户名"
        >
        <input
          type="password"
          placeholder="密码"
        >
        <div class="login-box-form-checkout d-flex jc-between ai-center">
          <input
            type="text"
            placeholder="验证码"
          >
          <canvas id="loginCheckout"></canvas>
        </div>
        <div class="login-box-form-button  text-center">登录</div>
        <a href="javascript:;">还未注册?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("http://up.deskcity.org/pic_source/76/8b/1b/768b1b32132391e1681468dde36ccbf6.jpg")
    no-repeat center center;
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
    & > input {
      width: 100%;
      margin: 3.125rem 0 0 0;
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
      }
    }
    .login-box-form-button {
      width: 100%;
      height: 3.125rem;
      font-size: 1.375rem;
      color: #ffffff;
      line-height: 3.125rem;
      background: #47918a;
      margin: 3.125rem auto 0;
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
