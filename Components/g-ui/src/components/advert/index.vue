<template>
  <div>
    <div
      class="advert"
      :class="color"
    >
      <div
        class="advert-icon iconfont icon-dui"
        v-if="color == 'success'"
      ></div>
      <div
        class="advert-icon iconfont icon-cuowu"
        v-if="color == 'error'"
      ></div>
      <div
        class="advert-icon iconfont icon-info"
        v-if="color == 'info'"
      ></div>
      <div
        class="advert-icon iconfont icon-jingshigantanhao2"
        v-if="color == 'warnning'"
      ></div>
      <div class="advert-text">
        <div
          class="advert-text-list"
          :class="type"
        >
          <div
            class="advert-text-list-item"
            v-for="(item, index) in title"
            :key="index"
          >{{item}}</div>
          <div
            class="advert-text-list-item"
            v-for="item in title"
            :key="item.id"
          >{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type", "title", "color"],
  data() {
    return {
      warnShow: true
    };
  },
  mounted() {
    var _self = this;
    var duration = _self.title.length + 1;
    var lists = document.querySelectorAll(".advert-text-list");
    for (let i = 0; i < lists.length; i++) {
      lists[i].style.animationDuration = duration + "s";
      lists[i].style.width = (_self.title.length + 1) * 500 + "px";
      lists[i].style.height = _self.title.length * 35 + "px";
    }
  },
  methods: {
    // 关闭警告框
    handleClickCloseWarn() {
      var _self = this;
      _self.warnShow = false;
    }
  }
};
</script>
<style scoped>
/* advert 广告滚动条 */
.advert.success {
  background-color: #f0f9eb;
  color: #74c55c;
}
.advert.warnning {
  background-color: #fdf6ec;
  color: #e7b291;
}
.advert.info {
  background-color: #edf2fc;
  color: #a8b0b6;
}
.advert.error {
  background-color: #fef0f0;
  color: #f69c9b;
}
.advert {
  width: 500px;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0 0 10px;
  box-sizing: border-box;
  background-color: #fef0f0;
  color: #f69c9b;
  border-radius: 5px;
}
.advert-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 100%;
  margin-right: 10px;
}
.advert-text {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
.advert-text-list {
  height: 100%;
}
.advert-text-list.column {
  animation: circleY 1s linear infinite;
}
.advert-text-list.row {
  display: flex;
  justify-content: flex-start;
  animation: circleX 3s linear infinite;
}
@keyframes circleX {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
@keyframes circleY {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -100%);
  }
}
.advert-text-list-item {
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
}
</style>