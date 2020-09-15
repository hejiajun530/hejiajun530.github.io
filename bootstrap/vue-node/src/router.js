import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/posts/list',
  name: 'helloworld',
  component: () => import('./components/HelloWorld.vue')
}, {
  path: '/posts/list',
  name: 'editList',
  component: () => import('./components/editList.vue')
}, {
  path: '/posts/edit',
  name: 'editCeatroy',
  component: () => import('./components/editCeatroy.vue')
}]

export default new Router({
  routes: [
    ...routes
  ]
})