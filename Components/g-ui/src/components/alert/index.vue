<template>
  <div>
    <!-- alert 弹出提示 -->
    <div
      class="alert-mask"
      v-if="isShow"
    >
      <div
        class="alert"
        ref="alertDom"
      >
        <div
          class="alert-title flex-between-center"
          @mousedown.self="handleMouseDownAlert"
          @mousemove.self="handleMouseMoveAlert"
          @mouseup.self="handleMouseUpAlert"
        >
          <!-- @mouseleave.self="handleMouseLeaveAlert" -->
          <div>{{text.title}}</div>
          <div
            class="alert-title-close flex-center-center"
            @click="handleClickOk('close')"
          >×</div>
        </div>
        <div class="alert-content">{{text.content}}</div>
        <div class="alert-bottom flex-end-center">
          <button
            @click="handleClickOk('cancel')"
            v-if="text.cancel"
          >{{text.btn.cancelVal}}</button>
          <button
            @click="handleClickOk('confirm')"
            v-if="text.confirm"
          >{{text.btn.confirmVal}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alert",
  data() {
    return {
      isShow: true,
      text: {
        title: "",
        content: "",
        cancel: true,
        confirm: true,
        btn: {
          confirmVal: "确定",
          cancelVal: "取消"
        }
      },
      // 是否随着鼠标移动
      moveFlag: false,
      moveX: 0,
      moveY: 0,
      offsetX: 0,
      offsetY: 0
    };
  },
  methods: {
    // 确定/取消/关闭 事件
    handleClickOk(name) {
      var _self = this;
      var type = "";
      if (name == "close") {
        type = "close";
      } else if (name == "cancel") {
        type = "cancel";
      } else if (name == "confirm") {
        type = "confirm";
      }
      this.callback(type);
      this.isShow = false;
    },
    // 鼠标按下事件
    handleMouseDownAlert(e) {
      var _self = this;
      // console.log("按下");
      // console.log(e);
      _self.moveFlag = true;
      _self.offsetX = e.offsetX;
      _self.offsetY = e.offsetY;
      _self.$refs.alertDom.style.cursor = "move";
    },
    // 鼠标移动事件
    handleMouseMoveAlert(e) {
      var _self = this;
      if (_self.moveFlag) {
        var dom = _self.$refs.alertDom;
        _self.moveX = e.clientX - _self.offsetX;
        _self.moveY = e.clientY - _self.offsetY;
        if (_self.moveX < 0) {
          _self.moveX = 0;
        }
        if (_self.moveY < 0) {
          _self.moveY = 0;
        }
        // console.log(_self.moveX, _self.moveY, e.clientX, e.clientY);
        dom.style.top = _self.moveY + "px";
        dom.style.left = _self.moveX + "px";
      }
    },
    // 鼠标弹起事件
    handleMouseUpAlert(e) {
      var _self = this;
      // console.log("弹起");
      _self.moveFlag = false;
      _self.$refs.alertDom.style.cursor = "default";
    },
    // 鼠标离开事件
    handleMouseLeaveAlert(e) {
      var _self = this;
      // console.log("离开");
      _self.moveFlag = false;
    }
    // cancel(name) {
    //   var type = "";
    //   if (name == "close") {
    //     type = "close";
    //   } else {
    //     type = "cancel";
    //   }
    //   this.callback(type);
    //   this.isShow = false;
    // },
    // confirm() {
    //   this.callback("confirm");
    //   this.isShow = false;
    // }
  }
  // data() {
  //   return {
  //     alertShow: false
  //   };
  // },
  // methods: {
  //   // 弹出框提示
  //   handleClickAlert() {
  //     var _self = this;
  //     if (_self.alertShow) {
  //       _self.alertShow = false;
  //     } else {
  //       _self.alertShow = true;
  //     }
  //   },
  //   handleClickAlertBtn(type) {
  //     var _self = this;
  //     _self.alertShow = false;
  //     if (type == "confirm") {
  //       // return 'confirm';
  //       console.log("confirm");
  //     }
  //   }
  // }
};
</script>

<style scoped>
.alert-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
}

.alert {
  position: fixed;
  top: 37%;
  left: 37%;
  min-width: 300px;
  height: 200px;
  background-color: #ffffff;
}

.alert-title {
  height: 40px;
  padding: 0 0 0 15px;
  background-color: orange;
  color: #ffffff;
}

.alert-title-close {
  height: 100%;
  padding: 0 15px;
  font-size: 26px;
  transition: 0.3s;
  cursor: pointer;
}

.alert-title-close:hover {
  background-color: #ffffff;
  color: #000000;
}

.alert-content {
  padding: 15px;
  box-sizing: border-box;
}

.alert-bottom {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 40px;
  border-top: 1px solid #dddddd;
}

.alert-bottom button {
  background-color: orange;
  border: none;
  color: #ffffff;
  margin: 0 8px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid orange;
}

.alert-bottom button:first-child {
  color: orange;
  background-color: #ffffff;
}
</style>