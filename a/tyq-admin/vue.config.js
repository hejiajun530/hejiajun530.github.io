module.exports = {
  lintOnSave: false,
  publicPath: '/',// './' 会导致刷新时出现空白页面
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/styles/main.scss";`
        // 有问题去vue官网找问题，一下链接，同时配置了这个scss，那么在main.js中不能再次导入scss文件，不然会冲突
        // https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
      }
    }
  }
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