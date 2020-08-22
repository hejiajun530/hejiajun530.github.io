<template>
  <div>
    剩{{day}}天{{Hours}}时{{Minutes}}分{{Seconds}}秒
  </div>
</template>
<script>
export default {
  props: ["startTime", "endTime"],
  data() {
    return {
      day: "",
      Hours: "",
      Minutes: "",
      Seconds: ""
    };
  },
  mounted() {
    var _self = this;
    setInterval(function() {
      _self.dateDiff();
    }, 1000);
  },
  methods: {
    dateDiff() {
      var _self = this;
      var dateStart = new Date(_self.startTime).getTime();
      var dateEnd = new Date(_self.endTime).getTime();
      _self.day = parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24));
      _self.Hours = _self.towNumber(
        parseInt((dateEnd - dateStart) / (1000 * 60 * 60))
      );
      _self.Minutes = _self.towNumber(
        parseInt(((dateEnd - dateStart) / (1000 * 60)) % 60)
      );
      _self.Seconds = _self.towNumber(
        parseInt(((dateEnd - dateStart) / 1000) % 60)
      );
    },
    towNumber(num) {
      return num < 10 ? "0" + num : num;
    }
  }
};
</script>
<style scoped>
</style>