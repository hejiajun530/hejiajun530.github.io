// 导入express模块
const express = require('express');
// 处理路径
const path = require('path');
// 引入dateformat模块
// 使用dateformat模块时需要配合art-template模块使用
const dateFormat = require('dateformat');
const template = require('art-template');
// 创建服务器
const app = express();
// 用来处理请求post请求
const bodyParser = require('body-parser');
// 处理post请求
app.use(bodyParser.urlencoded({ extended: false }));

// 告诉express框架模板路径
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板默认后缀名是什么
app.set('view engine', 'art');
// 告诉express框架模板引用的是什么模板引擎
app.engine('art', require('express-art-template'));

template.defaults.imports.dateFormat = dateFormat;
// 开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
app.use('/upload', express.static(__dirname + '/upload'));

// // 引入路由模块
// const admin = require('./route/admin');
// const home = require('./route/home');

// // 拦截请求，判断用户是否为登录状态
// app.use('/admin', require('./middleware/loginGuard'));
// // 为路由匹配路径
// app.use('/home', home);
// app.use('/admin', admin);
require('./route/index')(app);

app.get('/', function (req, res) {
  res.render('login.art', {
  });
});
app.get('/index', function (req, res) {
  console.log(req);
  res.render('index.art', {
  });
});
app.get('/add', function (req, res) {
  console.log(req);
  res.render('add.art', {
  });
});

// 重定向
// app.use((err, req, res, next) => {
//   const result = JSON.parse(err);
//   let params = [];
//   for (let attr in result) {
//     if (attr != 'path') {
//       params.push(attr + '=' + result[attr]);
//     }
//   }
//   // console.log(1111);

//   res.redirect(`${result.path}?${params.join('&')}`);
// });

// 创建监听端口号
app.listen(3000);
console.log('服务器启动成功: 3000');