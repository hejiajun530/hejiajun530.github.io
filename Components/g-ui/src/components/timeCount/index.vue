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
  mounted () {
    var _self = this;
    _self.dateDiff();
  },
  methods:{
    dateDiff() {
      var _self = this;
      var dateStart = new Date(_self.startTime);
      var dateEnd = new Date(_self.endTime);
      _self.day = parseInt((dateEnd - dateStart) / (1000 * 60 * 60 * 24));
      _self.Hours = parseInt((dateEnd - dateStart) / (1000 * 60 * 60));
      _self.Minutes = parseInt((dateEnd - dateStart) / (1000 * 60) % 60);
      _self.Seconds = parseInt((dateEnd - dateStart) / (1000) % 60);
    }
  }
}
</script>
<style scoped>

</style>