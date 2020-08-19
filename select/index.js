Vue.component('test', {
  template: '<div v-clickOutSide="testClick">{{msg}}</div>',
  data() {
    return {
      msg: '组件内'
    }
  },
  methods: {
    testClick() {
      this.msg = '点在组件外';
    }
  },
  directives: {
    clickOutSide: {
      // 自定义点击组件外部指令
      // 初始化指令
      bind(el, binding, vnode) {
        function documentHandler(e) {
          // 这里判断点击的元素是否是本身，是本身，则返回
          if (el.contains(e.target)) {
            return false;
          }
          // 判断指令中是否绑定了函数
          if (binding.expression) {
            // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
            binding.value(e);
          }
        }
        // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
      },
      update() { },
      unbind(el, binding) {
        // 解除事件监听
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
      },
    }
  },
})
new Vue({
  el: '#app',
  data() {
    return {
      // 控制下拉框是否显示
      selectShow: false,
      // 下拉框数据
      selectList: ['请选择学校', '湖南长沙理工', '湖南财政', '中南科技林业', '湖南信息', '长沙民政', '湖南工商', '湖南农业大学'],
      // 选择下拉框
      selectIndex: 0,
      // 控制模式 0 单选  1 多选
      chooseIndex: 1,
      // 选择中的下来框
      chooseList: [],
      selectIndexList: []
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 控制 select显示
    handleClickSelectShow() {
      var _self = this;
      if (_self.selectShow) {
        _self.selectShow = false;
      } else {
        _self.selectShow = true;
        var options = document.querySelectorAll('.select-option');
        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove('active');
        }
        _self.selectIndexList.forEach((item, index) => {
          options[item].classList.add('active');
        })
      }
    },
    // 选择下拉框中的值
    handleClickChooseSelect(index, e) {
      var _self = this;
      if (_self.chooseIndex == 0) {
        // 0 单选模式
        _self.selectIndexList = [];
        _self.selectIndex = index;
        _self.selectIndexList.push(index);
      } else if (_self.chooseIndex == 1) {
        // 1 多选模式
        _self.selectIndex = index;
        if (_self.chooseList.indexOf(_self.selectList[_self.selectIndex]) == -1) {
          // chooseList数组中没有这个值，就添加
          _self.chooseList.push(_self.selectList[_self.selectIndex]);
          _self.selectIndexList.push(index);
        } else {
          // chooseList数组中有这个值，就删除
          _self.chooseList = _self.chooseList.filter((item, index) => {
            return item != _self.selectList[_self.selectIndex];
          })
          _self.selectIndexList = _self.selectIndexList.filter((item, index) => {
            return item != _self.selectIndex;
          })
        }
      }
      _self.handleClickSelectShow();
    },
    // 删除选中列表中的值
    handleClickDelChoose(index) {
      var _self = this;
      _self.chooseList.splice(index, 1);
      _self.selectIndexList.splice(index, 1);
    }
  }
})