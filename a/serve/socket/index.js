// var ws = require("nodejs-websocket");
// let test = {};
// let users = [];
// console.log("开始链接");
// //如果群聊可以使用广播，这里没用
// function boardCast(obj) {
//   //群聊
//   // server.connections.forEach(function (conn) {
//   //   conn.sendText(JSON.stringify(obj));
//   // })
// }

// var server = ws.createServer(function (conn) {
//   conn.on("text", function (res) {
//     //处理前端发来的请求
//     data = JSON.parse(res);
//     console.log("来人了");
//     console.log(data);
//     //把所有uid对应的链接conn存到一个对象里面
//     if (data.type == 1) {
//       //如果是新用户就走这里添加到user
//       if (users.indexOf(data.uid) == -1) {
//         users.push(data.uid);
//         test[`${data.uid}`] = conn;
//       }
//     } else {
//       console.log('发送')
//       //没有type就代表是发送信息
//       data.bridge.forEach(item => {
//         console.log(test[item]);
//         test[item].send(JSON.stringify(data));
//       });
//     }
//   })

//   conn.on("close", function (code, reason) {
//     console.log("关闭连接")
//   });
//   conn.on("error", function (code, reason) {
//     console.log("异常关闭")
//   });
// }).listen(8001)
// console.log("websocket建立完毕")
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
    chatList.push({ userId: resData.userId, content: resData.msg });//每次发送信息，都会把信息存起来，然后通过广播传递出去，这样此每次进来的用户就能看到之前的数据
    wss.broadcast(JSON.stringify({ userId: resData.userId, msg: resData.msg })); //每次发送都相当于广播一次消息

  });
  ws.on('close', function (e) {
    userNum--;//建立连接关闭在线人数 -1
    wss.broadcast(JSON.stringify({ funName: 'userCount', users: userNum, chat: chatList }));//建立连接关闭广播一次当前在线人数
    console.log('Connected clients:', userNum);
    console.log('长连接已关闭')
  })
})
console.log('服务器创建成功')