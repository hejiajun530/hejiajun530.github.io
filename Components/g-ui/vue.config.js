module.exports = {
  publicPath: "./",
  devServer: {
    port: 8083,
    proxy: {
      '/': {
        target: 'http://192.168.199.172/',//'http://webapi.natapp1.cc/',//对应自己的接口
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
    // // open: process.platform === 'darwin',
    // // host: 'localhost',
    // port: 8080,
    // // open: true, //配置自动启动浏览器
    // proxy: {
    //     '/': {
    //         target: 'http://localhost:80/', //对应自己的接口
    //         changeOrigin: true,
    //         ws: false,
    //         pathRewrite: {
    //             '^/': ''
    //         }
    //     }
    // }
  },
  chainWebpack: config => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          audio: 'src',
        }
        return options;
      });
  }
}