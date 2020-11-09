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
      <div class="message-title">{{text.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messageShow: false,
      text: {
        title: '消息提示',
        duration: 1000,
        type: 'success'
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
  top: -6.25rem;
  left: 50%;
  min-width: 31.25rem;
  height: 3.75rem;
  padding-left: 0.9375rem;
  box-sizing: border-box;
  background-color: #f0f9eb;
  font-size: 1.375rem;
  color: #74c55c;
  border-radius: 0.375rem;
  transform: translate(-50%, 0);
  animation: dowm 1s forwards;
  z-index: 999;
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
    top: -6.25rem;
  }
  100% {
    top: 1.875rem;
  }
}
@keyframes up {
  0% {
    top: 1.875rem;
  }
  100% {
    top: -6.25rem;
  }
}
.message .iconfont {
  margin-right: 0.625rem;
}
.message-title {
  height: 3.75rem;
  line-height: 3.75rem;
}
</style>