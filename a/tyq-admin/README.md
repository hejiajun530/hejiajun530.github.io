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



admin 创建管理员表
create table admin(
  adminid int auto_increment primary key,
  adminname varchar(50) not null,
  password varchar(50) not null,
  role varchar(50) null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);