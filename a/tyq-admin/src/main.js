import Vue from 'vue';
import App from './App.vue';
import router from './router';
import http from './http';
// 引入ant-design-vue
// import Button from 'ant-design-vue/lib/button';
// import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
