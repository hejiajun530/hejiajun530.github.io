import Vue from 'vue';
import alert from './index.vue';
let confirmConstructor = Vue.extend(alert);
// var currentMsg = { callback: function () { } };
let theConfirm = function (text) {
  return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
    let confirmDom = new confirmConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(confirmDom.$el); //new一个对象，然后插入body里面
    confirmDom.text = Object.assign(confirmDom.text, text);  //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
    // 回调函数
    confirmDom.callback = function (action) {
      if (action == 'confirm') {
        text.success('confirm');
        confirmDom.$el.remove();
      } else if (action == 'cancel') {
        text.success('cancel');
        confirmDom.$el.remove();
      } else if (action == 'close') {
        confirmDom.$el.remove();
      }
    };
    confirmDom.ok = function () {
      res()
    }
    confirmDom.close = function () {
      rej()
    }
  })
}
export default theConfirm;
  //暴露出去，别忘记挂载到vue的原型上
  //  => 在main.js里面先引入 import theConfirm from './components/confirm/confirm.js'
  //  => 再挂载 Vue.prototype.$confirm = theConfirm;
  //在需要的地方直接用以下方法调用即可：
  // _self.$gAlert({
  //   title: "标题",
  //   msg: "这是一段弹出框内容!",
  //   btn: {
  //     confirmVal: "确1定",
  //     cancelVal: "取1消"
  //   },
  //   success: function(res) {
  //     console.log(res);
  //   },
  // });