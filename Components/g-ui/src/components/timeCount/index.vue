<template>
  <div>
    剩{{day}}天{{Hours}}时{{Minutes}}分{{Seconds}}秒
  </div>
</template>
<script>
export default {
  props: ["nowTime", "targetTime"],
  data() {
    return {
      day: "",
      Hours: "",
      Minutes: "",
      Seconds: "",
      startTime: this.nowTime || new Date(),
      endTime: this.targetTime,
      timer: null
    };
  },
  mounted() {
    var _self = this;
    // console.log(_self.startTime, _self.endTime);
    _self.timer = setInterval(() => {
      _self.startTime = _self.AddS(_self.startTime, 1);
    }, 1000);
    _self.dateDiff();
    // setInterval(function() {
    //   _self.dateDiff();
    // }, 1000);
  },
  watch: {
    startTime() {
      var _self = this;
      _self.dateDiff();
    }
  },
  methods: {
    dateDiff() {
      var _self = this;
      var dateStart = new Date(_self.startTime).getTime();
      var dateEnd = new Date(_self.endTime).getTime();
      // console.log(dateStart, dateEnd);
      // console.log(dateEnd - dateStart);
      // if (parseInt(dateEnd - dateStart) <= 0) {
      //   clearInterval(_self.timer);
      //   _self.timer = null;
      // }
      _self.day = parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24));
      _self.Hours = _self.towNumber(
        parseInt(((dateEnd - dateStart) / (1000 * 60 * 60)) % 24)
      );
      _self.Minutes = _self.towNumber(
        parseInt(((dateEnd - dateStart) / (1000 * 60)) % 60)
      );
      _self.Seconds = _self.towNumber(
        parseInt(((dateEnd - dateStart) / 1000) % 60)
      );
      // console.log(_self.startTime, _self.Hours, _self.Minutes, _self.Seconds);
    },
    towNumber(num) {
      // console.log(num);
      if (num < 0) {
        num = Number(num.toString().substr(1));
        num = num < 10 ? "0" + num : num;
        return "-" + num;
      }
      return num < 10 ? "0" + num : num;
    },
    // 增加一秒
    AddS(time, num) {
      var date = new Date(time);
      date = date.setSeconds(date.getSeconds() + num);
      return new Date(date);
    }
  }
};
</script>
<style scoped>
</style>