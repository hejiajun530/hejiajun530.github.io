var mixin = {
  data() {
    return {
      tyqUser: '',
      phoneFlag: false
    }
  },
  created() {
    var _self = this;
    let tyqUser = JSON.parse(localStorage.getItem('tyqUser'));
    _self.tyqUser = tyqUser ? tyqUser : '';
    _self.tyqToken = localStorage.getItem('tyqToken');
    // console.log(_self.tyqUser, '----tyqUser----')
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    );
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) != -1) {
        // phoneFlag = true;
        console.log('移动端');
        _self.phoneFlag = true;
      }
    }
  },
  mounted() {
  },
  methods: {

  }
}

export default mixin