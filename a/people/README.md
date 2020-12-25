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
// 问题： Data too long for column 'content' at row 1
// 解决办法:
alter table article modify column content mediumtext not null;//修改content字段

alike 表
create table alike(
  alikeid int not null auto_increment primary key,
  articleid int not null,
  userid int not null,
  status int not null,// 0 表示没有点赞， 1表示点赞
  constraint fk_article_id foreign key(articleid) references article(articleid),
  constraint fk_user_id foreign key(userid) references user(userid)
);

comment 表
create table comment(
  commentid int auto_increment primary key not null,
  articleid int not null,
  userid int not null,
  comment varchar(225) not null,
  constraint fk_articleid foreign key(articleid) references article(articleid),
  constraint fk_userid foreign key(userid) references user(userid)
);
添加createTime字段
alter table comment add column createTime datetime default current_timestamp comment '创建时间';
添加updateTime字段
alter table comment add column updateTime datetime default current_timestamp on update current_timestamp comment '更新时间';

clike 表
create table clike(
  clikeid int not null auto_increment primary key,
  commentid int not null,
  userid int not null,
  status int not null,
  constraint fkarticleid foreign key(commentid) references comment(commentid),
  constraint fkuserid foreign key(userid) references user(userid)
);

music 表
create table music(
  music int not null auto_increment primary key,
  title varchar(50) not null,
  auther varchar(50) not null,
  content varchar(50) not null,
  text varchar(50) null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间'
);

create table wait(
  waitid int auto_increment primary key not null,
  content varchar(50) not null,
  time varchar(50) null,
  userid int not null,
  createTime datetime default current_timestamp comment '创建时间',
  updateTime datetime default current_timestamp on update current_timestamp comment '更新时间',
  constraint fk_wait_userid foreign key(userid) references user(userid)
);
alter table wait add column istrue varchar(10) not null; // 添加字段
alter table wait modify column istrue int not null; // 修改字段
alter table wait modify column content mediumtext not null;

<!-- 聊天功能 -->
<!-- 1、点击聊天
判断是不是第一次聊天，如果是会在主表生成一条记录返回聊天主表id，并在聊天列表表分别插入两条记录，如果不是第一次聊天进入下一步
2、进入聊天对话框
获取上一次聊天聊天记录，将用户在此对话的在线状态改为在线
3、发送聊天信息
    3.1、先判断对方是否在线，不在线的话对方未读数+1
    3.2、将上一条最后一条消息状态改为否
    3.3、往聊天详情表插入聊天信息数据
4、删除聊天列表
将该用户的聊天列表删除状态改为删除 -->