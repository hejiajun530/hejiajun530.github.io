const express = require('express')
const app = express()
const https = require('https');
const fs = require('fs');
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

app.use('/', express.static(__dirname + '/dist'));
app.use('/upload', express.static(__dirname + '/upload'));

require('./web/index')(app);
require('./admin/index')(app);

// websocket
var userNum = 0; //统计在线人数
var chatList = [];//记录聊天记录
var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({ port: 8181 }); //8181 与前端相对应
//调用 broadcast 广播，实现数据互通和实时更新
wss.broadcast = function (msg) {
  wss.clients.forEach(function each(client) {
    client.send(msg);
  });
};
wss.on('connection', function (ws) {
  userNum++;//建立连接成功在线人数 +1
  wss.broadcast(JSON.stringify({ funName: 'userCount', users: userNum, chat: chatList })); //建立连接成功广播一次当前在线人数
  console.log('Connected clients:', userNum);
  //接收前端发送过来的数据
  ws.on('message', function (e) {
    var resData = JSON.parse(e)
    console.log('接收到来自clent的消息：' + resData.msg)
    console.log(resData)
    chatList.push(resData);//每次发送信息，都会把信息存起来，然后通过广播传递出去，这样此每次进来的用户就能看到之前的数据
    wss.broadcast(JSON.stringify(resData)); //每次发送都相当于广播一次消息

  });
  ws.on('close', function (e) {
    userNum--;//建立连接关闭在线人数 -1
    wss.broadcast(JSON.stringify({ funName: 'userCount', users: userNum, chat: chatList }));//建立连接关闭广播一次当前在线人数
    console.log('Connected clients:', userNum);
    console.log('长连接已关闭')
  })
})
console.log('服务器创建成功')

// const server = https.createServer(options, app);
// app.listen(80, () => {
//   console.log('http://www.tyq121.top')
// })
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
