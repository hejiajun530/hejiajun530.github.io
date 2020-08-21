<template>
  <div>
    {{day}}-{{Hours}}:{{Minutes}}:{{Seconds}}
  </div>
</template>
<script>
export default {
  props: ['startTime', 'endTime'],
  data(){
    return {
      day: '',
      Hours: '',
      Minutes: '',
      Seconds: ''
    }
  },
  methods:{
    dateDiff(startDate, EndDate) {
      var _self = this;
      var dateStart = new Date(_self.startDate);
      var dateEnd = new Date(_self.EndDate);
      _self.day = parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24));
      _self.Hours = parseInt((dateEnd - dateStart) / (1000 * 60 * 60));
      _self.Minutes = parseInt((dateEnd - dateStart) / (1000 * 60));
      _self.Seconds = parseInt((dateEnd - dateStart) / (1000));
    }
  }
}
</script>
<style scoped>

</style>