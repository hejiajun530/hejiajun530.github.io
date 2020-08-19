new Vue({
  el: '#app',
  data() {
    return {
      alertShow: false,
      messageShow: false,
      loadShow: false,
      warnShow: true
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 关闭警告框
    handleClickCloseWarn() {
      var _self = this;
      _self.warnShow = false;
    },
    // 上方显示
    handleClickPopTop(e) {
      var _self = this;
      console.log(e);
      var pop = document.querySelector('.pop');
      if (pop.style.display == 'none' || pop.style.display == '' || pop.style.display == null) {
        pop.style.display = 'block';
      } else {
        pop.style.display = 'none';
      }
      let x = e.target.offsetLeft + (e.target.offsetWidth / 2);
      let y = e.target.offsetTop;
      pop.style.top = y - 10 + 'px';
      pop.style.left = x + 'px';
    },
    // 弹出框提示
    handleClickAlert() {
      var _self = this;
      if (_self.alertShow) {
        _self.alertShow = false;
      } else {
        _self.alertShow = true;
      }
    },
    handleClickAlertBtn(type) {
      var _self = this;
      _self.alertShow = false;
      if (type == 'confirm') {
        // return 'confirm';
        console.log('confirm');
      }
    },
    // 消息提示
    handleClickMessage() {
      var _self = this;
      _self.messageShow = true;
      setTimeout(() => {
        _self.messageShow = false;
      }, 2000);
    },
    // 加载动画
    handleClickLoad() {
      var _self = this;
      _self.loadShow = true;
      setTimeout(() => {
        _self.loadShow = false;
      }, 3000);
    }
  }
})