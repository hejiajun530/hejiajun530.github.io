new Vue({
  el: '#app',
  data() {
    return {
      starIndex: 0,
      // 点击选中后的值
      clickIndex: 0,
      // 中文评价
      starText: ['极差', '失望', '一般', '满意', '惊喜'],
      // 不可修改评分
      showIndex: 4.2
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 选择几星
    handleClickStarNum(index) {
      var _self = this;
      console.log(index);
      _self.starIndex = index;
      _self.clickIndex = _self.starIndex;
    },
    // 鼠标移入事件
    handleMouseEnterStarNum(index) {
      var _self = this;
      _self.starIndex = index;
    },
    // 鼠标移出事件
    handleMouseLeaveStarNum() {
      var _self = this;
      _self.starIndex = _self.clickIndex;
    },
  }
})