new Vue({
  el: '#app',
  data() {
    return {
      tablist: [{
        name: 'tab1',
        content: 'tab1主体内容111'
      }, {
        name: 'tab2',
        content: 'tab2主体内容222'
      }, {
        name: 'tab3',
        content: 'tab3主体内容333'
      }, {
        name: 'tab4',
        content: 'tab4主体内容444'
      }, {
        name: 'tab5',
        content: 'tab5主体内容555'
      }],
      tabIndex: 0,
      // 手指初始坐标
      startX: 0,
      // 手指移动坐标
      moveX: 0
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 切换tab栏
    handleClickTab(index) {
      var _self = this;
      _self.tabIndex = index;
    },
    // 移动端 手指  初始
    handleTouchStart(e) {
      var _self = this;
      _self.startX = e.targetTouches[0].clientX;
    },
    // 移动端 手指  移动
    handleTouchMove(e) {
      var _self = this;
      var content = document.querySelector('.tab-content-list');
      _self.moveX = e.targetTouches[0].clientX - _self.startX;
      content.style.transition = 'none';
      content.style.transform = 'translateX(' + _self.moveX + 'px)';
    },
    // 移动端 手指  结束
    handleTouchEnd(e) {
      var _self = this;
      var content = document.querySelector('.tab-content-list');
      content.style.transition = '0.5s';
      content.style.transform = 'translateX(0px)';
      var idx = 0;
      if (Math.abs(_self.moveX) > 50) {
        if (_self.moveX > 0) {
          idx = _self.tabIndex - 1;
          if (idx >= 0 && idx <= _self.tablist.length - 1) {
            _self.tabIndex = idx;
          }
        } else {
          idx = _self.tabIndex + 1;
          if (idx >= 0 && idx <= _self.tablist.length - 1) {
            _self.tabIndex = idx;
          }
        }
      }
      // 初始化坐标
      _self.startX = 0;
      _self.moveX = 0;
    },
  }
})