import Vue from 'vue';
// import ROUTER_ from './router/router'
// Vue.prototype.ROUTER = ROUTER_;
import App from './App.vue';
import router from './router';
import http from './http';
import store from './store/index.js';
// 导入js包
import { toymd } from './common/date';
// 引入ant-design-vue
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';
// import { Button } from 'ant-design-vue';
// Vue.component(Button.name, Button);
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.toymd = toymd;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
