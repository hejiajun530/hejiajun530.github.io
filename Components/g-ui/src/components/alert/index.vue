<template>
  <div>
    <!-- alert 弹出提示 -->
    <div
      class="alert-mask"
      v-if="isShow"
    >
      <div class="alert">
        <div class="alert-title flex-between-center">
          <div>{{text.title}}</div>
          <div
            class="alert-title-close flex-center-center"
            @click="cancel('close')"
          >×</div>
        </div>
        <div class="alert-content">{{text.msg}}</div>
        <div class="alert-bottom flex-end-center">
          <button
            @click="cancel"
            v-if="text.cancel"
          >{{text.btn.cancelVal}}</button>
          <button
            @click="confirm"
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
        msg: "",
        cancel: true,
        confirm: true,
        btn: {
          confirmVal: "确定",
          cancelVal: "取消"
        }
      }
    };
  },
  methods: {
    cancel(name) {
      var type = "";
      if (name == "close") {
        type = "close";
      } else {
        type = "cancel";
      }
      this.callback(type);
      this.isShow = false;
    },
    confirm() {
      this.callback("confirm");
      this.isShow = false;
    }
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
  top: 50%;
  left: 50%;
  min-width: 300px;
  height: 200px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
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