import Vue from 'vue';
import App from './App.vue';
import router from './router';
// 引入全局scss
import './styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
