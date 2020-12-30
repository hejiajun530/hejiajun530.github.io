import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由懒加载
function load(path) {
  return () => import(`../views/${path}.vue`)
}
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/error',
    name: 'error',
    component: load('error'),
  },
  {
    path: '/home',
    name: 'home',
    redirect: {
      name: 'homeIndex'
    },
    component: load('home'),
    children: [
      {
        path: '/home/index',
        name: 'homeIndex',
        component: load('home/index'),
      },
      {
        path: '/home/category',
        name: 'category',
        component: load('home/category'),
      },
      {
        path: '/home/tag',
        name: 'tag',
        component: load('home/tag'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: load('login'),
  },
  {
    path: '*',
    redirect: '/error'
  },
];

let router = new VueRouter({
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
