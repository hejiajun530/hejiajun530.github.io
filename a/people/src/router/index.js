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
    meta: {
      title: '错误页面'
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {
      title: '登录'
    },
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('../views/regist.vue'),
    meta: {
      title: '注册'
    },
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: () => import('../views/home.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home/index',
        name: 'homeIndex',
        component: () => import('../views/other/index.vue'),
        meta: { keepAlive: true, title: '首页' },
      },
      {
        path: '/home/liuyan',
        name: 'liuyan',
        component: () => import('../views/other/liuyan.vue'),
        meta: {
          title: '留言'
        },
      },
      {
        path: '/home/mood',
        name: 'mood',
        component: () => import('../views/other/mood.vue'),
        meta: { keepAlive: true, title: '音乐' }
      },
      {
        path: '/home/share',
        name: 'share',
        component: () => import('../views/other/share.vue'),
        meta: { keepAlive: true, title: '技术分享' },
      },
      {
        path: '/home/story',
        name: 'story',
        component: () => import('../views/other/story.vue'),
        meta: { keepAlive: true, title: '过往故事' },
      },
      {
        path: '/home/search',
        name: 'search',
        component: () => import('../views/other/search.vue'),
        meta: { keepAlive: true, title: '文章搜索' },
      },
      {
        path: '/home/articledetail',
        name: 'articledetail',
        component: () => import('../views/other/articledetail.vue'),
        meta: {
          title: '文章内容'
        },
      },
    ]
  },
  {
    path: '/me',
    name: 'me',
    redirect: '/me/info',
    component: () => import('../views/me.vue'),
    meta: {
      title: '我的'
    },
    children: [
      {
        path: '/me/info',
        name: 'info',
        component: () => import('../views/me/info.vue'),
        meta: {
          title: '个人信息'
        },
      },
      {
        path: '/me/password',
        name: 'mePassword',
        component: () => import('../views/me/password.vue'),
        meta: {
          title: '密码修改'
        },
      },
      {
        path: '/me/post',
        name: 'post',
        component: () => import('../views/me/post.vue'),
        meta: {
          title: '文章发表/修改'
        },
      },
      {
        path: '/me/postlist',
        name: 'postlist',
        component: () => import('../views/me/postlist.vue'),
        meta: {
          title: '文章列表'
        },
      },
      {
        path: '/me/arch',
        name: 'arch',
        component: () => import('../views/me/arch.vue'),
        meta: {
          title: '文章归档'
        },
      },
      {
        path: '/me/music',
        name: 'music',
        component: () => import('../views/me/music.vue'),
        meta: {
          title: '音乐上传'
        },
      },
      {
        path: '/me/user',
        name: 'user',
        component: () => import('../views/me/user.vue'),
        meta: {
          title: '用户列表'
        },
      },
      {
        path: '/me/userdetail',
        name: 'userdetail',
        component: () => import('../views/me/userdetail.vue'),
        meta: {
          title: '用户信息'
        },
      },
      {
        path: '/me/chat',
        name: 'chat',
        component: () => import('../views/me/chat.vue'),
        meta: {
          title: '聊天室'
        },
      },
      {
        path: '/me/wait',
        name: 'wait',
        component: () => import('../views/me/wait.vue'),
        meta: {
          title: '待做事项'
        },
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
  // let user = localStorage.getItem('tyqUser');
  let user = sessionStorage.getItem('tyqUser');
  // let token = localStorage.getItem('tyqToken');
  let token = sessionStorage.getItem('tyqToken');
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
