/**
 * 当前化时间
 * @param {*} date 
 */
function DateTime(date) {
    if (date) {
        return new Date(date);
    }
    return new Date();
}

/**
 * 获取日期 yyyy-MM-dd 00:00:00
 */
function GetDate() {
    var date = this.ToDateString();
    date = DateTime(date);
    var h = date.ToString("HH");
    if (h > 0) {
        date = DateTime(date);
        date = date.AddH(0 - h);
    }
    return date
}

/**
 * 当前时间字符串
 */
function ToString(fmt) {
    var date = this;
    fmt = fmt || "yyyy/MM/dd HH:mm:ss"
    return dateFormat(fmt, date);
}

/**
 * 当前日期字符串
 */
function ToDateString() {
    var date = this;
    return dateFormat("yyyy-MM-dd", date);
}

/**
 * 增加一天
 */
function AddDay(num) {
    var date = this;
    data = date.setDate(date.getDate() + num);
    return new Date(data);
}

/**
 * 增加一周
 */
function AddWeek(num) {
    var date = this;
    data = date.setDate(date.getDate() + (num * 7));
    return new Date(data);
}

/**
 * 增加一个月
 */
function AddMonth(num) {
    var date = this;
    data = date.setMonth(date.getMonth() + num);
    return new Date(data);
}

/**
 * 增加一年
 */
function AddYear(num) {
    var date = this;
    data = date.setFullYear(date.getFullYear() + num);
    return new Date(data);
}


/**
 * 增加一小时
 */
function AddH(num) {
    var date = this;
    data = date.setHours(date.getHours() + (num));
    return new Date(data);
}

/**
 * 增加一分钟
 */
function AddM(num) {
    var date = this;
    data = date.setMinutes(date.getMinutes() + (num));
    return new Date(data);
}

/**
 * 增加一秒
 */
function AddS(num) {
    var date = this;
    data = date.setSeconds(date.getSeconds() + (num));
    return new Date(data);
}

/**
 * 增加一毫秒
 */
function AddF(num) {
    var date = this;
    data = date.setMilliseconds(date.getMilliseconds() + (num));
    return new Date(data);
}

/**
 * 月份天数
 */
function MDays() {
    var date = this;
    var d = new Date(date.ToString("y"), date.ToString("M"), 0);
    return d.getDate();
}

/**
 * 格式化时间
 */
function dateFormat(fmt, date) {
    var ret;
    var opt = {
        "y+": date.getFullYear().toString(), // 年
        "M+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "H+": date.getHours().toString(), // 时
        "m+": date.getMinutes().toString(), // 分
        "s+": date.getSeconds().toString(), // 秒
        "f+": date.getMilliseconds().toString() // 毫秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

/**
 * 计算时间差
 */
function dateDiff(startDate, EndDate) {
    var dateStart = new Date(startDate);
    var dateEnd = new Date(EndDate);
    return Value = {
        day: parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24)),
        Hours: parseInt((dateEnd - dateStart) / (1000 * 60 * 60)),
        Minutes: parseInt((dateEnd - dateStart) / (1000 * 60)),
        Seconds: parseInt((dateEnd - dateStart) / (1000)),
        t:parseInt((dateEnd - dateStart)),
    };
}


/**
 * 获取本周所有日期 字符串数组
 */
function GetWeekDays() {
    var days = [];
    var date = this;
    var today = date.getDay();
    var Sunday = date.AddDay(-today);
    for (var i = 0; i < 7; i++) {
        days.push(Sunday.AddDay(i).ToString("yyyy/MM/dd"));
        Sunday.AddDay(-i);
    }
    return days;
}

/**
 * 获取本月所有日期 字符串数组
 */
function GetMonthDays(n, b) {
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    n = n || 0;
    var days = [];
    var date = this;
    var newDate = date.AddMonth(n);
    var M = newDate.ToString("M");
    var W = newDate.getDay();
    var week = weeks[newDate.getDay()];
    var m_days = newDate.MDays();
    var strDate = new Date(newDate.ToString("yyyy-MM")).AddDay(-1);
    console.log(strDate.ToString("yyyy-MM-dd"))
    for (var i = 0; i < m_days; i++) {
        var $day = strDate.AddDay(1);
        var _day = $day.ToString("yyyy-MM-dd");
        var _w = $day.getDay();
        var _week = weeks[$day.getDay()];
        days.push({
            day: _day,
            week: _week,
            w: _w
        });
    }

    if (b) {
        var day_1 = days[0];
        var c_1 = -(day_1.w - 7);
        if (day_1.w > 1) {
            console.log(day_1);
            for (var i = 0; i < c_1; i++) {
                var _s = DateTime(day_1.day);
                var _d = _s.AddDay(-i - 1).ToString("yyyy-MM-dd");
                var _w = _s.getDay();
                var _week = weeks[_s.getDay()];
                days.unshift({
                    day: _d,
                    week: _week,
                    w: _w
                });
            }
        }
        var day_2 = days[(m_days + (day_1.w>1?c_1:0)) - 1];
        if (day_2.w > 0) {
            var c_2 = 7 - day_2.w;
            for (var i = 0; i < c_2; i++) {
                var _s = DateTime(day_2.day);
                var _d = _s.AddDay(i + 1).ToString("yyyy-MM-dd");
                var _w = _s.getDay();
                var _week = weeks[_s.getDay()];
                days.push({
                    day: _d,
                    week: _week,
                    w: _w
                });
                // days.push(null);
            }
        }
    }
    return days;
}

Date.prototype.ToString = ToString; //时间转字符串
Date.prototype.ToDateString = ToDateString; //时间转字符串
Date.prototype.AddDay = AddDay; //增加天
Date.prototype.AddWeek = AddWeek; //增加周
Date.prototype.AddMonth = AddMonth; //增加月
Date.prototype.AddYear = AddYear; //增加年
Date.prototype.AddH = AddH; //增加小时
Date.prototype.AddM = AddM; //增加分
Date.prototype.AddS = AddS; //增加秒
Date.prototype.AddF = AddF; //增加毫秒
Date.prototype.GetWeekDays = GetWeekDays; //获取本周所有日期
Date.prototype.GetMonthDays = GetMonthDays; //获取本周所有日期
Date.prototype.MDays = MDays; //获取本月天数
Date.prototype.GetDate = GetDate; //日期

/**---时间字符串操作--------------------------------------------------- */
/**
 * /Date(1591070400000)/ 格式时间转时间对象
 */
function ToDate() {
    var d = eval('new ' + this.substr(1, this.length - 2));
    return d;
}

String.prototype.ToDate = ToDate;



/**
 * String.padStart()
 */
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0, targetLength) + String(this);
        }
    };
}