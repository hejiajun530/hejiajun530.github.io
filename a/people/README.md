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

article 表
articleid,title,category,tag,cover,content
create table article(
  articleid int auto_increment primary key,
  title varchar(150) not null,
  category varchar(50) not null,
  tag varchar(150) not null,
  cover varchar(150) null,
  content varchar(225) not null
);
添加createTime字段
alter table article add column createTime datetime default current_timestamp comment '创建时间';
添加updateTime字段
alter table article add column updateTime datetime default current_timestamp on update current_timestamp comment '更新时间';
添加userid外键字段
alter table article add column userid int not nul comment '用户表id';
alter table article add constraint FK_ID foreign key(userid) REFERENCES user(userid);
alter table article add column count int null comment '浏览记录';

alike 表
create table alike(
  alikeid int not null auto_increment primary key,
  articleid int not null,
  userid int not null,
  status int not null,// 0 表示没有点赞， 1表示点赞
  constraint fk_article_id foreign key(articleid) references article(articleid),
  constraint fk_user_id foreign key(userid) references user(userid)
);