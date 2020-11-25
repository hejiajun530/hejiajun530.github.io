import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 引入全局scss
// import './styles/main.scss';
// 引入阿里巴巴矢量图
import './styles/iconfont.css';
// 导入js包
import { toymd } from './commons/date';
// 导入自写组件
import messagejs from './components/message/message.js';
import alertjs from './components/alert/alert.js';

import http from './http';

Vue.config.productionTip = false;
Vue.prototype.$gMessage = messagejs;
Vue.prototype.$gAlert = alertjs;
Vue.prototype.$http = http;
Vue.prototype.toymd = toymd;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
