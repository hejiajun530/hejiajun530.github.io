
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
      PreNextShow: false,
      // 移动初始位置
      startX: 0,
      // 移动移动位置
      moveX: 0
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
      if (idx < 0) {
        return false;
      } else if (idx > _self.imglist.length - 1) {
        return false;
      }
      // 节流
      // if (!_self.timer) {
      //   _self.timer = setTimeout(() => {
      //     console.log(idx);
      //     _self.index = idx;
      //     _self.timer = null;
      //   }, delay);
      // }
      // 防抖
      if (_self.timer !== null) {
        clearTimeout(_self.timer);
      } else {
        _self.index = idx;
      }
      _self.timer = setTimeout(() => {
        console.log(idx);
        _self.timer = null;
      }, delay);
    },
    // 移动端 手指 初始
    handleTouchStart (e) {
      var _self = this;
      // 手指移开屏幕后 停止自动播放
      clearInterval(_self.timeInterval);
      _self.startX = e.targetTouches[0].clientX;
    },
    // 移动端 手指 移动
    handleTouchMove (e) {
      var _self = this;
      var images = document.querySelector('.swiper-images');
      // 移动位置
      _self.moveX = e.targetTouches[0].clientX - _self.startX;
      // 设置元素随着手指移动而移动
		  images.style.transition = "none";
      images.style.transform = "translateX("+_self.moveX+"px)";
    },
    // 移动端 手指 结束
    handleTouchEnd (e) {
      var _self = this;
      var idx = 0;
      // 手指移开屏幕后 开启自动播放
      clearInterval(_self.timeInterval);
      _self.autoplay();
      // 初始化 style
      var images = document.querySelector('.swiper-images');
		  images.style.transition = "1s";
      images.style.transform = "translateX(0px)";
      // 移动位置 超过50 就切换
      if (Math.abs(_self.moveX) > 50) {
        if (_self.moveX > 0) {
          idx = _self.index - 1;
          _self.throttle(idx, 1000);
        } else {
          // _self.index++;
          idx = _self.index + 1;
          _self.throttle(idx, 1000);
        }
      }
      // 初始化 位置坐标
      _self.startX = 0;
      _self.moveX = 0;
    }
  }
})