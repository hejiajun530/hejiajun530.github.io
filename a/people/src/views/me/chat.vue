
<template>
  <div class="chat-box">
    <header>聊天室人数：{{count}}</header>
    <div
      class="msg-box"
      ref="msg-box"
    >
      <!-- 信息列表 -->
      <div
        v-for="(i,index) in list"
        :key="index"
        class="msg"
        :style="i.userid == userid?'flex-direction:row-reverse':''"
      >
        <div class="user-head">
          <div class="head"></div>
        </div>
        <div class="user-msg">
          <span :class="i.userid == userid?'right':'left'">{{i.msg}}</span>
        </div>
      </div>
    </div>
    <!-- 信息发送框/按钮 -->
    <div class="input-box">
      <input
        type="text"
        ref="sendMsg"
        v-model="contentText"
        @keyup.enter="sendText()"
      />
      <div
        class="btn"
        :class="{['btn-active']:contentText}"
        @click="sendText()"
      >发送</div>
    </div>
  </div>
</template>
<script>
import mixin from '@/mixins.js';
export default {
  mixins: [mixin],
  data() {
    return {
      ws: null,
      count: 0,
      userid: null, //当前用户ID
      list: [], //聊天记录的数组
      contentText: '' //input输入的值
    };
  },
  created() {
    const _self = this;
    // _self.getUserID();
  },
  mounted() {
    const _self = this;
    _self.initWebSocket();
  },
  methods: {
    //根据时间戳作为当前用户ID
    // getUserID() {
    //   const _self = this;
    //   let time = new Date().getTime();
    //   _self.userId = time;
    // },
    //根据userID生成一个随机头像
    // getUserHead(id, type) {
    //   const _self = this;
    //   let ID = String(id);
    //   if (type == 'bck') {
    //     return Number(ID.substring(ID.length - 3));
    //   }
    //   if (type == 'polygon') {
    //     return Number(ID.substring(ID.length - 2));
    //   }
    //   if (type == 'rotate') {
    //     return Number(ID.substring(ID.length - 3));
    //   }
    // },
    //滚动条到底部
    scrollBottm() {
      const _self = this;
      let el = _self.$refs['msg-box'];
      el.scrollTop = el.scrollHeight;
    },
    //发送聊天信息
    sendText() {
      const _self = this;
      _self.$refs['sendMsg'].focus();
      if (!_self.contentText) {
        return;
      }
      let params = {
        userid: _self.tyqUser.userid,
        username: _self.tyqUser.username,
        avator: _self.tyqUser.avator,
        msg: _self.contentText,
        time: new Date()
      };
      _self.ws.send(JSON.stringify(params)); //调用WebSocket send()发送信息的方法
      _self.contentText = '';
      setTimeout(() => {
        _self.scrollBottm();
      }, 500);
    },
    //进入页面创建websocket连接
    initWebSocket() {
      const _self = this;
      //判断页面有没有存在websocket连接
      if (window.WebSocket) {
        // 192.168.0.115 是我本地IP地址 此处的 :8181 端口号 要与后端配置的一致
        let ws = new WebSocket('ws://192.168.199.172:8181');
        _self.ws = ws;
        ws.onopen = function(e) {
          console.log('服务器连接成功');
        };
        ws.onclose = function(e) {
          console.log('服务器连接关闭');
        };
        ws.onerror = function() {
          console.log('服务器连接出错');
        };
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let resData = JSON.parse(e.data);
          if (resData.funName == 'userCount') {
            _self.count = resData.users;
            _self.list = resData.chat;
            console.log(resData, 'userCount广播');
          } else {
            _self.list = [..._self.list, resData];
            console.log(resData, 'no广播');
          }
        };
      }
    }
  },
  beforeDestroy() {
    const _self = this;
    _self.ws.close();
    _self.ws.onclose = function(e) {
      console.log('服务器连接关闭');
    };
  }
};
</script>
<style lang="scss" scoped>
.chat-box {
  margin: 0 auto;
  background: #fafafa;
  position: absolute;
  height: 590px;
  width: 100%;
  max-width: 700px;
  header {
    position: fixed;
    width: 100%;
    height: 3rem;
    background: #409eff;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 1rem;
  }
  .msg-box {
    position: absolute;
    height: 500px;
    width: 100%;
    margin-top: 3rem;
    overflow-y: scroll;
    .msg {
      width: 95%;
      min-height: 2.5rem;
      margin: 1rem 0.5rem;
      position: relative;
      display: flex;
      justify-content: flex-start !important;
      .user-head {
        min-width: 2.5rem;
        width: 20%;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        .head {
          width: 1.2rem;
          height: 1.2rem;
        }
        // position: absolute;
      }
      .user-msg {
        width: 80%;
        // position: absolute;
        word-break: break-all;
        position: relative;
        z-index: 5;
        span {
          display: inline-block;
          padding: 0.5rem 0.7rem;
          border-radius: 0.5rem;
          margin-top: 0.2rem;
          font-size: 0.88rem;
        }
        .left {
          background: white;
          animation: toLeft 0.5s ease both 1;
        }
        .right {
          background: #53a8ff;
          color: white;
          animation: toright 0.5s ease both 1;
        }
        @keyframes toLeft {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        @keyframes toright {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      }
    }
  }
  .input-box {
    padding: 0 0.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    background: #fafafa;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 2.3rem;
      display: inline-block;
      width: 100%;
      padding: 0.5rem;
      border: none;
      border-radius: 0.2rem;
      font-size: 0.88rem;
    }
    .btn {
      height: 2.3rem;
      min-width: 4rem;
      background: #e0e0e0;
      padding: 0.5rem;
      font-size: 0.88rem;
      color: white;
      text-align: center;
      border-radius: 0.2rem;
      margin-left: 0.5rem;
      transition: 0.5s;
    }
    .btn-active {
      background: #409eff;
    }
  }
}
</style>