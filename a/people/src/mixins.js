var mixin = {
  data() {
    return {
      tyqUser: ''
    }
  },
  created() {
    var _self = this;
    _self.tyqUser = JSON.parse(localStorage.getItem('tyqUser'));
    _self.tyqToken = localStorage.getItem('tyqToken');
  },
  mounted () {
  },
  methods: {

  }
}

export default mixin