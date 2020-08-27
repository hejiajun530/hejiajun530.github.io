import Vue from 'vue'
import App from './App.vue'
import router from './router'
import alertjs from './components/alert/alert.js'
import messagejs from './components/message/message.js'
import loadjs from './components/load/load.js'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$gAlert = alertjs;
Vue.prototype.$gMessage = messagejs;
Vue.prototype.$gLoad = loadjs;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
