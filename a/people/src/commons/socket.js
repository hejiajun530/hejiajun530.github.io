function initWebsocket() {
  let that = this;
  if (window.WebSocket) {
    var ws = new WebSocket("ws://localhost:8001");
    that.ws = ws;
    //监听连接成功
    ws.onopen = function (e) {
      console.log("连接服务器成功");
      let msg = {
        type: 1,
        uid: that.uid
      };
      ws.send(JSON.stringify(msg));//向服务器发送信息，这个地方我是先把每一个访问的user都先存储起来方便实现1对1对话
    };
    //监听连接失败
    ws.onclose = function (e) {
      console.log("服务器关闭");
    };
    //监听报错
    ws.onerror = function () {
      console.log("连接出错");
    };
    // 接收服务器的消息
    ws.onmessage = function (e) {
      let message = JSON.parse(e.data);
      console.log(message);
      that.chatList.push(message);
    };
  }
}
initWebsocket();