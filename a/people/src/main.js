import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
// 引入全局scss
import './styles/main.scss';
// 导入自写组件
import messagejs from './components/message/message.js';

import http from './http';

Vue.config.productionTip = false;
Vue.prototype.$gMessage = messagejs;
Vue.prototype.$http = http;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
