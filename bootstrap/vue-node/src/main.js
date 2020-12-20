import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
