import Vue from 'vue';
import message from './index.vue';
const messageBox = Vue.extend(message);
let messageBoxCut = function (text) {
  return new Promise((res, rej) => { //promise封装，ok执行resolve，no执行rejectlet
    let messageDom = new messageBox({
      el: document.createElement('div')
    });
    document.body.appendChild(messageDom.$el); //new一个对象，然后插入body里面
    messageDom.text = Object.assign(messageDom.text, text);  //为了使confirm的扩展性更强，这个采用对象的方式传入，所有的字段都可以根据需求自定义
    // 回调函数
    // messageDom.callback = function (action) {}
    setTimeout(function () {
      messageDom.$el.remove();
    }, text.duration + 1000)
    messageDom.ok = function () {
      res()
    }
    messageDom.close = function () {
      rej()
    }
  })
}
export default messageBoxCut;