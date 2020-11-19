# people

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


### 字段
user 表
userid,username,password,email,role,tips,avator,创建时间
create table user (
  userid int auto_increment primary key not null,
  username varchar(50) not null unique,
  password varchar(50) not null,
  email varchar(50) null,
  role varchar(10) null,
  tips varchar(150) null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);
添加avator字段
alter table user add column avator varchar(150) null comment '头像';