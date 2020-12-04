import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
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
    path: '*',
    redirect: '/error'
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../views/error.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/regist.vue'),
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/home/index',
        name: 'homeIndex',
        component: () => import('../views/other/index.vue'),
        meta: { keepAlive: true },
      },
      {
        path: '/home/liuyan',
        name: 'liuyan',
        component: () => import('../views/other/liuyan.vue'),
      },
      {
        path: '/home/mood',
        name: 'mood',
        component: () => import('../views/other/mood.vue'),
        meta: { keepAlive: true }
      },
      {
        path: '/home/share',
        name: 'share',
        component: () => import('../views/other/share.vue'),
        meta: { keepAlive: true },
      },
      {
        path: '/home/story',
        name: 'story',
        component: () => import('../views/other/story.vue'),
        meta: { keepAlive: true },
      },
      {
        path: '/home/search',
        name: 'search',
        component: () => import('../views/other/search.vue'),
        meta: { keepAlive: true },
      },
      {
        path: '/home/articledetail',
        name: 'articledetail',
        component: () => import('../views/other/articledetail.vue'),
      },
    ]
  },
  {
    path: '/me',
    name: 'me',
    redirect: '/me/info',
    component: () => import('../views/me.vue'),
    children: [
      {
        path: '/me/info',
        name: 'info',
        component: () => import('../views/me/info.vue'),
      },
      {
        path: '/me/password',
        name: 'mePassword',
        component: () => import('../views/me/password.vue'),
      },
      {
        path: '/me/post',
        name: 'post',
        component: () => import('../views/me/post.vue'),
      },
      {
        path: '/me/postlist',
        name: 'postlist',
        component: () => import('../views/me/postlist.vue'),
      },
      {
        path: '/me/arch',
        name: 'arch',
        component: () => import('../views/me/arch.vue'),
      },
      {
        path: '/me/music',
        name: 'music',
        component: () => import('../views/me/music.vue'),
      },
      {
        path: '/me/user',
        name: 'user',
        component: () => import('../views/me/user.vue'),
      },
      {
        path: '/me/userdetail',
        name: 'userdetail',
        component: () => import('../views/me/userdetail.vue'),
      },
      {
        path: '/me/chat',
        name: 'chat',
        component: () => import('../views/me/chat.vue'),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, form, next) => {
  // console.log(to.path.indexOf('/me'));
  let user = localStorage.getItem('tyqUser');
  // let user = sessionStorage.getItem('tyqUser');
  let token = localStorage.getItem('tyqToken');
  // let token = sessionStorage.getItem('tyqToken');
  if (to.path.indexOf('/me') != -1 && !token && !user) {
    // console.log(to, form, '路由拦截');
    Vue.prototype.$gMessage({
      title: '请先登录!',
      duration: 2000,
      type: 'error'
    })
    return false;
  }
  next();
})

export default router;
