
new Vue({
  el: '#app',
  data() {
    return {
      imglist: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg'
      ],
      index: 0,
      timer: null,
      timeInterval: null,
      temp: 1,
      PreNextShow: false
    }
  },
  mounted() {
    var _self = this;
    _self.autoplay();
  },
  methods: {
    // 鼠标 移入 轮播图区域  停止自动播放
    handleMouseEnter() {
      var _self = this;
      console.log('enter');
      _self.PreNextShow = true;
      clearInterval(_self.timeInterval);
    },
    // 鼠标 移出 轮播图区域  开始自动播放
    handleMouseLeave() {
      var _self = this;
      console.log('leave');
      _self.PreNextShow = false;
      clearInterval(_self.timeInterval);
      _self.autoplay();
    },
    // 上一张
    handleClickPre() {
      var _self = this;
      let idx = _self.index - 1;
      _self.throttle(idx, 1000);
    },
    // 下一张
    handleClickNext() {
      var _self = this;
      let idx = _self.index + 1;
      _self.throttle(idx, 1000);
    },
    // 点小圆点移动图片
    handleClickIndex(idx) {
      var _self = this;
      _self.throttle(idx, 1000);
    },
    // 自动轮播
    autoplay() {
      var _self = this;
      _self.timeInterval = setInterval(() => {
        // console.log(_self.index);
        if (_self.index <= 0) {
          _self.temp = 1;
        } else if (_self.index >= _self.imglist.length - 1) {
          _self.temp = -1;
        }
        _self.index = _self.index + _self.temp;
      }, 2000);
    },
    // 图片移动 封装
    throttle(idx, delay) {
      var _self = this;
      // 节流
      if (!_self.timer) {
        _self.timer = setTimeout(() => {
          console.log(idx);
          _self.index = idx;
          _self.timer = null;
        }, delay);
      }
      // 防抖
      // if (_self.timer !== null) {
      //   clearTimeout(_self.timer);
      // } else {
      //   _self.index = idx;
      // }
      // _self.timer = setTimeout(() => {
      //   console.log(idx);
      //   _self.timer = null;
      // }, delay);
    }
  }
})