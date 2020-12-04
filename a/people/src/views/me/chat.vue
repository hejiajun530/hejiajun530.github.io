
<template>
  <div class="chat">
    <header>聊天室人数：{{count}}</header>
    <div
      class="msg-box"
      ref="msg-box"
    >
      <!-- 信息列表 -->
      <div
        v-for="(item,index) in list"
        :key="index"
        class="msg d-flex ai-start"
        :class="item.userid == tyqUser.userid ? 'jc-end' : 'jc-start'"
      >
        <!-- :style="item.userid == tyqUser.userid ? 'float: right;' : ''" -->
        <!-- 头像 -->
        <div class="user-head d-flex jc-center ai-center">
          <img
            :src="item.avator"
            v-if="item.avator"
          >
          <img
            src="@/assets/logo.png"
            v-else
          >
        </div>
        <!-- 信息 -->
        <div
          class="user-msg text-left"
          :style="item.userid == tyqUser.userid ? 'order: -1' : ''"
        >
          <div
            class="user-msg-info d-flex ai-center"
            :class="item.userid == tyqUser.userid ? 'jc-end' : 'jc-start'"
          >
            <div class="user-msg-info-name">{{item.username}}</div>
            <div class="user-msg-info-time">{{toymd(item.time, 'yy-mm-dd hh:mm:ss')}}</div>
          </div>
          <div class="user-msg-content">{{item.msg}}</div>
        </div>
      </div>
    </div>
    <!-- 信息发送框/按钮 -->
    <div class="input-box d-flex jc-between ai-center">
      <input
        type="text"
        ref="sendMsg"
        v-model="contentText"
        @keyup.enter="sendText()"
      />
      <div
        class="btn text-center"
        :class="{['btn-active']:contentText}"
        @click="sendText"
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
  },
  mounted() {
    const _self = this;
    _self.initWebSocket();
  },
  methods: {
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
          _self.$gMessage({
            title: '服务器连接成功',
            duration: 2000
          });
        };
        ws.onclose = function(e) {
          console.log('服务器连接关闭');
          _self.$gMessage({
            title: '服务器连接关闭',
            duration: 2000,
            type: 'error'
          });
        };
        ws.onerror = function() {
          console.log('服务器连接出错');
          _self.$gMessage({
            title: '服务器连接出错',
            duration: 2000,
            type: 'error'
          });
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
      _self.$gMessage({
        title: '服务器连接关闭',
        duration: 2000,
        type: 'error'
      });
    };
  }
};
</script>

<style lang="scss" scoped>
.chat {
  background: #fafafa;
  position: absolute;
  height: 590px;
  width: 700px;
  header {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background: #409eff;
    font-weight: bold;
    color: white;
  }
  .msg-box {
    height: 500px;
    width: 100%;
    overflow-y: scroll;
    .msg {
      min-height: 2.5rem;
      margin: 1rem 0.5rem;
      .user-head {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: #f1f1f1;
        overflow: hidden;
        margin: 0 15px;
        img {
          width: 100%;
          height: 100%;
        }
        // position: absolute;
      }
      .user-msg {
        .user-msg-info {
          .user-msg-info-name {
            font-size: 20px;
            font-weight: 600;
            margin: 0 20px 0 0;
          }
          .user-msg-info-time {
            font-size: 14px;
            color: #888888;
          }
        }
        .user-msg-content {
          max-width: 350px;
          padding: 8px 10px;
          margin-top: 0.2rem;
          background: skyblue;
          border-radius: 0.5rem;
          word-break: break-all;
        }
      }
    }
  }
  .input-box {
    padding: 0 0.3125rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    background: #fafafa;
    box-shadow: 0 0 5px #ccc;
    input {
      height: 2.3rem;
      width: 100%;
      padding: 0.5rem;
    }
    .btn {
      height: 2.3rem;
      min-width: 4rem;
      background: #e0e0e0;
      padding: 0.5rem;
      color: white;
      margin-left: 0.5rem;
      transition: 0.5s;
    }
    .btn-active {
      background: #409eff;
    }
  }
}
</style>