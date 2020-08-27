import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [{
  path: '/',
  name: 'home',
  component: () =>
    import('./views/home.vue'),
  children: [
    // { path: '/', component: () => import('./views/alert.vue') },
    // { path: '/', component: () => import('./views/advert.vue') },
    // { path: '/', component: () => import('./views/cascader.vue') },
    // { path: '/', component: () => import('./views/checkbox.vue') },
    // { path: '/', component: () => import('./views/count.vue') },
    // { path: '/', component: () => import('./views/dateSelect.vue') },
    // { path: '/', component: () => import('./views/echarts.vue') },
    // { path: '/', component: () => import('./views/load.vue') },
    // { path: '/', component: () => import('./views/message.vue') },
    // { path: '/', component: () => import('./views/pop.vue') },
    // { path: '/', component: () => import('./views/radio.vue') },
    // { path: '/', component: () => import('./views/rili.vue') },
    // { path: '/', component: () => import('./views/select.vue') },
    // { path: '/', component: () => import('./views/star.vue') },
    // { path: '/', component: () => import('./views/swiper.vue') },
    // { path: '/', component: () => import('./views/switch.vue') },
    // { path: '/', component: () => import('./views/table.vue') },
    // { path: '/', component: () => import('./views/timeCount.vue') },
    // { path: '/', component: () => import('./views/upload.vue') },
    { path: '/', component: () => import('./views/warn.vue') },
  ]
}]

export default new Router({
  routes: [
    ...routes
  ]
})