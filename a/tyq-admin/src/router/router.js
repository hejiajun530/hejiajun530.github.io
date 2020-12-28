var map = new Map()

// 路由懒加载
function load(path) {
  return () => import(`@/views/${path}`)
}
map.set("category", load('home/category'));

//获取动态路由方法
function getRouterList(successCallback) {
  //登录之后获取动态路由
  let userRouter = ''
  let role_router = ''
  role_router = localStorage.getItem('routes')
  userRouter = JSON.parse(role_router).children
  digui(userRouter)

  function digui(userRouter = []) {
    userRouter.forEach(function (item, index) {
      if (item.children != null && item.children.length > 0) {
        digui(item.children)
      }
      item.component = map.get(item.component)//通过映射找到我们定义好的组件
    })
  }

  //固定的路由
  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/home/index',
      component: load('home'),
      children: [
        {
          path: '/home/index',
          name: 'homeIndex',
          component: load('home/index'),
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: load('login'),
    },
    {
      path: '/error',
      name: 'error',
      component: load('error'),
    },
    // {
    //   path: '*',
    //   redirect: '/error'
    // },
  ];
  //把筛选的路由添加进去name: 'home',的children
  routes[1].children = [...userRouter, ...routes[1].children]
  console.log('3333333', routes)
  successCallback(routes)
}

export default {
  getRouterList
}