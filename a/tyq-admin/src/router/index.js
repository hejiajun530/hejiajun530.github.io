import Vue from 'vue';
import VueRouter from 'vue-router';
import { Form } from 'ant-design-vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/login') == -1 && !sessionStorage.tyqAdminToken) {
    console.log(to, from);
    next({ path: '/login' });
  }
  next();
})

export default router;
