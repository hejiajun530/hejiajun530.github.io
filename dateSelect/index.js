Vue.filter("twoNumber", function (param) {
  if ((param).toString().length < 2) {
    return "0" + param;
  } else {
    return param;
  }
})
new Vue({
  el: "#app",
  data: {
    // 日历
    showWeeks: ["日", "一", "二", "三", "四", "五", "六"],
    weeks: ["一", "二", "三", "四", "五", "六", "日"],
    currentDay: 1,
    currentMonth: 1,
    currentYear: 1970,
    currentWeek: 1,
    daylist: [],
    showOtherMonth: true,
    startTime: '',
    endTime: '',
    // 判断是选择起始日期还是结束日期
    chooseTimeFlag: true,
    // 是否显示日历
    showRiliFlag: false
  },
  created() {
    // this.handleDefaultTime();
    this.init();
  },
  // watch: {
  //   // 判断日期是否为 日期格式
  //   startTime() {
  //     var _self = this;
  //     var reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  //     if (reg.test(_self.startTime.toString())) {
  //       // console.log('yes')
  //       _self.startTime = _self.startTime.toString();
  //     } else {
  //       // console.log('no')
  //       _self.startTime = '';
  //     }
  //   },
  //   // 判断日期是否为 日期格式
  //   endTime() {
  //     var _self = this;
  //     var reg = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  //     if (reg.test(_self.endTime.toString())) {
  //       // console.log('yes')
  //       _self.endTime = _self.endTime.toString();
  //     } else {
  //       // console.log('no')
  //       _self.endTime = '';
  //     }
  //   }
  // },
  methods: {
    // 表单获取焦点
    handleClickInputFocus() {
      var _self = this;
      var ipts = document.querySelectorAll('.dateSelect input');
      _self.focusFlag = false;
      if (_self.chooseTimeFlag) {
        ipts[0].focus();
        _self.handleFocusDate('startTime');
      } else {
        ipts[1].focus();
        _self.handleFocusDate('endTime');
      }
    },
    // 判断选择 起始日期或结束日期
    handleFocusDate(type) {
      var _self = this;
      _self.showRiliFlag = true;
      _self.focusFlag = false;
      if (type == 'startTime') {
        _self.chooseTimeFlag = true;
        if (_self.startTime) {
          _self.changeMonth('toYm');
        }
      } else {
        _self.chooseTimeFlag = false;
      }
    },
    // 判断日期是否为 日期格式
    handleBlurDate(type) {
      var _self = this;
      if (type == 'startTime') {
        _self.startTime = new Date(_self.startTime).getTime();
        if (_self.startTime) {
          _self.startTime = _self.toYmd(_self.startTime);
        } else {
          // 当new Date(_self.startTime).getTime() 值为NaN
          _self.startTime = '';
        }
      } else {
        _self.endTime = new Date(_self.endTime).getTime();
        if (_self.endTime) {
          _self.endTime = _self.toYmd(_self.endTime);
        } else {
          // 当new Date(_self.endTime).getTime() 值为NaN
          _self.endTime = '';
        }
      }
      _self.focusFlag = true;
      setTimeout(() => {
        if (_self.focusFlag) {
          _self.showRiliFlag = false;
        }
      }, 200)
    },
    // 获取本月所有日期
    init(data) {
      let day;

      if (data) {
        day = new Date(data);
      } else {
        let now = new Date();
        day = new Date(this.formDate(now.getFullYear(), now.getMonth() + 1, 1));
      }

      // 初始化年月日星期
      this.currentDay = day.getDate();
      this.currentMonth = day.getMonth() + 1;
      this.currentYear = day.getFullYear();
      this.currentWeek = day.getDay();

      if (!this.currentWeek) {
        this.currentWeek = 7;
      }

      // 清空数组，重新赋值
      this.daylist.length = 0;
      let strDate = this.formDate(this.currentYear, this.currentMonth, this.currentDay);

      // 是否显示其他月份的日期
      if (this.showOtherMonth) {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        if (d.getDay() >= 6 || d.getDay() == 0) {
          console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 44 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            })
          }
        } else {
          console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 37 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            })
          }
        }
      } else {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        let maxDay = this.mGetDate(this.currentYear, this.currentMonth);
        console.log(d.getDay(), 'before');
        let curDay = d.getDay() == 0 ? 7 : d.getDay(); // 星期天改0为7
        for (let z = 1; z < curDay; z++) {
          this.daylist.push(null);
        }
        // 添加本月的日期
        for (let i = 1; i <= maxDay; i++) {
          let d = new Date(strDate);
          d.setDate(i);
          this.daylist.push({
            day: d,
            week: d.getDay()
          });
        }
        // 判断本月最后一天在星期几，把空余的空间加上值
        let lastDay = this.daylist[this.daylist.length - 1].week;
        lastDay = lastDay == 0 ? 7 : lastDay; // 星期天改0为7
        for (let z = 1; z <= 7 - lastDay; z++) {
          this.daylist.push(null);
        }
        // 把空余的空间加上值
        // if (this.daylist.length <= 28) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 28; i++) {
        //     this.daylist.push(null);
        //   }
        // } else if (this.daylist.length <= 35) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 35; i++) {
        //     this.daylist.push(null);
        //   }
        // } else if (this.daylist.length < 42) {
        //   console.log(this.daylist.length);
        //   for (let i = this.daylist.length; i < 42; i++) {
        //     this.daylist.push(null);
        //   }
        // }
      }
    },
    chooseClass(day) {
      // console.log(day);
      // 不是本月的
      if (day.getMonth() + 1 != this.currentMonth) {
        return "other";
      }
      // 少于今天的
      else if (this.dateDiff(new Date(), day).day < 0) { // 所有少于本天的(包括之前月份的)
        // else if (day.getDate() < new Date().getDate() && day.getMonth() == new Date().getMonth() && day.getFullYear() == new Date().getFullYear()) {  // 本月少于本天的
        return "hui";
      }
      // 入住时间
      else if (this.dateDiff(day, this.startTime).Today) {
        // console.log('ruzhu');
        return "active"
      }
      // 入住时间
      else if (this.dateDiff(day, this.endTime).Today) {
        // console.log('ruzhu');
        return "tuifang"
      }
    },
    //切换月份
    changeMonth(a) {
      var _self = this;
      let d = new Date(_self.formDate(_self.currentYear, _self.currentMonth, 1));

      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(n) 参数n为 上月最后一天的前后n天
      if (a === 'toYm') {
        _self.init(_self.formDate(new Date(_self.startTime).getFullYear(), new Date(_self.startTime).getMonth() + 1, 1));
        return false;
      }
      a === "pre" ? d.setDate(0) : d.setDate(35);

      _self.init(_self.formDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    //返回字符串个格式的日期
    formDate(year, month, day) {
      return year + "-" + month + "-" + day;
    },
    // 返回日期格式
    toYmd(val) {
      let date = new Date(val);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? '0' + d : d;
      return y + '-' + m + '-' + d;
    },
    // 获取本月有多少天数
    mGetDate(year, month) {
      var d = new Date(year, month, 0);
      return d.getDate();
    },
    // 隐藏日历
    handleClickShow() {
      var _self = this;
      _self.showRiliFlag = false;
    },
    // 选择日期
    handleClickTime(val, index) {
      var _self = this;
      if (val == null || _self.dateDiff(new Date(), val.day).day < 0) return false;
      console.log(val);
      if (_self.chooseTimeFlag) {
        _self.startTime = _self.toYmd(val.day);
        if (_self.dateDiff(_self.startTime, _self.endTime).day <= 0) {
          _self.endTime = '';
        }
      } else {
        _self.endTime = _self.toYmd(val.day);
        if (_self.dateDiff(_self.startTime, _self.endTime).day <= 0) {
          _self.endTime = '';
          return false;
        }
      }
      setTimeout(() => {
        _self.showRiliFlag = false;
      }, 300)
    },
    // 初始时间
    handleDefaultTime(flag) {
      var _self = this;
      if (flag) {
        let date = new Date(flag);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? '0' + d : d;
        return y + '-' + m + '-' + currentEndDay;
      } else {
        let date = new Date();
        _self.currentYear = date.getFullYear();
        _self.currentMonth = date.getMonth() + 1;
        _self.currentMonth = _self.currentMonth < 10 ? '0' + _self.currentMonth : _self.currentMonth;
        _self.currentDay = date.getDate();
        _self.currentDay = _self.currentDay < 10 ? '0' + _self.currentDay : _self.currentDay;
        _self.startTime = _self.currentYear + '-' + _self.currentMonth + '-' + _self.currentDay;
        console.log(_self.startTime);
      }
    },
    // 计算时间差
    dateDiff(startDate, EndDate) {
      var dateStart = new Date(startDate);
      var dateEnd = new Date(EndDate);
      var Value;
      return Value = {
        day: parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24)),
        Hours: parseInt((dateEnd - dateStart) / (1000 * 60 * 60)),
        Minutes: parseInt((dateEnd - dateStart) / (1000 * 60)),
        Seconds: parseInt((dateEnd - dateStart) / (1000)),
        Today: dateStart.getDate() == dateEnd.getDate() && dateStart.getMonth() == dateEnd.getMonth() && dateStart.getFullYear() ==
          dateEnd.getFullYear()
      };
    },
  }
});