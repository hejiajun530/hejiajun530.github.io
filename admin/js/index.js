new Vue({
  el: '#app',
  data() {
    return {
      headTitle: '后台管理系统',
      navlist: [{
        name: '个人中心',
        icon: 'icongeren2',
        sub: [{
          subname: '个人资料',
          router: './user/index.html'// '/user/index'
        }]
      }, {
        name: '系统管理',
        icon: 'iconicon-yibiaopan',
        sub: [{
          subname: '角色管理',
          router: './user/index.html'// '/user/index'
        }, {
          subname: '用户管理',
          router: './user/index.html'// '/user/index'
        }]
      }, {
        name: '订单管理',
        icon: 'iconbiaodanliebiao-',
        sub: [{
          subname: '房间预定',
          router: './user/index.html'// '/user/index'
        }, {
          subname: '订单查询',
          router: './user/index.html'// '/user/index'
        }]
      }],
      navIndex: -1,
      navShowFlag: true
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 选择菜单显示
    handleClickNav(index) {
      var _self = this;
      if (_self.navShowFlag) {
        _self.navIndex = index;
        var navs = document.querySelectorAll('.nav-list');
        if (navs[index].style.maxHeight == null || navs[index].style.maxHeight == '') {
          for (let i = 0; i < navs.length; i++) {
            navs[i].style.maxHeight = '';
          }
          navs[index].style.maxHeight = navs[index].scrollHeight + 'px';
        } else {
          navs[index].style.maxHeight = '';
          _self.navIndex = -1;
        }
      }
    },
    // 控制侧边栏 显示
    handleClickNavShow() {
      var _self = this;
      if (_self.navShowFlag) {
        _self.navShowFlag = false;
      } else {
        _self.navShowFlag = true;
      }
    },
    // 退出登录
    handleClickCheckOut() {
      var _self = this;
      alert('退出登录');
    }
  }
})