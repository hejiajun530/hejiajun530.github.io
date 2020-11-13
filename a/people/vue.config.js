module.exports = {
  lintOnSave: false,
  publicPath: '/',// './' 会导致刷新时出现空白页面
  runtimeCompiler: true,
  // devServer: {
  //   proxy: { // 为ip地址接口配置代理，解决跨域
  //     '/proxy/': {
  //       'target': 'https://ip.ws.126.net/', //ip地址接口地址
  //       'secure': true, // false为http访问，true为https访问
  //       'changeOrigin': true, // 跨域访问设置，true代表跨域
  //       'pathRewrite': { // 路径改写规则
  //         '^/proxy': '/' // 以/proxy/为开头的改写为''
  //       }
  //     }
  //   }
  // }
}