import Vue from 'vue'
import App from './App.vue'
import router from './router'
import alertjs from './commons/alert'

Vue.config.productionTip = false
Vue.prototype.$gAlert = alertjs;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
