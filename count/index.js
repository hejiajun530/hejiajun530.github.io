new Vue({
  el: '#app',
  data() {
    return {
      xuzhuDay: 1
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 续住天数  增加
    handleClickAddDay() {
      var _self = this;
      _self.xuzhuDay++;
    },
    // 续住天数  减少
    handleClickSubDay() {
      var _self = this;
      _self.xuzhuDay = _self.xuzhuDay <= 1 ? 1 : --_self.xuzhuDay;
    },
  }
})