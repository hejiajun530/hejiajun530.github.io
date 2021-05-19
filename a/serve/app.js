const express = require('express')
const app = express()
const https = require('https');
const fs = require('fs');
const formidable = require("formidable");
const path = require("path")
const options = {
  key: fs.readFileSync('./ssl/2_tyq121.top.key'),
  cert: fs.readFileSync('./ssl/1_tyq121.top_bundle.crt')
}

// 历史组件
var history = require('connect-history-api-fallback')
app.use(history())

// 全局生成一个密钥  用于用户的token
app.set('secret', 'asfasdfgsdagdsfg')

app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/abc'));
app.use('/xcx', express.static(__dirname + '/xcx'));//这个很重要，必须要这个才能拿到图片链接，而不是进入路由，有兴趣的同学可以删掉试验一下

// app.post("/uploadXcx", (req, res) => {
//     var form = new formidable.IncomingForm();//既处理表单，又处理文件上传
//     //设置文件上传文件夹/路径，__dirname是一个常量，为当前路径
//     let uploadDir = path.join(__dirname, "/xcx");
//     form.uploadDir = uploadDir;//本地文件夹目录路径

//     form.parse(req, (err, fields, files) => {
//       console.log(files)
//         let oldPath = files.file.path;//这里的路径是图片的本地路径
//         console.log(files.file.name)//图片传过来的名字
//         let newPath = path.join(path.dirname(oldPath), files.file.name);
//         //这里我传回一个下载此图片的Url
//         var downUrl = "http://localhost:3000/xcx/" + files.file.name;//这里是想传回图片的链接
//         fs.rename(oldPath, newPath, () => {//fs.rename重命名图片名称
//             res.send(downUrl)
//         })
//     })
// })

// require('./xcxhttp/index')(app);
// const server = https.createServer(options, app);
// server.listen(3000, () => {
//   console.log('http://www.tyq121.top:3000')
// })
app.listen(3000, () => {
  console.log('http://localhost:3000')
})


// // let code = params.code;//获取小程序传来的code
// // let encryptedData = params.encryptedData;//获取小程序传来的encryptedData
// // let iv = params.iv;//获取小程序传来的iv
// let appid = "wxfac328c3ee26f0d2";//自己小程序后台管理的appid，可登录小程序后台查看
// let secret = "3a9768e01b9322ddc18221208d2cc663";//小程序后台管理的secret，可登录小程序后台查看
// let grant_type = "authorization_code";// 授权（必填）默认值

// //请求获取openid
// let url = "https://api.weixin.qq.com/sns/jscode2session?grant_type="+grant_type+"&appid="+appid+"&secret="+secret+"&js_code="+grant_type;

// let openid,sessionKey;

// // let https = require("https");

// https.get(url, (res) => {
//     res.on('data', (d) => {
//         console.log('返回的信息: ', JSON.parse(d));
//         openid = JSON.parse(d).openid;//得到openid
//         sessionKey = JSON.parse(d).session_key;//得到session_key

//     }).on('error', (e) => {
//         console.error(e);
//     });
// });
