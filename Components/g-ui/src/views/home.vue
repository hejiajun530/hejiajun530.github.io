<template>
  <div class="home">
    <div class="home-left">
      <div
        class="home-left-item"
        @click="$router.push('/')"
      >弹出框</div>
      <div
        class="home-left-item"
        @click="$router.push('/advert')"
      >通知</div>
      <div
        class="home-left-item"
        @click="$router.push('/cascader')"
      >级联</div>
      <div
        class="home-left-item"
        @click="$router.push('/checkbox')"
      >多选框</div>
      <div
        class="home-left-item"
        @click="$router.push('/count')"
      >计数</div>
      <div
        class="home-left-item"
        @click="$router.push('/dateSelect')"
      >日期选择框</div>
      <div
        class="home-left-item"
        @click="$router.push('/echarts')"
      >图表</div>
      <div
        class="home-left-item"
        @click="$router.push('/load')"
      >加载</div>
      <div
        class="home-left-item"
        @click="$router.push('/message')"
      >消息提示框</div>
      <div
        class="home-left-item"
        @click="$router.push('/pop')"
      >上方提示框</div>
      <div
        class="home-left-item"
        @click="$router.push('/radio')"
      >单选按钮</div>
      <div
        class="home-left-item"
        @click="$router.push('/rili')"
      >日历</div>
      <div
        class="home-left-item"
        @click="$router.push('/select')"
      >下拉选择框</div>
      <div
        class="home-left-item"
        @click="$router.push('/star')"
      >星级评分</div>
      <div
        class="home-left-item"
        @click="$router.push('/swiper')"
      >轮播图</div>
      <div
        class="home-left-item"
        @click="$router.push('/switch')"
      >开关</div>
      <div
        class="home-left-item"
        @click="$router.push('/table')"
      >表格</div>
      <div
        class="home-left-item"
        @click="$router.push('/timeCount')"
      >倒计时</div>
      <div
        class="home-left-item"
        @click="$router.push('/upload')"
      >上传图片/文件</div>
      <div
        class="home-left-item"
        @click="$router.push('/warn')"
      >警告框</div>
      <div
        class="home-left-item"
        @click="$router.push('/mobile')"
      >移动端简单方法</div>
      <div
        class="home-left-item"
        @click="$router.push('/styleCss')"
      >css样式/特效</div>
    </div>
    <div class="home-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  mounted() {
    var _self = this;
    // setInterval(function() {
    //   _self.startTime = new Date().getTime();
    // }, 1000);
  },
  methods: {}
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* .home-alert {
  background: #dddddd;
} */
.home-left {
  width: 15.625rem;
  height: 100%;
  box-shadow: 0 0 0.3125rem #222222;
  overflow-y: auto;
}
.home-right {
  flex: 1;
  height: 100%;
  padding: 3.125rem 1.875rem 1.875rem 1.875rem;
  box-sizing: border-box;
  overflow-y: auto;
}
.home-left-item {
  width: 100%;
  height: 2.5rem;
  text-align: left;
  padding: 0 0 0 0.9375rem;
  line-height: 2.5rem;
  border-bottom: 1px solid #000000;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
}
</style>