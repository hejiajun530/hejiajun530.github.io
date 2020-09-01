<template>
  <div id="calendar">
    <!-- 标题 -->
    <div class="calendar-arrow flex-around-center">
      <div
        class="calendar-left"
        @click="changeMonth('pre')"
      > ❮ </div>
      <div class="calendar-ym">{{currentYear}}年{{currentMonth}}月</div>
      <div
        class="calendar-right"
        @click="changeMonth('next')"
      > ❯ </div>
    </div>
    <!-- 月日星期 -->
    <div class="calendar-list">
      <!-- 星期行 -->
      <ul class="calendar-weekdays flex-around-center">
        <li
          v-for='(val,key) in weeks'
          :key="key"
        >
          <span>{{val}}</span>
        </li>
      </ul>
      <!-- 日期 -->
      <ul class="calendar-days flex-around-center">
        <li
          v-for='(val,key) in daylist'
          :key="key"
          @click="handleClickTime(val, key)"
          :class="chooseClass(val.day)"
        >
          <div
            class="calendar-days-li-item-one flex-column-around-center"
            v-if="val"
          >
            <h4 v-if="val">
              <!-- {{currentYear.toString()}}-{{val.day.getMonth() + 1 | twoNumber}}- -->
              {{val.day.getDate() | twoNumber}}
            </h4>
            <!-- 星期几 -->
            <!-- <h4 v-if="val" :class="chooseClass(val.day)">
                  {{showWeeks[val.week]}}</h4> -->
            <h4 v-if="chooseClass(val.day) == 'active'">入住</h4>
            <h4 v-else-if="chooseClass(val.day) == 'tuifang'">离店</h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 日历
      showWeeks: ["日", "一", "二", "三", "四", "五", "六"],
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      daylist: [],
      showOtherMonth: true,
      firstClickTimeFlag: true,
      startTime: "",
      endTime: ""
    };
  },
  filters: {
    twoNumber(param) {
      if (param.toString().length < 2) {
        return "0" + param;
      } else {
        return param;
      }
    }
  },
  created() {
    this.handleDefaultTime();
    this.init();
  },
  methods: {
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
      let strDate = this.formDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );

      // 是否显示其他月份的日期
      if (this.showOtherMonth) {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        if (d.getDay() >= 6 || d.getDay() == 0) {
          // console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 44 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            });
          }
        } else {
          // console.log(d.getDay());
          for (let i = 2 - this.currentWeek; i < 37 - this.currentWeek; i++) {
            let d = new Date(strDate);
            d.setDate(i);
            this.daylist.push({
              day: d,
              week: d.getDay()
            });
          }
        }
      } else {
        // 判断本月第一天在星期几，在数组前加几个空值
        let d = new Date(strDate);
        let maxDay = this.mGetDate(this.currentYear, this.currentMonth);
        // console.log(d.getDay(), "before");
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
      else if (this.dateDiff(new Date(), day).day < 0) {
        // 所有少于本天的(包括之前月份的)
        // else if (day.getDate() < new Date().getDate() && day.getMonth() == new Date().getMonth() && day.getFullYear() == new Date().getFullYear()) {  // 本月少于本天的
        return "hui";
      }
      // 入住时间
      else if (this.dateDiff(day, this.startTime).Today) {
        // console.log('ruzhu');
        return "active";
      }
      // 离店
      else if (this.dateDiff(day, this.endTime).Today) {
        // console.log('lidian');
        return "tuifang";
      }
      // 今天
      // else if (day.getDate() == new Date().getDate() && day.getMonth() == new Date().getMonth() && day.getFullYear() == new Date().getFullYear()) {
      //   return "active"
      // }
      else if (
        this.dateDiff(this.startTime, day).day > 0 &&
        this.dateDiff(this.endTime, day).day < 0
      ) {
        return "activeColor";
      }
    },
    //切换月份
    changeMonth(a) {
      let d = new Date(this.formDate(this.currentYear, this.currentMonth, 1));

      // setDate(0); 上月最后一天
      // setDate(-1); 上月倒数第二天
      // setDate(n) 参数n为 上月最后一天的前后n天
      a === "pre" ? d.setDate(0) : d.setDate(35);

      this.init(this.formDate(d.getFullYear(), d.getMonth() + 1, 1));
    },
    //返回字符串个格式的日期
    formDate(year, month, day) {
      return year + "-" + month + "-" + day;
    },
    // 获取本月有多少天数
    mGetDate(year, month) {
      var d = new Date(year, month, 0);
      return d.getDate();
    },
    // 选择日期
    handleClickTime(val, index) {
      var _self = this;
      if (val == null || _self.dateDiff(new Date(), val.day).day < 0)
        return false;
      // console.log(val);
      if (_self.firstClickTimeFlag) {
        // firstClickTimeFlag  为 true，选择入住日期
        _self.firstClickTimeFlag = false;
        _self.endTime = "";
        _self.startTime = val.day;
      } else {
        // firstClickTimeFlag  为 false，选择离店日期
        _self.endTime = val.day;
        // console.log(_self.dateDiff(_self.startTime, _self.endTime).day);
        if (_self.dateDiff(_self.startTime, _self.endTime).day > 0) {
          _self.firstClickTimeFlag = true;
          _self.endTime = val.day;
          let night = _self.dateDiff(_self.startTime, _self.endTime);
        } else {
          _self.startTime = val.day;
          _self.endTime = "";
        }
      }
      _self.$emit("g-riliStartTime", _self.startTime, _self.endTime);
    },
    // 初始时间
    handleDefaultTime(flag) {
      var _self = this;
      if (flag) {
        let date = new Date(flag);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        let d = date.getDate();
        let currentEndDay = date.getDate() + 1;
        d = d < 10 ? "0" + d : d;
        currentEndDay =
          currentEndDay < 10 ? "0" + currentEndDay : currentEndDay;
        return y + "-" + m + "-" + currentEndDay;
      } else {
        let date = new Date();
        _self.currentYear = date.getFullYear();
        _self.currentMonth = date.getMonth() + 1;
        _self.currentMonth =
          _self.currentMonth < 10
            ? "0" + _self.currentMonth
            : _self.currentMonth;
        _self.currentDay = date.getDate();
        let currentEndDay = date.getDate() + 1;
        _self.currentDay =
          _self.currentDay < 10 ? "0" + _self.currentDay : _self.currentDay;
        currentEndDay =
          currentEndDay < 10 ? "0" + currentEndDay : currentEndDay;
        _self.startTime =
          _self.currentYear + "-" + _self.currentMonth + "-" + _self.currentDay;
        _self.endTime =
          _self.currentYear + "-" + _self.currentMonth + "-" + currentEndDay;
        // console.log(_self.startTime);
        // console.log(_self.endTime);
      }
    },
    // 计算时间差
    dateDiff(startDate, EndDate) {
      var dateStart = new Date(startDate);
      var dateEnd = new Date(EndDate);
      var Value;
      return (Value = {
        day: parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24)),
        Hours: parseInt((dateEnd - dateStart) / (1000 * 60 * 60)),
        Minutes: parseInt((dateEnd - dateStart) / (1000 * 60)),
        Seconds: parseInt((dateEnd - dateStart) / 1000),
        Today:
          dateStart.getDate() == dateEnd.getDate() &&
          dateStart.getMonth() == dateEnd.getMonth() &&
          dateStart.getFullYear() == dateEnd.getFullYear()
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
#calendar {
  position: relative;
  width: 350px;
  padding: 0 15px 15px 15px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.calendar-arrow {
  position: relative;
  width: 100%;
  height: 80px;
  font-size: 26px;
}

.calendar-left,
.calendar-right {
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
}

.calendar-weekdays {
  width: 100%;
  height: 50px;
  font-size: 16px;
  background-color: #e6f8fa;
  border-radius: 50px;
  margin-bottom: 10px;
}

.calendar-weekdays li {
  display: inline-block;
  width: 13.6%;
  text-align: center;
}

.calendar-list {
  height: 88%;
}

.calendar-days {
  display: inline-block;
  padding: 0;
  background: #ffffff;
  margin: 0;
  height: 90%;
  font-size: 12px;
  border-radius: 15px;
}

.calendar-days li {
  display: inline-block;
  width: 10%;
  height: 35px;
  box-sizing: border-box;
  border-radius: 50%;
  overflow: hidden;
  transition: 0.3s;
  margin: 0 7.5px;
}
.calendar-days-li-item-one {
  position: relative;
  height: 100%;
  cursor: pointer;
}

.calendar-days li:hover {
  color: #62aba0;
  background-color: #e6f8fa;
}
.calendar-days-li-item-one h4:nth-child(2) {
  font-size: 10px;
}

/* 不是本月的日期 */
.calendar-days li.other {
  color: #ccc;
}

/* 今日 */
.calendar-days li.active,
.calendar-days li.tuifang {
  background-color: #62aba0;
  color: #ffffff;
}
.calendar-days li.activeColor {
  background-color: #e6f8fa;
  color: #62aba0;
}

/* 今日之前的日期 */
.calendar-days li.hui {
  color: #ccc;
}
</style>