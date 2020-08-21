<template>
  <div>
    <div
      class="message flex-start-center"
      :class="messageShow ? 'up ' + text.type : ' ' + text.type"
    >
      <div
        class="iconfont icon-dui"
        v-if="text.type == 'success'"
      ></div>
      <div
        class="iconfont icon-cuowu"
        v-if="text.type == 'error'"
      ></div>
      <div
        class="iconfont icon-info"
        v-if="text.type == 'info'"
      ></div>
      <div
        class="iconfont icon-jingshigantanhao2"
        v-if="text.type == 'warn'"
      ></div>
      <div>{{text.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageShow: false,
      text: {
        title: "消息提示",
        duration: 1000,
        type: "success"
      }
    };
  },
  mounted() {
    var _self = this;
    _self.$nextTick(function() {
      setTimeout(() => {
        _self.messageShow = true;
      }, _self.text.duration);
    });
  },
  methods: {}
};
</script>

<style scoped>
.message {
  position: fixed;
  top: -100px;
  left: 50%;
  min-width: 500px;
  height: 50px;
  padding-left: 15px;
  box-sizing: border-box;
  background-color: #f0f9eb;
  color: #74c55c;
  border-radius: 6px;
  transform: translate(-50%, 0);
  animation: dowm 1s forwards;
}
.message.success {
  background-color: #f0f9eb;
  color: #74c55c;
}
.message.warn {
  background-color: #fdf6ec;
  color: #e7b291;
}
.message.info {
  background-color: #edf2fc;
  color: #a8b0b6;
}
.message.error {
  background-color: #fef0f0;
  color: #f69c9b;
}
.up {
  animation: up 0.6s forwards;
}
@keyframes dowm {
  0% {
    top: -100px;
  }
  100% {
    top: 30px;
  }
}
@keyframes up {
  0% {
    top: 30px;
  }
  100% {
    top: -100px;
  }
}
.message .iconfont {
  margin-right: 10px;
}
</style>