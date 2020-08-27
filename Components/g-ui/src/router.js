import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let routes = [{
  path: '/',
  name: 'home',
  component: () =>
    import('./views/home.vue'),
  children: [
    { path: '/', component: () => import('./views/alert.vue') },
    { path: '/advert', component: () => import('./views/advert.vue') },
    { path: '/cascader', component: () => import('./views/cascader.vue') },
    { path: '/checkbox', component: () => import('./views/checkbox.vue') },
    { path: '/count', component: () => import('./views/count.vue') },
    { path: '/dateSelect', component: () => import('./views/dateSelect.vue') },
    { path: '/echarts', component: () => import('./views/echarts.vue') },
    { path: '/load', component: () => import('./views/load.vue') },
    { path: '/message', component: () => import('./views/message.vue') },
    { path: '/pop', component: () => import('./views/pop.vue') },
    { path: '/radio', component: () => import('./views/radio.vue') },
    { path: '/rili', component: () => import('./views/rili.vue') },
    { path: '/select', component: () => import('./views/select.vue') },
    { path: '/star', component: () => import('./views/star.vue') },
    { path: '/swiper', component: () => import('./views/swiper.vue') },
    { path: '/switch', component: () => import('./views/switch.vue') },
    { path: '/table', component: () => import('./views/table.vue') },
    { path: '/timeCount', component: () => import('./views/timeCount.vue') },
    { path: '/upload', component: () => import('./views/upload.vue') },
    { path: '/warn', component: () => import('./views/warn.vue') },
  ]
}]

export default new Router({
  routes: [
    ...routes
  ]
})