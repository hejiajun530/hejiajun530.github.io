import Vue from 'vue';
import load from './index.vue';
let loadBox = Vue.extend(load);
let loadBoxCut = function (text) {
  return new Promise((res, rej) => {
    let loadDom = new loadBox({
      el: document.createElement('div')
    });
    if (text) {
      document.body.appendChild(loadDom.$el);
    } else {
      document.querySelector('#g-loading-mask').parentElement.remove();
    }
    // 回调函数
    // loadDom.callback = function (action) {
    //   if (action == 'finish') {
    //     loadDom.$el.remove();
    //   }
    // }
    loadDom.ok = function () {
      res()
    }
    loadDom.close = function () {
      rej()
    }
  })
}
export default loadBoxCut;