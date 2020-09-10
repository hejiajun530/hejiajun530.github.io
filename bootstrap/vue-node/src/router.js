import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'helloworld',
  components: () => import('./components/HelloWorld.vue')
}]

export default new Router({
  routes: [
    ...routes
  ]
})