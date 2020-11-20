// 返回时间差
function dateDiff(startDate, EndDate) {
  var dateStart = new Date(startDate);
  var dateEnd = new Date(EndDate);
  return Value = {
    day: parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24)),
    Hours: parseInt((dateEnd - dateStart) / (1000 * 60 * 60)),
    Minutes: parseInt((dateEnd - dateStart) / (1000 * 60)),
    Seconds: parseInt((dateEnd - dateStart) / (1000)),
  };
}

// 是否为本天
function today(startDate, EndDate) {
  var dateStart = new Date(startDate);
  var dateEnd = new Date(EndDate);
  return dateStart.getDate() == dateEnd.getDate() && dateStart.getMonth() == dateEnd.getMonth() && dateStart.getFullYear() == dateEnd.getFullYear();
}

// 是否为本月
function tomonth(startDate, EndDate) {
  var dateStart = new Date(startDate);
  var dateEnd = new Date(EndDate);
  return dateStart.getMonth() == dateEnd.getMonth() && dateStart.getFullYear() == dateEnd.getFullYear();
}

// 是否为本年
function toyear(startDate, EndDate) {
  var dateStart = new Date(startDate);
  var dateEnd = new Date(EndDate);
  return dateStart.getFullYear() == dateEnd.getFullYear();
}

// 返回日期字符串
function toymd(time, str) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  var day = date.getDate();
  day = day < 10 ? '0' + day : day;
  var hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;
  var min = date.getMinutes();
  min = min < 10 ? '0' + min : min;
  var sec = date.getSeconds();
  sec = sec < 10 ? '0' + sec : sec;
  if (str.toLowerCase() == 'yy-mm-dd') {
    return year + '-' + month + '-' + day;
  } else if (str.toLowerCase() == 'yy-mm-dd hh:mm') {
    return year + '-' + month + '-' + day + ' ' + hours + ':' + min;
  } else if (str.toLowerCase() == 'yy-mm-dd hh:mm:ss') {
    return year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + sec;
  } else if (str.toLowerCase() == 'hh:mm:ss') {
    return hours + ':' + min + ':' + sec;
  } else if (str.toLowerCase() == 'mm:ss') {
    return min + ':' + sec;
  } else {
    return year + '-' + month + '-' + day;
  }
}

// 返回今天，年，月，日
function getYmd(time) {
  var date = new Date(time);
  return Value = {
    day: date.getDate(),
    week: date.getDay(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  }
}

// 时间少于10 前面 +0
function toTwo(time) {
  var date = Number(time);
  date = date < 10 ? '0' + date : date;
  return date;
}

// 增加一天
function AddDay(time, num) {
  var date = new Date(time);
  date = date.setDate(date.getDate() + num);
  return new Date(date);
}

// 增加一周
function AddWeek(time, num) {
  var date = new Date(time);
  date = date.setDate(date.getDate() + (num * 7));
  return new Date(date);
}

// 增加一个月
function AddMonth(time, num) {
  var date = new Date(time);
  date = date.setMonth(date.getMonth() + num);
  return new Date(date);
}

// 增加一年
function AddYear(time, num) {
  var date = new Date(time);
  date = date.setFullYear(date.getFullYear() + num);
  return new Date(date);
}

//增加一小时
function AddH(time, num) {
  var date = new Date(time);
  date = date.setHours(date.getHours() + (num));
  return new Date(date);
}

// 增加一分钟
function AddM(time, num) {
  var date = new Date(time);
  date = date.setMinutes(date.getMinutes() + (num));
  return new Date(date);
}

// 增加一秒
function AddS(time, num) {
  var date = new Date(time);
  date = date.setSeconds(date.getSeconds() + (num));
  return new Date(date);
}

// 增加一毫秒
function AddF(time, num) {
  var date = new Date(time);
  date = date.setMilliseconds(date.getMilliseconds() + (num));
  return new Date(date);
}

// 获取本月的天数
function monthDays(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var days = new Date(year, month, 0);
  return days.getDate();
}

// 获取本月第一天在星期几
function monthFirstDay(time) {
  var date = new Date(time);
  var firstDay = new Date(date.setDate(1));
  return firstDay.getDay();
}

// 获取本月最后一天在星期几
function monthLastDay(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var days = new Date(year, month, 0);
  var lastDay = new Date(date.setDate(days.getDate()));
  return lastDay.getDay();
}

// export {
//   today
// }
export {
  dateDiff,
  today,
  tomonth,
  toyear,
  toymd,
  toTwo,
  AddDay,
  AddWeek,
  AddMonth,
  AddYear,
  AddH,
  AddM,
  AddS,
  AddF,
  monthDays,
  monthFirstDay,
  monthLastDay,
}

// Date.prototype.dateDiff = dateDiff;//时间差
// Date.prototype.today = today;//时间差
// Date.prototype.tomonth = tomonth;//时间差
// Date.prototype.toyear = toyear;//时间差
// Date.prototype.toymd = toymd;//返回日期字符串
// Date.prototype.toTwo = toTwo;//时间少于10 前面 +0
// Date.prototype.AddDay = AddDay;//增加一天
// Date.prototype.AddWeek = AddWeek;//增加一周
// Date.prototype.AddMonth = AddMonth;//增加一月
// Date.prototype.AddYear = AddYear;//增加一年
// Date.prototype.AddH = AddH;//增加一小时
// Date.prototype.AddM = AddM;//增加一分钟
// Date.prototype.AddS = AddS;//增加一秒
// Date.prototype.AddF = AddF;//增加一毫秒
// Date.prototype.monthDays = monthDays;//获取本月的天数
// Date.prototype.monthFirstDay = monthFirstDay;//获取本月第一天在星期几
// Date.prototype.monthLastDay = monthLastDay;//获取本月最后一天在星期几