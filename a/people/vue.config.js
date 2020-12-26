// const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {
  lintOnSave: false,
  publicPath: '/',// './' 会导致刷新时出现空白页面
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`
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
  // 打包时压缩代码 需要先下载 compression-webpack-plugin
  // plugins: [
  //   new CompressionPlugin({
  //     algorithm: 'gzip', // 使用gzip压缩
  //     test: /\.js$|\.html$|\.css$/, // 匹配文件名
  //     filename: '[path].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
  //     minRatio: 1, // 压缩率小于1才会压缩
  //     threshold: 10240, // 对超过10k的数据压缩
  //     deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
  //   }),
  // ],
}