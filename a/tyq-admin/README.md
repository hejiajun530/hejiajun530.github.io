# tyq-admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


引用vuex
npm install vuex --save
新建一个store文件夹,里面一个index.js
index.js：
  import Vue from 'vue';
  import Vuex from 'vuex';
  Vue.use(Vuex);
  const store = new Vuex.Store({
    state: {
      // 存储数据
    },
    mutations: {
      // 同步更改值
      // 对state中的值，进行修改，这个参数state是data中所有的值。
    },
    actions: {
      //异步
    },
    getters: {
      // 数据包装
    }
  })
  export default store;
最后导入到main.js:
  import store from './store/index.js';
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');




admin 创建管理员表
create table admin(
  adminid int auto_increment primary key,
  adminname varchar(50) not null,
  password varchar(50) not null,
  role varchar(50) null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);

category 分类表
create table category(
  categoryid int auto_increment primary key not null,
  text varchar(250) not null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);

tag 标签表
 create table tag(
  text varchar(250) not null,
  tagid int auto_increment primary key not null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);