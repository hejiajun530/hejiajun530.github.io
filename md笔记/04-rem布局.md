本篇文章记录的是rem布局，有rem单位：rem与em的区别及优点，媒体查询语法简介，媒体查询案例背景变色，媒体查询引入资源，css的弊端，less有变量和运算

---
title: 04-rem布局
categories: 笔记
---

### 1.rem单位

em单位是相对于父元素的font-size属性的单位

rem单位是相对于html元素的font-size属性的单位

列如：html{font-size: 12px；}其他元素width：2rem；换算成px就是24px

相同点：px像素的倍数

优点：整体控制，可以通过修改html的font-size大小来整体改变网页中其他元素的大小

### 2.媒体查询

媒体查询是css3语法

@media mediatype and|not|only (width|min-width|max-width){}

**用@media开头**  @符号一定不能少

**mediatype: 媒体类型   有三种**  

​	all：所有设备

​	print：打印机和打印预览

​	screen：电脑、手机、平板等

and | not | only ;逻辑关键字

​	and: 相当于  并

​	not: 相当于  非

​	only: 相当于  仅仅

**feature  :  特性，必须用小括号包起来**

​	括号一定不能少  width：宽度  min-width：最小宽度   max-width：最大宽度

案例：

```
@media  screen  and  (max-width: 640px){/*这里宽度后面一定不能加逗号*/
​	html{
​		font-size: 14px;
​	}
}
```

### 3.媒体查询案列背景变色

媒体查询我们最喜欢从小到大来写，这样代码更简洁

范例：

```
@media screen and (min-width: 320px) {
    html {
        font-size: 12px;
    }
}

@media screen and (min-width: 640px) {
    html {
        font-size: 24px;
    }
}

@media screen and (min-width: 960px) {
    html {
        font-size: 36px;
    }
}
```

### 4.媒体查询引入资源

```
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

### 5.css弊端

​	非编程式语言

​	冗余代码多

​	组织结构差，不方便维护

​	没有计算能力

### 6.less嵌套

vscode需要下载  Easy LESS插件,只需要保存文件即可,自动生成css文件

less 是一门css预处理语言，后缀名是 .less

语法：@变量名：值；

命名规范：

​	不能有特殊字符（可以有下划线 _）

​	不能以数字开头，可以在其他位置

​	大小写敏感

css写法：

```
div {
  width: 100px;
}
div:hover {
  width: 200px;
}
div p {
  color: red;
}
div p:hover {
  color: yellow;
}
```

less写法：

```
div {
  width: 100px;
  &:hover {//不加&就是后代元素
    width: 200px;
  }
  &>a {//亲子元素
  	color: orange;
  }
  p {
    color: red;
    &:hover {
      color: yellow;
    }
  }
  div,p {//并集选择器
  	color: red;
  }
}
```

### 7.less运算

​	运算符的左右必须敲一个空格

​	如果只有一个数有单位，最后的结果就以这个单位为准

​	如果都有单位，最后的结果以(从左至右)第一个为准