技术点:
1.html5
2.css3/less&sass
3.javascript/es5、es6
4.jquery
5.vue
6.node/express
7.webpack
8.gulp
9.react
10.canvas
11.typescript
12.WebScoket
13.mysql


### less基本用法:
1.安装:npm install -g less 
npm install -g less-plugin-clean-css
<!-- 
  <link rel="stylesheet/less" href="style.less">
  <script src="less.min.js"></script>
 -->

2.值变量: less 的变量声明是以@开头
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;
#header {
  color: @light-blue;
}

3.选择器变量
选择器也可使用变量,变量需要用@{}包括
@mySelector: .wrap;
@{mySelector}{ //变量名 必须使用大括号包裹
  color: #999;
  width: 50%;
}

4.属性变量
属性名称使用变量
@borderStyle: border-style;
@Soild:solid;
#wrap{
  @{borderStyle}: @Soild;//变量名 必须使用大括号包裹
}

5.url变量
@images: "../img";//需要加引号
body {
  background: url("@{images}/dog.png");//变量名 必须使用大括号包裹
}

6.声明变量
类似于mixins,用于引入公共代码块
结构: @name: {属性: 值;};
使用: @name();
@background: {background:red;};
#main{
    @background();
}

7.变量作用域
less中变量的作用域是采用就近原则
/* Less */
@var: @a;
@a: 100%;
#wrap {
  width: @var;
  @a: 9%;
}
@a: 8%;
/* 生成的 CSS */
#wrap {
  width: 9%;
}

8.条件语句 when
less中没有if else，它有when用于做条件判断
/* Less */
#card{
    // and 运算符 ，相当于 与运算 &&，必须条件全部符合才会执行
    .border(@width,@color,@style) when (@width>100px) and(@color=#999){
        border:@style @color @width;
    }
    // not 运算符，相当于 非运算 !，条件为 不符合才会执行
    .background(@color) when not (@color>=#222){
        background:@color;
    }
    // , 逗号分隔符：相当于 或运算 ||，只要有一个符合条件就会执行
    .font(@size:20px) when (@size>50px) , (@size<100px){
        font-size: @size;
    }
}
#main{
    #card>.border(200px,#999,solid);
    #card .background(#111);
    #card > .font(40px);
}
/* 生成后的 CSS */
#main{
  border:solid #999 200px;
  background:#111;
  font-size:40px;
}

9.基本层级嵌套
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}

10.父选择 & 符
a {
  color: blue;
  &:hover {
    color: green;
  }
}

11.嵌套指令冒泡
// less
.screen-color {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }
}
/* css */
@media screen {
  .screen-color {
    color: green;
  }
}
@media screen and (min-width: 768px) {
  .screen-color {
    color: red;
  }
}

12.运算符
@base: 5%;
@filler: @base * 2; // result is 10%
@other: @base + @filler; // result is 15%

13.继承 extend关键字的使用
/* Less */
.animation{
    transition: all .3s ease-out;
    .hide{
      transform:scale(0);
    }
}
#main{
    &:extend(.animation);
}
#con{
    &:extend(.animation .hide);
}
/*  CSS */
.animation,#main{
  transition: all .3s ease-out;
}
.animation .hide , #con{
    transform:scale(0);
}

14.继承 all全局搜索替换
/* Less */
#main{
  width: 200px;
}
#main {
  &:after {
    content:"Less is good!";
  }
}
#wrap:extend(#main all) {}
/*  CSS */
#main,#wrap{
  width: 200px;
}
#main:after, #wrap:after {
    content: "Less is good!";
}

15.函数 判断类型
isnumber(#ff0);     // 判断给定的值 是否 是一个数字
iscolor(#ccc)      //判断给定的值 是否 是一个颜色
isurl("")         // 判断给定的值 是否 是一个 url

16.函数 颜色操作
rgb(90, 129, 32)   //  #5a8120
mix(#ff0000, #0000ff, 50%)   // #800080
hsl(90, 100%, 50%)   // #80ff00 
argb(rgba(90, 23, 148, 0.5)) // #805a1794
darken(hsl(90, 80%, 50%), 20%)  // #4d8a0f

17.函数 数学函数
ceil(2.4)  // 3  
floor(2.6)  // 2
percentage(0.5) // 50%
round(1.67, 1) // 1.7
sqrt(25cm)   // 5cm
abs(-18.6%)  // 18.6%

18.导入
导入 less 文件 可省略后缀
import "main"; //等价于
import "main.less";
@import 的位置可随意放置
#main{
  font-size:15px;
}
@import "style";
使用@import (reference)导入外部文件，但不会添加 把导入的文件 编译到最终输出中，只引用。
/* Less */
@import (reference) "bootstrap.less"; 
#wrap:extend(.navbar all){}






### sass基本用法:
1.变量 sass变量以$开头
$blue : #1875e7;　
div {
   color : $blue;
}
如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。
$side : left;
.rounded {
  border-#{$side}-radius: 5px;
}

2.计算功能
body {
　margin: (14px/2);
　top: 50px + 100px;
　right: $var * 10%;
}

3.嵌套
div h1 {
　color : red;
}
//可以写成：
div {
　hi {
　　color:red;
　}
}
//属性也可以嵌套，比如border-color属性，可以写成：
p {
　border: {
　　color: red;
　}
}
//注意，border后面必须加上冒号。
a {
　&:hover { color: #ffb3ff; }
}

4.继承
.class1 {
　border: 1px solid #ddd;
}
.class2 {
　@extend .class1;
　font-size:120%;
}

5.颜色函数
lighten(#cc3, 10%) // #d6d65c
darken(#cc3, 10%) // #a3a329
grayscale(#cc3) // #808080
complement(#cc3) // #33c

6.插入文件
@import命令，用来插入外部文件。
@import "path/filename.scss";
如果插入的是.css文件，则等同于css的import命令。
@import "foo.css";

7.条件语句
@if可以用来判断：
p {
　@if 1 + 1 == 2 { border: 1px solid; }
　@if 5 < 3 { border: 2px dotted; }
}
配套的还有@else命令：
@if lightness($color) > 30% {
　background-color: #000;
} @else {
　background-color: #fff;
}

8.循环语句
@for $i from 1 to 10 {
　.border-#{$i} {
　　border: #{$i}px solid blue;
　}
}
while循环
$i: 6;
@while $i > 0 {
　.item-#{$i} { width: 2em * $i; }
　$i: $i - 2;
}
each循环
@each $member in a, b, c, d {
　.#{$member} {
　　background-image: url("/image/#{$member}.jpg");
　}
}





### js基础:
#### 三种引入方式：

```js
// 内部引入
<script>
    console.log(11)
</script>
// 外部引入
<script src="index.js"></script>
// 行内引入
<button onclick="alert(11)"></button>
```
</script>

​	注释： // /* */  <!-- -->

#### 三种弹出框：

​	警示框：alert

​	输入框：prompt

​	确认框：confrim

#### 变量和数据类型：

​		原始数据类型（简单数据类型）：数字number 字符串string 布尔boolean null undefined         Symbol 表示独一无二的值，是ES6引入新的一种原始数据类型

​		复杂数据类型（引用数据类型）： 对象Object  数组Array  函数Function

#### 运算符：

​		算术运算符：

​			`+ - * / % ++ --`

​			+: 基本的功能有两个：

​					1、如果左右两端有任意一端是字符串，将另外一端转换为字符串执行拼接操作。

​					2、如果左右两端都是数字类型，可以进行相加操作。

​			num++;因为是＋1，所以得是数字，有隐式转换

​			++： 

​				1、++放前， 先++再参与运算

​				2、++放后，先返回原值，再++

​		比较运算符：

​				`> >= < <= !=`

​				`== ===`： ===的效率更高。  18 === '18'

​		逻辑运算符：

​				&& || ！

​				&&： 两边都为真，结果才为真。

​					如果左边为真，才需要判断右边，结果就是右边的值；如果左边为假，结果就是左边的值。

​				||： 两边全部为假，结果才为假。

​					如果左边为假，才需要判断右边，结果是右边的值； 如果左边为真，结果就是左边的值。

​				6种为假的情况： false 0 NaN '' null undefined

​		赋值运算符：

​			`= += -= *= /= %=`

#### 流程控制语句：

​		分支结构：

​			if

​			switch

​		循环结果：

​			for

​			while

​			do-while

​			break

​			continue

#### 数组：

​		是什么？能干什么？

​		怎么干？

​			创建数组： var arr = new Array(数组长度)  var arr= new Array(元素列表)  var arr=[元素列表]

​			添加元素：arr[arr.length] = 新元素

​			获取元素：arr[索引]
​	利用new Array()创建数组

```js
var arr = new Array(2);  表示长度为2  var arr = new Array(2,3); 表示数组 [2,3]
```

​	检测是否为数组：

```js
//instanceof  运算符  它可以用老检测是否为数组
var arr = [];
var obj = {};
console.log(arr instanceof Array); //true
console.log(obj instanceof Array); //false
console.log(Array.isArray(arr)); //ture
```

​	添加和删除数组元素：

```js
//1.  .push()添加数组元素  从后面依次添加
//push() 参数直接写  数组元素就可以了
console.log(arr.push(22,"pink")); //输出长度 22也是数组元素，不是下标
//2.  .unshift()添加数组元素  从前面依次添加
//.unshift() 参数直接写  数组元素就可以了
console.log(arr.unshift(22,"pink")); //输出长度 22也是数组元素，不是下标
//3.  .pop()删除数组元素  从后面删除
//arr.pop();  //pop没有参数
console.log(arr.pop()); //pop完毕后  返回的结果是  删除的那个元素
//4.  .shift()删除数组元素  从前面删除
//arr.shift();  //shift没有参数
console.log(arr.shift()); //shift完毕后  返回的结果是  删除的那个元素 
```

​	数组翻转和数组排序：

```js
// 1.数组翻转
var arr = ['red','green','blue'];
console.log(arr.reverse());//'blue','green','red'
// 原生js数组翻转
var arr = ['red','green','blue','pink','blue'];
var temp = [];
for (var i = 0; i < arr.length / 2; i++) {
  temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log(arr);
// 2.数组排序
//对一位数  的排序 不会出现问题
var arr1 = [1,3,2,4,7,5];
console.log(arr1.sort());
var arr2 = [1,33,23,4,7,5,12];
console.log(arr2.sort()); // 1,12,23,33,4,5,7
// 两位数时，只看首位数字
arr2.sort(function(a,b){
	return a-b;//升序排序
	// return b-a;//降序排序
});
console.log(arr2);
// 冒泡排序
var arr = [4,2,7,1,6];
var temp = [];
for (var i = 0; i < arr.length - 1; i++) {
  for (var j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j+1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr)
```

​	数组查找元素：

```js
indexOf,lastIndexOf:(数组)
// indexOf('要查找的字符',开始查找的位置)
// indexOf(数组元素)  返回该数组元素的索引号  从前面开始找
// 如果该数组存在多个该元素，只返回第一个值得  索引号
// 如果该数组不存在这个元素，返回  -1
var arr = ['red','green','blue','pink','blue'];
console.log(arr.indexOf('blue')); // 2
//查找该元素所有出现的位置
var arr = ['red','green','blue','pink','blue'];
var index = 0;
while(index !== -1) {
  index = arr.indexOf('blue',(index + 1));
  console.log(index);
}
// lastIndexOf(数组元素)  返回该数组元素的索引号  从后面开始找
console.log(arr.lastIndexOf('blue'));
```

​	数组转化为字符串：

```js
var arr = [1,2,3,4];
console.log(arr.toString());// 字符串1,2,3,4
var arr1 = ['red','green','blue','pink'];
console.log(arr1.join()); //默认分隔符为  ',' 逗号  把数组转换为字符串
console.log(arr1.join('-')); //设置分隔符为 '-'
```

​	数组拼接：

```js
var arr = [1,2,3,4];
var arr1 = ['red','green','blue','pink'];
console.log(arr.concat(5,6)); //把concat（）括号中的值加入到arr数组中
console.log(arr.concat(arr1)); //把concat（）括号中的数组加入到arr数组中
var arr2 = ['数组3','数组3'];
console.log(arr.concat(arr1,arr2));//把concat（）括号中的两个数组加入到arr数组中
```

​	数组元素复制：

```js
var arr = [1,2,3,4];
//slice(start,end)  start(包含start)  end（不包含end）
console.log(arr.slice(1));// 未设置end  那么就从从start 一直到结束 [2,3,4]
console.log(arr.slice(1,3));// 设置end  那么就从从start 一直到end  [2,3]
arr = arr.slice(1,2);
console.log(arr);//[2]
```

​	数组元素splice：

```js
// splice(index,howmany,element1,elementX)
// index 必需。规定从何处添加/删除元素。
// 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。
// howmany 必需。规定应该删除多少元素。必须是数字，但可以是 "0"。
// 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。
// element1 可选。规定要添加到数组的新元素。从 index 所指的下标处开始插入。 
// elementX 可选。可向数组添加若干元素。
//会对数组产生影响 
var arr = [1,2,3,4];
// arr.splice(1,0,'red');//不放进输出语句 在 索引号 1 处插入 'red'
// console.log(arr);[1,'red',2,3,4]
// arr.splice(1,1,'red');//在 索引号 1 处 用'red'替换 原来的 2
// console.log(arr);[1,'red',3,4]
arr.splice(1,2,'red');//在 索引号 1 处 用'red'替换 原来的 2,3  因为长度为2  [1,'red',4]
```

#### 形参和实参：

​	形参：形式上的参数，函数定义的时候  传递的参数

​	实参：实际上的参数，函数调用的时候  传递过去的参数

​	参数的作用  在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去

#### 函数：

```js
//字面量创建函数
function 函数名() {
	函数体；
}
//表达式创建函数
var 函数名 = function() {
	函数体；
}
//调用函数
函数名();
//参数应用
function 函数名(形参1，形参2...){
	return 形参1...;
	//只能有一个return  return后面的代码不会被执行
    //return num1,num2;//返回num2  return只会返回一个值，返回最后一个值  可以用 + 拼接  return num1 + '-' + num2;
    //函数没有return的话  就返回 undefined
}
函数名(实参1，实参2...);
//形参和实参的个数要相同
//形参比实参多，形参从头取值，有几个形参就取几个实参
//形参的个数少于实参，多于的形参定义为undefined，结果为NaN
```

特性：函数中也可以调用函数

#### 作用域及作用域链

​	JS没有块级作用域

​	全局作用域：在整个程序中都可以使用

​	局部作用域：在一个小的范围内使用，函数作用域就是一种局部作用域

​	变量的存在的范围：

​	作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取那个纸 ，这种结构我们称为作用域链   就近原则

#### JS引擎：

运行js 分为两步： 预解析   代码执行

(1)  预解析 js引擎会把js 里面所有的var  还有function  提升到当前作用域的最前面

(2)  代码执行  按照代码书写的顺序从上往下执行

预解析：

分为  变量解析（变量提升） 和 函数预解析（函数提升）
(1)  变量提升  就是把所有的变量声明提升到**当前**的作用域最前面  不提升赋值操作
(2)  函数提升  就是把所有的函数声明提升到**当前**作用域的最前面  不调用函数

```js
console.log(num);//undefined 因为只提升变量声明，赋值操作没有 提升（执行）
var num = 10;

fn();//11
function fn(){
    console.log(11);
}

fun();//报错	因为只提升函数声明，函数调用操作没有 提升（调用)
var fun = function() {
    console.log(22);
}
//函数表达式要调用，调用要放在函数后面

```

​	预解析面试题：

```js
f1();
console.log(c);//9
console.log(b);//9
console.log(a);//报错  没有声明  a is not undefined
function f1(){
    var a = b = c = 9;//相当于var a = 9;b = 9;c = 9;
    //b和c没有var声明，当做全局变量
    console.log(a);//9
    console.log(b);//9
    console.log(c);//9
}
```

#### 对象：

对象是一组无序的相关**属性**和**方法**的集合

**创建对象的方法：**对象字面量、new关键字、构造函数

```js
// 里面的属性或方法我们采取键值对的形式  键（属性名）：值（属性值）
// 多个属性或者方法中间用逗号隔开的
// 方法冒号后面跟的是一个匿名函数
var obj = {
    uname: '唐洲',
    age: 18,
    skill: function() {
        console.log('睡觉');
    }
}
// 使用对象
// 调用对象的属性，我们采取  对象名.属性名
// 调用属性还有一种方法  对象名['属性名']  引号必须要加
// 调用对象的方法  skill  对象名.方法名()  千万别忘记加小括号
console.log(obj.uname);//唐洲
console.log(obj['uname']);//唐洲
obj.skill();//睡觉
```

​	利用new关键字创建对象：

```js
var andy = new Object();
//给空对象添加属性和方法
//通过对象操作属性和方法的方式，来为对象增加属性和方法
andy.uname = 'pink';
andy.age = 18;
andy.sex = '男';
andy.sayHi = function() {
    console.log('大家好');
}
//Object()：第一个字母大写
//new Object()：需要new关键字
//使用的格式：对象.属性 = 值；
```

​	利用构造函数创建对象：

```js
//构造函数：是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与 new 运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
function 构造函数名(形参1，形参2，形参3){
    this.属性名1 = 形参1；
    this.属性名2 = 形参2；
    this.属性名3 = 形参3；
    this.方法名 = 函数体；
}
//构造函数调用格式
var obj = new 构造函数名(实参1，实参2，实参3);

//new关键字的作用
//1. 在构造函数代码开始执行之前，创建一个空对象；
//2. 修改this的指向，把this指向创建出来的空对象；
//3. 执行函数的代码
//4. 在函数完成之后，返回this---即创建出来的对象

//gender 性别
function Star(uname,age,gender){
    this.name = uname;
    this.age = age;
    this.gender = gender;
    this.sing = function(song) {
        console.log(song);
    }
    //不需要return
}
var ldh = new Star('刘德华',18,'男');
console.log(ldh.name);//刘德华
console.log(ldh['age']);//18
ldh.sing('冰雨');//冰雨
var zxy = new Star('张学友',19,'男');
console.log(zxy.name);//张学友
console.log(zxy['age']);//19
zxy.sing('李香兰');//李香兰
```

#### 构造函数：

​	1.构造函数名字**首字母**要大写
​	2.我们构造函数不需要**return** 就可以返回结果
​	3.我们调用构造函数  必须使用 **new**
​	4.我们只要new Star() 调用函数就创建一个对象 ldh()

#### 构造函数和对象

​	1.构造函数  明星  泛指一大类  它类似于Java 语言里的 类（class）
​	2.对象  特指  是一个具体的事物 
​	3.我们利用构造函数创建对象的过程我们也称为对象的实例化     

#### 变量，属性，函数，方法的区别：

1.变量和属性是相同的  他们都是用来存储数据的

​	**变量**：单独声明并赋值   使用的时候直接写变量名  单独存在

​	**属性**：在对象里面的不需要声明的  使用的时候必须是  对象.属性

2.函数和方法的相同点  都是实现某种功能  做某件事

​	**函数**  是单独声明的  并且调用的   函数名（）  单独存在

​	**方法**  在对象里面  调用的时候   对象.方法（）

​	方法是对象的一部分，函数不是对象的一部分，函数是单独封装操作的容器

#### for..in 遍历对象

```js
for (变量  in  对象) {
}
var obj = {}
for (var k in obj) {
	console.log(k);//k 变量  输出  得到的是 属性名
	console.log(obj[k]);//obj[k]得到的是属性值
}
//使用for  in  里面的变量  我们喜欢写 k 或者 key
```

#### 绝对值和三个取整方法：

```js
//1.绝对值
Math.abs（）;
console.log(Math.abs(1)); //1
console.log(Math.abs(-1)); //1
console.log(Math.abs('-1')); //1
console.log(Math.abs('pink')); //NaN
//2.三个取整方法
//(1) Math.floor()  地板  向下取整   往最小了取值
console.log(Math.floor(1.1));  //1
console.log(Math.floor(1.9));  //1
//(2) Math.ceil()  天花板  向上取整   往最大了取值
console.log(Math.floor(1.1));  //2
console.log(Math.floor(1.9));  //2
//(1) Math.round()  四舍五入 其它数字都是四舍五入，但是 .5 特殊 它往大了取
console.log(Math.round(1.1));  //1
console.log(Math.round(1.5));  //2
console.log(Math.round(-1.1));  //-1
console.log(Math.round(-1.5));  //-1 因为-1 比 -2大  所以是-1
```

#### Random随机数：

```js
Math.random();//Math对象随机数方法  random（） 返回一个随机小数	这个方法里面不跟参数
Math.floor(Math.random()*(max-min+1)+min);//我们想要得到两个数之间的随机整数  并且包含这2个整数：公式
```

#### 日期：

```js
var date = +new Date();//当前时间的总秒数
Date  日期
getFullYear()  返回当前日期的年份
getMonth() 返回当前日期的月份  0-11  所以要加一
var date = new Date();
console.log(date.getMonth()+1);
getDate()  返回的是  几号
getDay()  返回的是星期几  周一返回1  周六返回 6  周日返回  0
getHours()  返回时
getMinutes()  返回分
getSeconds()  返回秒 
```

#### 字符串操作：

​	字符串查找：

```js
//indexOf,lastIndexOf:(字符串)
//indexOf('要查找的字符',开始查找的位置);  如果该字符串存在多个该元素，只返回第一个值得  索引号
//如果该数组不存在这个元素，返回  -1  开始查找的位置是index索引号
var str = 'abcdef';
console.log(str.indexOf('a'));//0
console.log(str.indexOf('b'));//1
```

​	根据位置返回字符：

```js
//charAt(index)  返回指定位置的字符
//charCodeAt(index) 获取指定位置处字符的ASCII码
//str[index]  获取指定位置处的字符
var str = 'abcdef';
console.log(str.charAt(0));//a
console.log(str.charAt(1));//b
console.log(str.charCodeAt(0));//97
console.log(str.charCodeAt(1));//98
console.log(str[0]);//a
var str1 = 'abcdef';
console.log(str1[0]);//a
```

​	字符串拼接concat：

```js
// 1.concat('字符串1','字符串2'..) 
var str = 'andy';
console.log(str.concat('red'));//andyred
```

​	字符串截取：

```js
// 2.substr('截取的起始位置','截取的长度')
var str1 = '改革春风吹满地';
console.log(str1.substr(2,3));//春风吹
```

​	字符串替换：

```js
// 3.replace('被替换的字符','替换的字符') 它只会替换第一个字符
var str = 'andyadad';
console.log(str.replace('a','c'));//cndyadad
while (str.indexOf('a') !== -1) {
	str = str.replace('a','b');//因为a被替换了 所以下一个a成为了第一个
}
console.log(str);//bndybdbd
console.log(str.replace('andy','Y'));//Yadad
```

​	字符串转化为数组：

```js
// 4. 把字符转换为数组 .split(分隔符)   前面学过join把数组转换为字符
var str2 = 'red, green, blue';
console.log(str2.split(','));//['red','green','blue']
var str3 = 'a& b& c';
console.log(str3.split('&'));//['a','b','c']
```

​	字符串大小写转化：

```js
var str = 'redgreenblue';
console.log(str.toUpperCase());//REDGREENBLUE
var str = 'ABCDEF';
console.log(str.toLowerCase());//转化为小写字母abcdef

// element.toUpperCase(); 转化为大写字母
// element.toLowerCase(); 转化为小写字母
```



#### 程序运行计时器：

```
console.time("计时器的名字")；用来记时程序的运行时间
console.timeEnd("计时器的名字")；用来结束计时器 
```











### js高级:
利用class 创建类
面向过程
   一步一步实现，性能比面向对象高
   缺点：代码有重复，不易维护，不易复用
面向对象
   把功能分为多个对象，易复用，易维护
   缺点：性能比面向过程低

面向对象三大特性
   1.封装性
   2.继承性
   3.多态性（抽象）

对象实例化
   es6中没有变量提升，所以必须要先有构造函数，才能实例化对象
   使用new关键字
   class Person {
      类名使用大驼峰命名法  不加小括号
      constructor(uname) { 称为构造函数
         参数放在这里的小括号里 
         this.uname = uname;
         要用this指向，this是谁调用指向谁
      }
      这里也不需要逗号隔开
      也不需要function
      say() {
      }
   }
   继承  extends关键字
   class Child extends Person {
      constructor (uname) {
         super(uname);使用super调用父亲的数据要放在子类的this之前
         this.uname = uname;
      }
   }
   继承中 方法调用时，先看子类有没有，有就调用子类的方法，没有就调用父类的方法（就近原则）

双击事件
   el.ondblclick = function() {}
双击禁止选定文字
   window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
阻止冒泡
   e.stopPropagation();
阻止默认行为
   e.preventDefault();
添加元素
   el.insertAdjacentHTML('beforeend', li);
选中文字
   input.select();

创建对象三种方式：
   1.利用new Object() 创建对象
   var obj = new Object();
   2.利用对象字面量创建对象
   var obj = {};
   3.利用构造函数创建对象
   function Star(uname) {
      this.uname = uname;
   }
   var ldh = new Star('刘德华');
   注意：
      首字母大写
      构造函数要和 new 一起使用
      不需要return
   new做的4件事情：
      1.在内存中创建一个空对象
      2.把this指向调用的对象
      3.执行构造函数的代码
      4.返回值

静态成员和实例成员：
静态成员： 静态成员只能通过构造函数来访问，通过构造函数本身添加的
实例成员： 实例成员只能通过实例化的对象来访问，通过内部this添加的

原型是什么？
   是一个对象，也被称为原型对象   注意：只要我们定义了一个构造函数，系统就会给这个构造函数分配一个原型对象
作用：共享方法    可以节省内存空间
一般把公共属性定义到构造函数里面，公共方法放在原型对象上

只要是系统提供的  构造函数  是不允许更改原型对象的，可以添加

实例化对象的__proto__ 与构造函数的原型对象 proptotype 等价
__proto__(非标准) 指向构造函数的prototype  所以对象可以使用构造函数的方法
原型对象函数里的this指向实例化对象  谁调用指向谁

Star.prototype = {
   sing: function() {},
   movie: function() {}
}
这种情况会导致Star.prototype 会被赋值的对象覆盖
那么就需要constructor 指回原来的构造函数
Star.prototype.constructor = Star;
二选一
Star.prototype = {
   constructor: Star,
   sing: function() {},
   movie: function() {}
}

Star 构造函数  利用Star.prototype 调用原型对象
Star.constructor 利用原型对象.constructor  指向Star构造函数
Star 构造函数 使用new 实例化一个对象
new Star 对象 利用Star.__proto__ 指向原型对象，从而达到调用原型对象的方法

只要是 对象 就会有__proto__ 原型，指向原型对象
我们Star原型对象里面的__proto__原型指向的是 Object.prototype
我们Object.prototype原型对象里面的__proto__原型  指向为 null

原型链：
实例化对象 先找自身 -> 没有 -> 构造函数的原型对象 -> 没有 -> Object的原型对象 -> 没有 -> null
一层一层往上找  先找实例化对象，再找构造函数，再找Object，再就为null  
在最上层没有找到就返回undefined(属性)或报错(方法)

call方法：
   1.调用函数 fn.call();
   2.改变函数内部this指向,call方法的第一个参数就是被指向的对象
      function fn(x,y) {
         console.log('11');
         console.log(x + y);
      }
      var o = {name: 'andy'};
      fn.call(o,1,2);// this指向o对象  返回 11  3
   bind,apply 也可以改变this指向

继承父构造函数：
   function Father(uname,age) {
      this.uname = uname;
      this.age = age;
   }
   Father.prototype.money = function () {
      console.log(1000);
   }
   function Son(uname,age,score) {
      // 使用call改变this指向
      Father.call(this, uname, age);
      this.score = score;
   }
   Son.prototype.exam = function () {
      console.log('考试');
   }
   var ldh = new Son('tz',16,60);
   console.log(ldh); // Son{uname: "tz", age: 16, score: 60}
   继承父构造函数方法
      Son.prototype = Father.prototype; 这样是错误的，如果修改子构造函数，那么父构造函数也会被修改，因为子原型对象指向父原型对象的地址
   Son.prototype = new Father();  正确,指向父构造函数的实例化对象，所以不会修改父构造函数的值
   Son.prototype.constructor = Son;

ES5新增方法
   迭代方法：forEach()/map()/filter()/some()/every()
   var arr = [1,2,3];
   forEach(遍历数组):
      arr.forEach(function(value,index,array) {
         console.log('每个数组元素'+value);
         console.log('每个数组元素的索引号'+index);
         console.log('数组本身'+array);
      });
   filter(过滤筛选):
      返回一个新数组
      筛选大于2的值
      var newArr = arr.filter(function(value,index,arr) {
         return value >= 2;
         return不会终止循环，当数组所有数据遍历一次之后自动终止
      });
   some(过滤筛选):
      返回值是布尔值，如果查找到这个元素返回true，没有找到返回false
      var flag = arr.some(function(value,index,array) {
         return value == 1;
         return会终止循环，只要有一次满足条件就终止循环
      });
      indexOf() 适用于简单数据类型
      some()  可用于复杂数据类型  如对象
      var arr2 = [{
         name: 'ls',
         age: 20
      },{
         name: 'ws',
         age: 18
      },{
         name: 'ww',
         age: 25
      }];
      var flag1 = arr2.some(function(value,index,array) {
         return value.age == 20;
      });
      console.log(flag1);//true
   trim(去除两侧空格):
      input[0].value.trim();
   keys(遍历对象):
      返回一个数组    获取对象里面的所有的属性
      var obj = {
			id: 1,
			sname: '小米',
			price: 999,
			num: 5
		}
		var arr = Object.keys(obj);
		console.log(arr);//["id", "sname", "price", "num"] 

函数定义:
   1.自定义函数（命名函数）
   function fn() {}
   2.函数表达式（匿名函数）
   var fun = function() {}
   3.利用new 关键字
   var f = new Function('a','b','console.log(a + b)');
   f(1,3);
   函数也属于对象
   所有的函数都是 Function 的实例（对象）
函数调用:
   1.普通函数  window
      function fn() {}
      fn();  函数名() 函数名加小括号调用
   2.对象的方法  实例对象
      var o = {sayhi: function() {}}
      o.sayhi(); 对象.sayhi  对象调用时
   3.构造函数   实例对象
      function Star() {}
      new Star(); new的时候
   4.绑定事件函数  谁调用事件指向谁
      btn.onclick = function () {} 点击时调用
   5.定时器函数  window
      setInterval(function() {alert(1)},1000);每过1秒调用一次
   6.立即执行函数  window
      (function() {})();立即执行函数是自动调用  防止命名污染问题/命名冲突问题
this指向:
   1.普通函数     window
   2.对象         实例对象
   3.构造函数     实例对象  原型对象（方法）里的this 也指向这个实例对象
   4.绑定事件函数  谁调用事件指向谁（绑定事件对象）
   5.定时器函数    window
   6.立即执行函数  window
改变函数内部this指向:
   call方法:
      可以调用函数，还可以修改函数内部的this指向
      var o ={name: 'andy'};
      function fn(a,b) {console.log(this);console.log(a+b);}
      fn(o, 1, 3);
   bind方法:
      不会调用原来的函数，拷贝一个函数出来，返回一个新函数，改变了新函数里面的this指向
      var o = {name: 'andy'};
      function fn() {
         console.log(this);
      }
      var f = fn.bind(o);
      f();
   apply方法:
      可以调用函数，可以修改函数内部的this指向
      但是参数必须是数组/伪数组  返回值是数组中是字符串 就返回字符串 数组是数字，就返回数字   也就是说，数组中是什么类型数据，就返回什么数据类型
      主要应用  可以利用 apply 借助于数学内置对象求最大值
      var o = {name: 'andy'};
      function fn(arr) {
         console.log(this);
         console.log(arr);// 'pink'
      };
      fn.apply(o,['pink']);
      var arr = [1,66,2,5];
      var max = Math.max.apply(Math, arr);//参数1 可以是null 但是尽量指向调用的对象
      console.log(max);//66
   总结:
      相同点：
         可以改变this指向
         this指向 方法中的第一个参数
      不同：
         call和apply可以调用函数
         bind不可以调用函数，返回一个新函数 
         apply传入的数据要是数组，返回数组中的数据类型（如，字符串，数字）
         应用场景：
            call：继承（借调构造函数）
            apply：利用Math.max来求数组中的最大值和最小值
            bind：定时器，点击事件
严格模式:
   IE10以上版本浏览器支持
   在script中开启严格模式

   <script>
      'use strict';
   </script>
   在函数中开启严格模式
   <script>
      function fn() {
         'use strict';
      });
   </script>
   1.消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。 
   2.消除代码运行的一些不安全之处，保证代码运行的安全。
   3.提高编译器效率，增加运行速度。
   4.禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class,enum,export, extends, import, super 不能做变量名 
   严格模式下的变化：
      1.严格模式下，变量必须先声明再使用
      2.严格模式不允许删除变量
      3.严格模式下全局作用域中函数中的this 的指向是undefined
      4.严格模式下，如果构造函数不加new调用，this指向的是undefined 如果给他赋值则会报错
      5.严格模式下，定时器this还是指向window
      6.函数的形参 是不能重复的
高阶函数:
   接受函数作为参数或将函数作为返回值输出   最典型的是回调函数
闭包:
   指有权访问另一个函数作用域中变量的函数  有Closure 说明有闭包产生
   一个作用域可以访问另一个函数内的局部变量   闭包函数就是被访问的函数
   闭包作用:
      延长变量的作用范围,延长了变量的生命周期   弊端：会造成内存泄漏
   内存泄漏：本因该被GC垃圾回收机制回收的 变量或者作用域，但是没有进行回收，导致了这些变量和作用域占据了内存空间，导致了我们的可用内存变少
   GC垃圾回收机制：专门隔一段时间就检查一下内存中是否有数据可以被回收
递归函数:
   函数内部自己调用自己，这个函数就是递归函数
   递归里面必须加退出条件,一层一层往外返回

Object.assign()用于对象合并

​	Object.assign(target, source1, source2)    第一个参数是目标对象，后面的参数都是源对象 

正则表达式:
   正则 是用来匹配校验我们的字符串
   1.利用RegExp对象来创建 正则表达式
      var reg = new RegExp(正则表达式);
   2.利用字面量创建 正则表达式
      var reg = /正则表达式/;
   3.test 用于检测是否符合正则表达式
      reg.test(需要校验的字符串)  返回布尔值
   4.边界符
      ^  $
      /abc/  不需要加引号，不管是字符型还是数字型
      /abc/  只要包含abc就返回true
      /^abc/  必须以abc开头才返回true 如abcd true  aabcd false
      /^abc$/  必须是abc才返回true  aabcc false
   反义符
      /^[ ^a-zA-Z0-9]$/  不能包含这些字符  与边界符不同
   5.字符类
      [] 表示有一系列字符可以选择，只要匹配其中一个就可以了
      /[abc]/ 只要包含abc 一个都返回true  agsd true
      /^[abc]$/ 三选一 只有是a，b，c 这三个字母才返回true  a true  aa false
      /^[a-z]$/ 26个字母任何一个字母返回true  aa false  x true  A false
      /^[a-zA-Z0-9]$/  26个大小写字母和数字 才返回true
   6.量词符
      *  可以出现0次或多次  /^a*$/
      +  可以出现1次或多次  /^a+$/
      ?  可以出现1次或0次  /^a?$/
      {3}  可以出现3次   /^a{3}$/   /^abc{3}/  只需要c重复3次即可  /^(abc){3}/  需要abc重复3次
      {3,}  可以出现3次或3次以上  /^a{3,}$/
      {3,16}  可以出现3次到16次 包含3和16  中间不能有空格  /^a{3,16}$/
   7.修饰符 g  i
      /正则表达式/g  全局匹配
      /正则表达式/i  忽略大小写
   8.元字符
      \d 匹配0-9的任一数字 相当于[0-9]
		\D 匹配除0-9的任一字符 相当于[^0-9]
		\w 匹配任意下滑线、数字、字母  相当于[A-Za-z0-9_]
		\W 匹配除滑线、数字、字母的任一字符  相当于[^A-Za-z0-9_]
		\s 匹配空格(包括换行符、制表符、空格符等) 相当于[\t\r\n\v\f]
		\S 匹配非空格字符 相当于[ ^\t\r\n\v\f]/
字符串有几个常用方法:
   str.trim()  去除两侧空格
   str.substr()  截取字符串
   str.split()  切割,转换为数组
   str.replace()  替换
el.oninput  表单内容改变的时候触发的事件

let 关键字:
   let 关键字是用来声明变量的
   let 只能声明一次
   使用let 关键字具有块级作用域
   在一个大括号中，使用let 关键字才具有块级作用域  var关键字是不具备这个特点的
   防止循环变量变成全局变量
   let 只能先声明再调用，没有变量提升
   使用let 关键字声明的变量存在暂时性死区
      暂时性死区:
         在当前块级作用域中，使用了let的变量的话，它会优先找自己，如果自己没有，才找外面
const 关键字:
   常量
   const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。  有块级作用域
let 与 const 区别:
   let:
      具备块级作用域的特点
      不存在变量提升
      存在暂时性死区
   const:
      常量
      具备块级作用域的特点
      不存在变量提升
      存在暂时性死区
      声明的时候必须要赋值
      不能去重新赋值
解构赋值:
   数组解构:
      let [a,b,c] = [1,2,3];//a=1 b=2 c=3
      let [a,b,c,d] = [1,2,3];//a=1 b=2 c=3 d=undefined
      let [h] = [1,2];//h=1
      let [a,,c] = [1,2,3];//a=1 c=3
      let [a = 1, b] = []; // a = 1, b = undefined
      let [a, ...b] = [1,2,3];//a = 1   b = [2,3]
      console.log([a, ...b]);//[1, 2, 3]
   对象解构:
      let {name,age} = {name: 'zs',age: 18};
      let {name: myName,age} = {name: 'zs',age: 18};//用myName来接收
      好处在于：方便我们取出在对象中需要的属性
箭头函数:
   let fn = (形参) => {函数体}
   1.在箭头函数中 如果函数体只有一句代码  并且代码的执行结果就是函数的返回值 函数体大括号可以省略
   2.在箭头函数中 如果形参只有一个 形参外侧的小括号也可以省略
   3.在箭头函数中 箭头函数不绑定this 箭头函数没有自己的this  如果在箭头函数中使用this this将指向箭头函数定义位置中作用域的this
剩余参数:
   function(...arg) {
      arg 就是所有的实参的集合
   }
   作用:
      在不定实参的情况下，方便进行获取
   配合解构赋值使用  let [a,...b] = [1,2,3];
拓展运算符:
   应用场景:
      合并数组: let arr = [1,2];let arr1 = [3,4]; let newArr= [...arr,...arr1];
      把集合转成数组: let newArr = [...伪数组];
      拷贝对象里的属性: let newInfo = {...oldInfo}
数组方法:
   Array.from(伪数组,回调函数) 
   Array.find((当前元素,索引) => {}) 找到数组中符合条件第一个元素，并且把这个元素返回
   Array.finIndex((当前元素,索引) => {}) 找到数组中符合条件第一个元素所对应的索引号
   Array.includes() 数组中是否包含了该元素
字符串方法:
   模板字符串:
      反引号 ``
      好处:  能够换行，就能在我们js代码中写HTML的结构
      如何去引用 变量和调用函数  ${变量名|函数名()}
   string.startsWith()  判断字符以什么开头
   string.endWith()  判断字符以什么结尾
   string.repeat(n)  重复多少次
set:
   1.Set 类似于数组，但是成员的值都是唯一的，没有重复
   2.创建set  let set = new Set();
   3.Set实例方法:
      add(value): 添加某个值，返回Set结构本身
      delete(value): 删除某个值，返回一个布尔值，表示删除是否成功
      has(value): 返回一个布尔值，表示该值是否为Set的成员
      clear(): 清除所有成员，没有返回值
   4.遍历Set数据结构
      let s5 = new Set([1,2,3,4]);
		s5.forEach(value => {
			console.log(value);//1  2  3  4
		});











### js正则表达式:
# JS正则表达式语法详解

## 前言

正则表达式在线图形化描述：https://regexper.com

什么是正则表达式？说白了，就是用来按照某种规则去匹配字符串的表达式



## RegExp对象

JS 通过内置对象 `RegExp` 支持正则表达式，有两种方法实例化 `RegExp` 对象

- 字面量
- 构造函数



## 字面量

范例：

```javascript
var reg = /\bis\b/
'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS')
// 返回：'He IS a boy. This is a dog. Where is she?'

var reg = /\bis\b/g
'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS')
// 返回：'He IS a boy. This IS a dog. Where IS she?'
```

补充说明：`\b` 是单词边界的意思



## 构造函数

范例：

```javascript
var reg = new RegExp('\\bis\\b')
'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS')
// 返回：'He IS a boy. This is a dog. Where is she?'

var reg = new RegExp('\\bis\\b', 'g')
'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS')
// 返回：'He IS a boy. This IS a dog. Where IS she?'
```

补充说明：

1. 第一个参数是正则表达式的源文本，第二个参数是修饰符
2. `\\bis\\b`，这里为什么要用两个反斜线？因为要当做普通的反斜线文本传递进去，所以需要转义



## 修饰符

- `g`：global 全文搜索，不添加，搜索到第一个匹配停止
- `i`：ignore case 忽略大小写，默认大小写敏感
- `m`：multiple lines 多行搜索



全文搜索和忽略大小写范例：

```javascript
'He is a boy. This is a dog. Is he?'.replace(/\bis\b/, '0')
// 返回：'He 0 a boy. This is a dog. Is he?'

'He is a boy. This is a dog. Is he?'.replace(/\bis\b/g, '0')
// 返回：'He 0 a boy. This 0 a dog. Is he?'

'He is a boy. This is a dog. Is he?'.replace(/\bis\b/gi, '0')
// 返回：'He 0 a boy. This 0 a dog. 0 he?'
```



多行搜索范例：

```javascript
'@123\n@456\n@789'.replace(/^@\d/g, 'X')
// 返回：`X123\n@456\n@789`

'@123\n@456\n@789'.replace(/^@\d/gm, 'X')
// 返回：`X123\nX456\nX789`
```

补充说明：`\n` 是换行转义字符



## 元字符

正则表达式由两种基本字符类型组成：

- 原义字符
- 元字符，元字符是在正则表达式中有特殊含义的非字母字符，如：`* + ? ^ $ . - | \ ( ) { } [ ] \t \v \n \r \f`



## 字符类

一般情况下正则表达式一个字符对应字符串一个字符

我们可以使用元字符 `[]` 来构建一个简单的类

所谓类就是一个泛指，而不是特指某个字符

表达式 `[abc]` 把字符 `a` 或 `b` 或 `c` 归为一类，可以匹配这三个字符

范例：

```javascript
'a1b2c3d4'.replace(/[abc]/g, 'X')
// 返回：'X1X2X3d4'
```



## 字符类取反

使用元字符 `^` 创建反向类

反向类的意思是不属于某类的内容

表达式 `[^abc]` 表示不是字符 `a` 或 `b` 或 `c` 的内容

范例：

```javascript
'a1b2c3d4'.replace(/[^abc]/g, 'X')
// 返回：'aXbXcXXX'
```



## 范围类

正则表达式还提供了范围类

我们可以使用 `[a-z]` 来连接两个字符表示从 `a` 到 `z` 的任意字符

这是个闭区间，也就是包含 `a` 和 `z` 本身

在 `[]` 组成的类内部是可以连写的，如：`[a-zA-Z]`

范例1：

```javascript
'a1b2d3x4z9'.replace(/[a-z]/g, 'Q')
// 返回：'Q1Q2Q3Q4Q9'
```

范例2：

```javascript
'a1b2d3x4z9AJHGYXG'.replace(/[a-zA-Z]/g, 'Q')
// 返回：'Q1Q2Q3Q4Q9QQQQQQQ'
```

范例3：

```javascript
'2019-12-15'.replace(/[0-9]/g, 'X')
// 返回：'XXXX-XX-XX'

'2019-12-15'.replace(/[0-9-]/g, 'X')
// 返回：'XXXXXXXXXX'
```

补充说明：

1. `-` 在 `[]` 里面是指某个范围区间的元字符，若想要把 `-` 也匹配到，就需要转义 `\-` 
2. 若 `-` 出现在字符类 `[]` 中，并且 `-` 左右两边都有字符，则为范围区间元字符，若任意一边无字符，则为原义字符 `-` 



## 预定义字符类

正则表达式提供预定义字符类来匹配常见的字符类：

- `.`，除了回车符和换行符之外的所有字符，等价于 `[^\r\n]` 
- `\d`，数字字符，等价于 `[0-9]` 
- `\D`，非数字字符，等价于 `[^0-9]` 
- `\s`，空白符，等价于 `[\t\v\r\n\f]` 
- `\S`，非空白符，等价于 `[^\t\v\r\n\f]` 
- `\w`，单词字符（字符、数字、下划线），等价于 `[a-zA-Z_0-9]` 
- `\W`，非单词字符，等价于 `[^a-zA-Z_0-9]` 

范例，匹配一个 `ab + 数字 + 单词字符` 的字符串：`/ab\d\w/` 



## 边界

正则表达式还提供了几个常用的边界匹配字符

- `^`，以...开始
- `$`，以...结束
- `\b`，单词边界
- `\B`，非单词边界



## 量词

如果我们希望匹配一个连续出现**20次**数字的字符串：

`/\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d/` 

这样写，未免太 lowb 了

正则表达式提供了量词：

- `?`，出现 0 次或 1 次
- `+`，出现 1 次或多次
- `*`，出现任意次
- `{n}`，出现 n 次
- `{n,m}`，出现 n 到 m 次
- `{n,}`，至少出现 n 次，注意 n 后面的逗号不能省

范例1：`\d{20}` 

范例2：`\d{20}\w\d?\w+\d*\d{3}\w{3,5}\d{3,}` 



## 贪婪模式

所谓贪婪模式，就是尽可能多的匹配，也就是说就算匹配成功还要继续往下尝试匹配更多满足条件的字符

正则表达式，默认就是贪婪模式

范例：

```javascript
'12345678'.replace(/\d{3,6}/, 'X')
// 返回：'X78'
```



## 非贪婪模式

所谓非贪婪模式，就是让正则表达式尽可能少的匹配，也就是说一旦成功匹配，本次便不再继续尝试匹配更多满足条件的字符

做法很简单，在量词后加上 `?` 即可

范例：

```javascript
'12345678'.replace(/\d{3,6}?/, 'X')
// 返回：'X45678'
```



## 分组

假设我们要匹配字符串 `Byron` 连续出现 3 次的场景，如果这样写：`/Byron{3}/`，是达不到我们想要的效果的，这里实际是 `n` 重复 3 次的意思

使用 `()` 可以达到分组的功能，让量词作用于分组，如：`/(Byron){3}/`，这样就可以满足我们的需求

范例：

```javascript
'a1b2c3d4'.replace(/[a-z]\d{3}/g, 'X')
// 返回：'a1b2c3d4'

'a1b2c3d4'.replace(/([a-z]\d){3}/g, 'X')
// 返回：'Xd4'
```



## 或

正则表达式中，使用 `|` 可以达到或的效果

范例：

```javascript
'ByronCasper'.replace(/Byron|Casper/g, 'X')
// 返回：'XX'

'ByronsperByrCasper'.replace(/Byr(on|Ca)sper/g, 'X')
// 返回：'XX'
```



## 反向引用分组

假设我们想要把 `2019-12-15` 改成 `12/15/2019`，就可以用反向引用分组轻松搞定

范例：

```javascript
'2019-12-15'.replace(/(\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1')
// 返回：'12/15/2019'
```

补充说明：其中 `$1`、`$2`、`$3`，表示直接引用第几个分组（也就是小括号）匹配到的字符



## 忽略分组

如果不希望捕获某些分组，只需要在分组内加上 `?:` 就可以了

范例（忽略年份这个分组）：

```javascript
'2019-12-15'.replace(/(?:\d{4})-(\d{2})-(\d{2})/g, '$2/$3/$1')
// 返回：'15/$3/12'
```



## 前瞻后瞻

正则表达式从文本头部向尾部开始解析，文本尾部方向，称为 **前**

前瞻就是在正则表达式匹配到规则的时候，向前检查是否符合断言，后瞻方向相反

符合和不符合特定断言称为 **肯定** 匹配和 **否定** 匹配

ES9才支持后瞻

语法如下：

- 肯定前瞻，`exp(?=assert)`
- 否定前瞻，`exp(?!assert)`
- 肯定后瞻，`exp(?<=assert)`，ES9才支持
- 否定后瞻，`exp(?<!assert)`，ES9才支持

范例：

```javascript
'a2*3'.replace(/\w(?=\d)/g, 'X')
// 返回：'X2*3'

'a2*34v8'.replace(/\w(?=\d)/g, 'X')
// 返回：'X2*X4X8'

'a2*34vv'.replace(/\w(?=\d)/g, 'X')
// 返回：'X2*X4vv'

'a2*34vv'.replace(/\w(?!\d)/g, 'X')
// 返回：'aX*3XXX'
```



## 字符串方法

### String.prototype.search

`search` 方法用于检索字符串中指定的子字符串，或检索与正则表达式匹配的子字符串

方法返回第一个匹配结果的索引，匹配不到返回 **-1**

`search` 方法不执行全局匹配，它将忽略修饰符 `g`，并且总是从字符串的开始进行检索

范例：

```javascript
'a1b2c3d1'.search('1')
// 返回：1

'a1b2c3d1'.search('10')
// 返回：-1

'a1b2c3d1'.search(1)
// 返回：1

'a1b2c3d1'.search(/1/)
// 返回：1

'a1b2c3d1'.search(/1/g)
// 返回：1
```



### String.prototype.match(reg)

`match` 方法将检索字符串，以找到一个或多个与 `reg` 匹配的文本

`reg` 是否具有修饰符 `g`，对结果影响很大

- 没有修饰符 `g`：
  - 如果 `reg` 没有修饰符 `g`，那么 `match` 方法就只能在字符串中执行一次匹配

  - 如果没有找到任何匹配的文本，将返回 `null`，否则它将返回一个数组，其中存放了与它找到的匹配文本有关的信息

  - 返回数组的第一个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的分组匹配的文本

  - 除了常规的数组元素之外，返回的数组对象还包含两个额外的属性

    - `index`：匹配文本的起始字符在字符串中的位置
    - input：源字符串的引用

  - 范例：

    ```javascript
    var reg = /\d(\w)\d/
    var str = '$1a2b3c4d5e'
    var result = str.match(reg)
    console.log(result)
    // 输出：['1a2', 'a']
    console.log(result.index, ',', result.input)
    // 输出：1 , $1a2b3c4d5e
    ```

- 有修饰符 `g`：

  - 如果 `reg` 具有修饰符 `g`，则 `match` 方法执行全文检索，找到字符串中所有的匹配文本

  - 如果没有找到任何匹配的文本，则返回 `null`，如果找到了一个或多个匹配的文本，则返回一个数组

  - 数组元素中存放的是字符串中所有的匹配文本，并且该数组对象没有 `index` 和 `input` 两个额外的属性

  - 范例：

    ```javascript
    var reg = /\d(\w)\d/g
    var str = '$1a2b3c4d5e'
    var result = str.match(reg)
    console.log(result)
    // 输出：['1a2', '3c4']
    console.log(result.index, ',', result.input)
    // 输出：undefined , undefined
    ```

    

### String.prototype.split

我们经常使用 `split` 方法把字符串分割为字符串数组，如：

```javascript
'a,b,c,d'.split(',')
// 返回：['a', 'b', 'c', 'd']
```

但是在一些复杂的分割情况下，我们就需要使用正则表达式解决，如：

```javascript
'a1b2c3d'.split(/\d/)
// 返回：['a', 'b', 'c', 'd']
```



### String.prototype.replace

我们知道 `replace` 方法是用来替换字符串的，但其实它可以用正则表达式来替换

范例：

```javascript
'a1b'.replace('1', 2)
// 返回：a2b

'a1b1c1'.replace('1', 2)
// 返回：a2b1c1

'a1b1c1'.replace(/1/g, 2)
// 返回：a2b2c2

'a1b1c1'.replace(/1/, 2)
// 返回：a2b1c1
```

补充说明：

- 第二个参数也可以接收一个函数，函数的参数列表如下：

  - 匹配的字符串
  - 正则表达式分组内容，没有分组则没有该参数
  - 匹配项在字符串中的索引
  - 源字符串

- 下面用正则表达式有无分组来分别演示：

  - 无分组范例：

    ```javascript
    'a1b2c3d4e5'.replace(/\d/g, function (matchedStr, index, origin) {
      console.log(index, ',', origin)
      return parseInt(matchedStr) + 1
    })
    // replace后，最终返回：a2b3c4d5e6
    // 输出如下：
    // 1 , a1b2c3d4e5
    // 3 , a1b2c3d4e5
    // 5 , a1b2c3d4e5
    // 7 , a1b2c3d4e5
    // 9 , a1b2c3d4e5
    ```

  - 有分组范例：

    ```javascript
    'a1b2c3d4e5'.replace(/(\d)(\w)(\d)/g, function (matchedStr, group1Str, group2Str, group3Str, index, origin) {
      console.log(matchedStr, ',', group1Str, ',', group2Str, ',', group3Str, ',', index, ',', origin)
      return group1Str + group3Str
    })
    // replace后，最终返回：a12c34e5
    // 输出如下：
    // 1b2 , 1 , b , 2 , 1 , a1b2c3d4e5
    // 3d4 , 3 , d , 4 , 5 , a1b2c3d4e5
    ```











### jsAPI：
### JSAPI总结

console.dir()  打印我们返回的元素对象  更好的查看里面的属性和方法

#### 1.API的概念

​	API是一些预先定义的函数，只需要直接调用即可，API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。

#### 2.Web API的概念

​	Web API是浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM），主要针对于浏览器做交互效果。

#### 3.DOM

​	文档对象模型，是W3C组织推荐的处理**可扩展标记语言**的标准接口。

​	DOM是W3C组织制定的一套处理html和xml文档的规范，所有浏览器都遵循了这套标准。

#### 4.获取元素

| 获取元素                     |                                         |
| ---------------------------- | --------------------------------------- |
| 根据ID获取                   | document.getElementById(id);            |
| 根据标签名获取               | document.getElementByTagName('标签名'); |
| **H5新增获取元素方式：**     |                                         |
| 根据类名返回元素对象集合     | document.getElementByClassName('类名')  |
| 根据指定选择器返回第一个对象 | document.querySelector('选择器')        |
| 根据指定选择器返回           | document.querySelectorAll('选择器')     |
| **获取特殊元素(body,html):** |                                         |
| 返回body元素对象             | document.body                           |
| 返回html元素对象             | document.documentElement                |

this.contentsp = this.main.querySelectorAll('.content  section  span');//获取span标签

#### 5.事件

​	事件三要素：

​		事件源：触发事件的元素

​		事件类型：例如click点击事件

​		事件处理程序：事件触发后要执行的代码(函数形式)，事件处理函数

| 鼠标事件    | 触发条件                               |
| ----------- | -------------------------------------- |
| onclick     | 鼠标点击左键触发                       |
| onmouseover | 鼠标经过触发                           |
| onmouseout  | 鼠标离开触发                           |
| onfocus     | 获得鼠标焦点触发                       |
| onblur      | 失去鼠标焦点触发                       |
| onmousemove | 鼠标移动触发                           |
| onmouseup   | 鼠标弹起触发                           |
| onmousedown | 鼠标按下触发                           |
| ondblclick  | 双击事件                               |
| e.clientX   | 返回鼠标相对于浏览器窗口可视区的x坐标  |
| e.clientY   | 返回鼠标相对于浏览器窗口可视区的y坐标  |
| e.pageX     | 返回鼠标相对于文档页面的x坐标 IE9 支持 |
| e.pageY     | 返回鼠标相对于文档页面的y坐标 IE9 支持 |
| e.screenX   | 返回鼠标相对于电脑屏幕的x坐标          |
| e.screenY   | 返回鼠标相对于电脑屏幕的y坐标          |
| contextmenu | 右键菜单                               |
| selectstart | 选中文字                               |

```js
我是一段不愿意分享的文字
<script>
// 1. contextmenu 我们可以禁用右键菜单
document.addEventListener('contextmenu', function(e) {
     e.preventDefault();
})
// 2. 禁止选中文字 selectstart
 document.addEventListener('selectstart', function(e) {
     e.preventDefault();
})
</script>
```

// 禁止双击选中文字
window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

#### 6.操作元素

​	element.innerHTML：从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

​	element.innerText：起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

#### 7.样式属性操作

​	element.style：行内样式操作

​	element.className：类名样式操作

#### 8.设置与获取属性值

​	element.setAttribute('属性名','值'); // 设置属性值

​	element.getAttribute('属性名'); // 获取属性值

​	element.removeAttribute('属性');  // 移除属性

​	h5新增的获取自定义属性的方法 它只能获取data-开头的

​	dataset 是一个集合里面存放了所有以data开头的自定义属

​	如果自定义属性里面有多个-链接的单词，我们获取的时候采取 驼峰命名法

#### 9.节点操作

一般节点至少拥有nodeType（节点类型）、nodeName（节点名称）、nodeValue（节点值）三个基本属性
元素节点 nodeType为 1
属性节点 nodeType为 2
文本节点 nodeType为 3（文本节点包含文字，空格，换行等）

| 节点操作                     | 说明                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| node.parentNode              | 父级节点                                                     |
| parentNode.childNodes        | 子节点  标准                                                 |
| parentNode.children          | 子节点  非标准                                               |
| parentNode.firstChild        | 第一个子节点                                                 |
| parentNode.lastChild         | 最后一个子节点                                               |
| parentNode.firstElementChild | 第一个子**元素**节点(IE9以上支持)                            |
| parentNode.lastElementChild  | 最后一个子**元素**节点(IE9以上支持)                          |
| node.nextSibling             | 返回当前元素的下一个兄弟节点，找不到返回null                 |
| node.previousSibling         | 返回当前元素的上一个兄弟节点，找不到返回null                 |
| node.nextElementSibling      | 返回当前元素的下一个兄弟**元素**节点，找不到返回null(IE9以上支持) |
| node.previousElementSibling  | 返回当前元素的上一个兄弟**元素**节点，找不到返回null(IE9以上支持) |

#### 10.创建节点

​	document.createElement('tagName')

​	node.appendChild(child)  不用加引号，添加节点

​	node.insetBefore(child,指定元素)  将一个节点添加到父节点的**指定子节点**前面

#### 11.删除节点

​	node.removeChild(child)  从node节点中删除一个子节点

```js
<button>删除</button>
<ul>
    <li>熊大</li>
    <li>熊二</li>
    <li>光头强</li>
</ul>
<script>
    // 1.获取元素
    var ul = document.querySelector('ul');
    var btn = document.querySelector('button');
    // 2. 删除元素  node.removeChild(child)
    // ul.removeChild(ul.children[0]);
    // 3. 点击按钮依次删除里面的孩子
    btn.onclick = function() {
        if (ul.children.length == 0) {
            this.disabled = true;
        } else {
            ul.removeChild(ul.children[0]);
        }
    }
</script>
```
#### 12.复制（克隆）节点

​	node.cloneNode()  返回调用该方法的节点

​	括号里为空或者为false，则是浅拷贝，只克隆节点本身，不克隆里面的子节点

​	括号里为true，则是深度拷贝，复制节点本身以及里面所有的子节点

#### 13.删除事件（解绑事件）

​	eventTarget.onclick = null;

​	eventTarget.removeEventListener(type,listener[, useCapture]);

​	eventTarget.detachEvent(eventNameWithOn, callback);

#### 14.事件冒泡和事件捕获

​	事件冒泡 如果addEventListener 第三个参数是 false 或者 省略

​	事件捕获 如果addEventListener 第三个参数是 true

​	JS 代码中只能执行捕获或者冒泡其中的一个阶段

​	onclick和attachEvent 只能得到冒泡阶段

​	实际开发中很少使用事件捕获，我们更关注事件冒泡

​	有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

| 事件对象属性方法    | 说明                                                         |
| ------------------- | ------------------------------------------------------------ |
| e.target            | 返回触发事件的对象    标准                                   |
| e.srcElement        | 返回触发事件的对象    非标准  ie6-8使用                      |
| e.type              | 返回事件类型  比如click mouse over 不带on                    |
| e.cancelBubble      | 该属性阻止冒泡  非标准  ie6-8使用                            |
| e.returnValue       | 该属性阻止默认事件 （默认行为）  非标准  ie6-8使用   比如不让链接跳转 |
| e.preventDefault()  | 该方法阻止默认事件 （默认行为）   标准  比如不让链接跳转     |
| e.stopPropagation() | 阻止冒泡  标准                                               |

```js
<ul>
    <li>abc</li>
    <li>abc</li>
    <li>abc</li>
</ul>
<script>
    var ul = document.querySelector('ul');
    ul.addEventListener('click', function(e) {
          // 我们给ul 绑定了事件  那么this 就指向ul  
          console.log(this); // ul

          // e.target 触发了事件的对象 我们点击的是li e.target 指向的就是li
          console.log(e.target); // li
    });
</script>
```
#### 15.键盘事件

| 键盘事件   | 触发条件                                                     |
| ---------- | ------------------------------------------------------------ |
| onkeyup    | 某个键盘按键被松开时触发                                     |
| onkeydown  | 某个键盘按键被按下时触发                                     |
| onkeypress | 某个键盘按键被按下时触发  *但是它不识别功能键  比如ctrl   shift    箭头等* |
| keyCode    | 返回该键的ASCII值                                            |

#### 16.BOM

​	BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。

​	BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

​	BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是Netscape 浏览器标准的一部分。

​	BOM 比 DOM 更大，它包含 DOM。

#### 17.顶级对象window

​	页面（窗口）加载事件（2种）

​		window.onload ： **当文档内容完全加载完成**会触发该事件(包括图像、脚本文件、CSS 文件等), 就调用的处理函数。**只能写一次，如果有多个，以最后一个为准。**

​		window.DOMContentLoaded  ： DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。**IE9 以上支持！**

​		window.onresize ： 是调整窗口大小加载事件，当触发时就调用的处理函数。只要窗口大小发生像素变化，就会触发这个事件。

```js
<script>
    // 注册页面加载事件
    window.addEventListener('load', function() {
        var div = document.querySelector('div');
    	// 注册调整窗口大小事件
        window.addEventListener('resize', function() {
            // window.innerWidth 获取窗口大小
            console.log('变化了');
            if (window.innerWidth <= 800) {
                div.style.display = 'none';
            } else {
                div.style.display = 'block';
            }
        })
    })
</script>
<div></div>
```
#### 18.location 对象

| location对象属性   | 返回值                                         |
| ------------------ | ---------------------------------------------- |
| location.href      | 获取或者设置 整个URl                           |
| location.host      | 返回主机（域名） www.itheima.com               |
| location.port      | 返回端口号  如果未写  返回空字符串             |
| location.pathname  | 返回路径                                       |
| location.search    | 返回参数                                       |
| location.hash      | 返回片段  #后面内容  常见于链接  锚点          |
| location.assign()  | 跟href一样，可以跳转页面/重定向页面            |
| location.replace() | 替换当前页面，因为不记录历史，所以不能后退页面 |
| location.reload()  | 重新加载页面，相当于刷新按钮或者F5             |

**重点记住：href  和  search**

```js
<button>点击</button>
<div></div>
<script>
    var btn = document.querySelector('button');
    var div = document.querySelector('div');
    btn.addEventListener('click', function() {
        // console.log(location.href);
        location.href = 'http://www.itcast.cn';
    })
    var timer = 5;
    setInterval(function() {
        if (timer == 0) {
            location.href = 'http://www.itcast.cn';
        } else {
            div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
            timer--;
        }
    }, 1000);
</script>
```
#### 19.navigator 对象

​	navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。

下面前端代码可以判断用户那个终端打开页面，实现跳转

```js
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = "";     //手机
 } else {
    window.location.href = "";     //电脑
 }
```

#### 20.history 对象

​	window对象给我们提供了一个 history对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL。

| history对象方法 | 作用                                                   |
| --------------- | ------------------------------------------------------ |
| back()          | 可以后退功能                                           |
| forward()       | 前进功能                                               |
| go(参数)        | 前进后退功能 参数如果是 1 前进1个页面如果是-1 后退页面 |

#### 21.同步任务和异步任务

JS是单线程

```js
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。
这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。
```
单线程导致的问题就是后面的任务等待前面任务完成，如果前面任务很耗时（比如读取网络数据），后面任务不得不一直等待！！

​	为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制。于是，JS 中出现了**同步任务**和**异步任务**。

#### 同步

​	前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。

#### 异步

​	你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。

```
JS中所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。

同步任务指的是：
	在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
异步任务指的是：
	不进入主线程、而进入”任务队列”的任务，当主线程中的任务运行完了，才会从”任务队列”取出异步任务放入主线程执行。
```

#### 22.元素偏移量 offset 系列

| offset系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.offsetParent | 返回作为该元素带有定位的父级元素  如果父级都没有定位则返回body |
| element.offsetTop    | 返回元素相对带有定位父元素上方的偏移                         |
| element.offsetLeft   | 返回元素相对带有定位父元素左方的偏移                         |
| element.offsetWidth  | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度，返回数值不带单位    |

offset  和  style 的区别

#### offset

- offset 可以得到任意样式表中的样式值
- offset 系列获得的数值是没有单位的
- offsetWidth 包含padding+border+width
- offsetWidth 等属性是只读属性，只能获取不能赋值

#### style

- style 只能得到行内样式表中的样式值
- style.width 获得的是带有单位的字符串
- style.width 获得不包含padding和border 的值
- style.width 是可读写属性，可以获取也可以赋值

####  getComputedStyle  可以用于获取元素的高宽

#### 23.元素可视区 client 系列

| client系列属性       | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| element.clientTop    | 返回元素上边框的大小                                         |
| element.clientLeft   | 返回元素左边框的大小                                         |
| element.clientWidth  | 返回自身包括padding、内容区的宽度、不含边框，返回数值不带单位 |
| element.clientHeight | 返回自身包括padding、内容区的高度、不含边框，返回数值不带单位 |

#### 24.元素滚动 scroll 系列

| scroll系列属性       | 作用                                           |
| -------------------- | ---------------------------------------------- |
| element.scrollTop    | 返回被卷去的上侧距离，返回数值不带单位         |
| element.scrollLeft   | 返回被卷去的左侧距离，返回数值不带单位         |
| element.scrollWidth  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| element.scrollHeight | 返回自身实际的高度，不含边框，返回数值不带单位 |

#### 25.三大系列总结

| 三大系列大小对比    |                                                              |
| ------------------- | ------------------------------------------------------------ |
| element.offsetWidth | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位    |
| element.clientWidth | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位 |
| element.scrollWidth | 返回自身实际的宽度，不含边框，返回数值不带单位               |

他们主要用法：

1.offset系列 经常用于获得元素位置    offsetLeft  offsetTop

2.client经常用于获取元素大小  clientWidth clientHeight

3.scroll 经常用于获取滚动距离 scrollTop  scrollLeft  

4.注意**页面滚动的距离**通过 **window.pageYOffset**  获得

#### 26.mouseenter 和 mouseover 的区别

- 当鼠标移动到元素上时就会触发mouseenter 事件
- mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter  只会经过自身盒子触发
- 之所以这样，就是因为mouseenter不会冒泡
- 跟mouseenter搭配鼠标离开 mouseleave  同样不会冒泡








### 浏览器兼容:
css:
-webkit- ，针对safari，chrome浏览器的内核CSS写法
-moz-，针对firefox浏览器的内核CSS写法
-ms-，针对ie内核的CSS写法
-o-，针对Opera内核的CSS写法
不同浏览器的默认样式存在差异，可以使用 Normalize.css 抹平这些差异。

1.不同浏览器的标签默认的外补丁和内补丁不同

问题症状：随便写几个标签，不加样式控制的情况下，各自的margin 和padding差异较大。

碰到频率:100%

解决方案：CSS里    *{margin:0;padding:0;}

备注：这个是最常见的也是最易解决的一个浏览器兼容性问题，几乎所有的CSS文件开头都会用通配符*来设置各个标签的内外补丁是0。

 

2.块属性标签float后，又有横行的margin情况下，在IE6显示margin比设置的大

问题症状:常见症状是IE6中后面的一块被顶到下一行

碰到频率：90%（稍微复杂点的页面都会碰到，float布局最常见的浏览器兼容问题）

解决方案：在float的标签样式控制中加入 display:inline;将其转化为行内属性

备注：我们最常用的就是div+CSS布局了，而div就是一个典型的块属性标签，横向布局的时候我们通常都是用div float实现的，横向的间距设置如果用margin实现，这就是一个必然会碰到的兼容性问题。

 

3.设置较小高度标签（一般小于10px），在IE6，IE7，遨游中高度超出自己设置高度

问题症状：IE6、7和遨游里这个标签的高度不受控制，超出自己设置的高度

碰到频率：60%

解决方案：给超出高度的标签设置overflow:hidden;或者设置行高line-height 小于你设置的高度。

备注：这种情况一般出现在我们设置小圆角背景的标签里。出现这个问题的原因是IE8之前的浏览器都会给标签一个最小默认的行高的高度。即使你的标签是空的，这个标签的高度还是会达到默认的行高。

 

4.行内属性标签，设置display:block后采用float布局，又有横行的margin的情况，IE6间距bug

问题症状：IE6里的间距比超过设置的间距

碰到几率：20%

解决方案：在display:block;后面加入display:inline;display:table;

备注：行内属性标签，为了设置宽高，我们需要设置display:block;(除了input标签比较特殊)。在用float布局并有横向的margin后，在IE6下，他就具有了块属性float后的横向margin的bug。不过因为它本身就是行内属性标签，所以我们再加上display:inline的话，它的高宽就不可设了。这时候我们还需要在display:inline后面加入display:talbe。

 

5.图片默认有间距

问题症状：几个img标签放在一起的时候，有些浏览器会有默认的间距，加了问题一中提到的通配符也不起作用。

碰到几率：20%

解决方案：使用float属性为img布局

备注：因为img标签是行内属性标签，所以只要不超出容器宽度，img标签都会排在一行里，但是部分浏览器的img标签之间会有个间距。去掉这个间距使用float是正道。（我的一个学生使用负margin，虽然能解决，但负margin本身就是容易引起浏览器兼容问题的用法，所以我禁止他们使用）

 

6.标签最低高度设置min-height不兼容

问题症状：因为min-height本身就是一个不兼容的CSS属性，所以设置min-height时不能很好的被各个浏览器兼容

碰到几率：5%

解决方案：如果我们要设置一个标签的最小高度200px，需要进行的设置为：{min-height:200px; height:auto !important; height:200px; overflow:visible;}

备注：在B/S系统前端开时，有很多情况下我们又这种需求。当内容小于一个值（如300px）时。容器的高度为300px；当内容高度大于这个值时，容器高度被撑高，而不是出现滚动条。这时候我们就会面临这个兼容性问题。

 

7.透明度的兼容CSS设置

 

.transparent_class {  
   filter:alpha(opacity=50);  
   -moz-opacity:0.5;  
   -khtml-opacity: 0.5;  
   opacity: 0.5;  
}   
 

 
 

如果我们熟悉标签的默认属性的话，就能很好的理解为什么会出现兼容问题以及怎么去解决这些兼容问题。

◆IE6认识的hacker 是下划线_ 和星号 *

◆IE7 遨游认识的hacker是星号 *

比如这样一个CSS设置：

height:300px;*height:200px;_height:100px; 
IE6浏览器在读到height:300px的时候会认为高时300px；继续往下读，他也认识*heihgt， 所以当IE6读到*height:200px的时候会覆盖掉前一条的相冲突设置，认为高度是200px。继续往下读，IE6还认识_height,所以他又会覆盖掉200px高的设置，把高度设置为100px；

IE7和遨游也是一样的从高度300px的设置往下读。当它们读到*height200px的时候就停下了，因为它们不认识_height。所以它们会把高度解析为200px，剩下的浏览器只认识第一个height:300px;所以他们会把高度解析为300px。因为优先级相同且想冲突的属性设置后一个会覆盖掉前一个，所以书写的次序是很重要的。

 

8.IE6双边距问题:在 IE6中设置了float , 同时又设置margin , 就会出现边距问题
解决方案：设置display:inline;

 

9.当标签的高度设置小于10px，在IE6、IE7中会超出自己设置的高度
解决方案：超出高度的标签设置overflow:hidden,或者设置line-height的值小于你的设置高度

 

10.图片默认有间距
解决方案：使用float 为img 布局

 

11.IE9一下浏览器不能使用opacity
解决方案：
opacity: 0.5;filter: alpha(opacity = 50);filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50);

 

12.边距重叠问题；当相邻两个元素都设置了margin 边距时，margin 将取最大值，舍弃最小值；
解决方案：为了不让边重叠，可以给子元素增加一个父级元素，并设置父级元素为overflow:hidden；

 

13.cursor:hand 显示手型在safari 上不支持
解决方案：统一使用 cursor:pointer

 

14.两个块级元素，父元素设置了overflow:auto；子元素设置了position:relative ;且高度大于父元素，在IE6、IE7会被隐藏而不是溢出；
解决方案：父级元素设置position:relative

 

15.IE6 背景闪烁的问题
问题：链接、按钮用 CSSsprites 作为背景，在 ie6 下会有背景图闪烁的现象。原因是 IE6 没有将背景图缓存，每次触发 hover 的时候都会重新加载

解决：可以用 JavaScript 设置 ie6 缓存这些图片：

document.execCommand("BackgroundImageCache", false, true);
 

 

16.解决在 IE6 下，列表与日期错位的问题
日期<span> 标签放在标题 <a> 标签之前即可

 

17.解决 IE6 不支持 min-height 属性的问题
min-height: 350px;
_height: 350px;
 

 

18.让 IE7 IE8 支持 CSS3 background-size属性
由于 background-size 是 CSS3 新增的属性，所以 IE 低版本自然就不支持了，但是老外写了一个 htc 文件，名叫 background-size polyfill，使用该文件能够让 IE7、IE8 支持 background-size 属性。其原理是创建一个 img 元素插入到容器中，并重新计算宽度、高度、left、top 等值，模拟 background-size 的效果。

html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url('img/37.png');
  background-repeat: no-repeat;
  background-size: cover;
  -ms-behavior: url('css/backgroundsize.min.htc');
  behavior: url('css/backgroundsize.min.htc');
}

 

 

19.IE6-7 line-height 失效的问题
问题：在ie 中 img 与文字放一起时，line-height 不起作用

解决：都设置成 float

width:100%
width:100% 这个东西在 ie 里用很方便，会向上逐层搜索 width 值，忽视浮动层的影响.

Firefox 下搜索至浮动层结束，如此，只能给中间的所有浮动层加 width:100%才行，累啊。

opera 这点倒学乖了，跟了 ie

cursor:hand
显示手型 cursor: hand，ie6/7/8、opera 都支持，但是safari 、 ff 不支持

cursor: pointer;

20.td 自动换行的问题
问题：table 宽度固定，td 自动换行

解决：设置 Table 为 table-layout: fixed，td 为 word-wrap: break-word

 

21.让层显示在 FLASH 之上
想让层的内容显示在 flash 上，把 FLASH 设置透明即可

1、<param name=" wmode " value="transparent" />
2、<param name="wmode" value="opaque"/>

22.键盘事件 keyCode 兼容性写法
var inp = document.getElementById('inp')
var result = document.getElementById('result')

function getKeyCode(e) {
  e = e ? e : (window.event ? window.event : "")
  return e.keyCode ? e.keyCode : e.which
}

inp.onkeypress = function(e) {
  result.innerHTML = getKeyCode(e)
}

 

 

23.求窗口大小的兼容写法
// 浏览器窗口可视区域大小（不包括工具栏和滚动条等边线）
// 1600 * 525
var client_w = document.documentElement.clientWidth || document.body.clientWidth;
var client_h = document.documentElement.clientHeight || document.body.clientHeight;

// 网页内容实际宽高（包括工具栏和滚动条等边线）
// 1600 * 8
var scroll_w = document.documentElement.scrollWidth || document.body.scrollWidth;
var scroll_h = document.documentElement.scrollHeight || document.body.scrollHeight;

// 网页内容实际宽高 (不包括工具栏和滚动条等边线）
// 1600 * 8
var offset_w = document.documentElement.offsetWidth || document.body.offsetWidth;
var offset_h = document.documentElement.offsetHeight || document.body.offsetHeight;

// 滚动的高度
var scroll_Top = document.documentElement.scrollTop||document.body.scrollTop;

 

24.DOM 事件处理程序的兼容写法
复制代码
var eventshiv = {
    // event兼容
    getEvent: function(event) {
        return event ? event : window.event;
    },

// <span class="hljs-built_in">type</span>兼容
getType: <span class="hljs-keyword">function</span>(event) {
    <span class="hljs-built_in">return</span> event.type;
},

// target兼容
getTarget: <span class="hljs-keyword">function</span>(event) {
    <span class="hljs-built_in">return</span> event.target ? event.target : event.srcelem;
},

// 添加事件句柄
addHandler: <span class="hljs-keyword">function</span>(elem, <span class="hljs-built_in">type</span>, listener) {
    <span class="hljs-keyword">if</span> (elem.addEventListener) {
        elem.addEventListener(<span class="hljs-built_in">type</span>, listener, <span class="hljs-literal">false</span>);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (elem.attachEvent) {
        elem.attachEvent(<span class="hljs-string">'on'</span> + <span class="hljs-built_in">type</span>, listener);
    } <span class="hljs-keyword">else</span> {
        // 在这里由于.与<span class="hljs-string">'on'</span>字符串不能链接，只能用 []
        elem[<span class="hljs-string">'on'</span> + <span class="hljs-built_in">type</span>] = listener;
    }
},

// 移除事件句柄
removeHandler: <span class="hljs-keyword">function</span>(elem, <span class="hljs-built_in">type</span>, listener) {
    <span class="hljs-keyword">if</span> (elem.removeEventListener) {
        elem.removeEventListener(<span class="hljs-built_in">type</span>, listener, <span class="hljs-literal">false</span>);
    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (elem.detachEvent) {
        elem.detachEvent(<span class="hljs-string">'on'</span> + <span class="hljs-built_in">type</span>, listener);
    } <span class="hljs-keyword">else</span> {
        elem[<span class="hljs-string">'on'</span> + <span class="hljs-built_in">type</span>] = null;
    }
},

// 添加事件代理
addAgent: <span class="hljs-keyword">function</span> (elem, <span class="hljs-built_in">type</span>, agent, listener) {
    elem.addEventListener(<span class="hljs-built_in">type</span>, <span class="hljs-keyword">function</span> (e) {
        <span class="hljs-keyword">if</span> (e.target.matches(agent)) {
            listener.call(e.target, e); // this 指向 e.target
        }
    });
},

// 取消默认行为
preventDefault: <span class="hljs-keyword">function</span>(event) {
    <span class="hljs-keyword">if</span> (event.preventDefault) {
        event.preventDefault();
    } <span class="hljs-keyword">else</span> {
        event.returnValue = <span class="hljs-literal">false</span>;
    }
},

// 阻止事件冒泡
stopPropagation: <span class="hljs-keyword">function</span>(event) {
    <span class="hljs-keyword">if</span> (event.stopPropagation) {
        event.stopPropagation();
    } <span class="hljs-keyword">else</span> {
        event.cancelBubble = <span class="hljs-literal">true</span>;
    }
};











### MySQL
mysql -u root -p    // mysql登录
//只有一些简单操作   sql 对大小写不敏感
1.基本命令
   1.1 查看数据库
   show databases;
   1.2 选择数据库
   use test;//test为数据库名
   1.3 查看数据库运行状态
   status
   1.4 查看数据库中的表
   show tables;//查看所有的
   desc table_name;//查看表结构
   1.5 结束
   ctrl + c
   1.6 新建数据库
   create DATABASE RUNOOB;
   1.7 新建数据表
   create table table_name (column_name column_type ...);

2.mysql操作
   2.1 启动mysql
   mysql -u root -p
   2.2 关闭mysql
   exit

3.查询 select
   3.1 查看所有
   select * from table_name;
   3.2 查看指定列
   select table_column1, table_column2... from table_name;
   3.3 返回不重复的数据 distinct
   select distinct table_column from table_name;
   3.4 有条件的查询 where
   select * from table_name where table_column = 'xxx';
      3.4.1 操作符
      =等于   <>不等于    >大于   <小于   >=大于等于    <=小于等于    between取两值之间    like通配符
      3.4.2 and 和 or 运算符
      between 需要和 and 搭配使用
      select * from table_name from table_column1 = 'xx' and table_column2 = 'xx';//两个条件都符合才会返回值
      select * from table_name from table_column1 = 'xx' or table_column2 = 'xx';//两个条件只要满足一个就返回值
      3.4.3 排序 order by
      asc 从小到大    desc 从大到小
      select * from table_name order by table_column asc;//asc 可以省略
      select * from table_name order by table_column1 asc, table_column2 desc;
      3.4.4 in 操作符
      SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,...);
      选取姓氏为 Adams 和 Carter 的人
      SELECT * FROM Persons WHERE LastName IN ('Adams','Carter');
      3.4.5 betwwen
      select * from talbe_name where age between '19' and '30';
      3.4.6 as 别名
      select name as '姓名', age as '年龄' from user;
4.1 插入数据 insert into
insert into table_name values(列1,列2...);
insert into table_name (列1名称, 列2名称...) values (列1,列2...);//在指定的列插入数据
5.1 更新数据 update
update table_name set 列名称 = 新值 where 列名称 = 某值;
update user set userName = '张三', userSex = '男' where userId = 1;
6.1 删除数据 delete
删除所有行
delete from table_name;  或  delete * from table_name;
删除某行
delete from table_name where id = 1;
7.1 通配符 %  []  _
select * from table_name where name like '%三%';//可以返回所有名字带有 三 的数据
%	替代一个或多个字符
_	仅替代一个字符
[abc]	字符列中的任何单一字符
[^abc] 或者 [!abc]   不在字符列中的任何单一字符
SELECT * FROM Persons WHERE FirstName LIKE '_eorge';//第一个字符之后是 "eorge"
8.1 创建数据库
create database database_name;
9.1 创建数据库表
create table table_name (
   column_name1 datatype,//列名称  数据类型
   column_name2 datatype,...
)
integer(size)/int(size)/smallint(size)/tinyint(size)   仅容纳整数。在括号内规定数字的最大位数。
decimal(size,d)/numeric(size,d)   容纳带有小数的数字。"size" 规定数字的最大位数。"d" 规定小数点右侧的最大位数。
char(size)	  容纳固定长度的字符串（可容纳字母、数字以及特殊字符）。在括号中规定字符串的长度。
varchar(size)	  容纳可变长度的字符串（可容纳字母、数字以及特殊的字符）。在括号中规定字符串的最大长度。
date(yyyymmdd)	  容纳日期。
10.1 约束
not null   不为空  Id int NOT NULL
unique   唯一性   UNIQUE (Id)  或者   Id int NOT NULL UNIQUE
primary key   主键   PRIMARY KEY (Id)  或者   Id int NOT NULL PRIMARY KEY
foreign key   外键   FOREIGN KEY (Id_P) REFERENCES Persons(Id_P) 前提条件，两个表都有着个字段Id_P
check   约束   CHECK (Id_P>0)  或者   Id_P int NOT NULL CHECK (Id_P>0)
default    默认约束
11.1 auto increment 字段  自动创建主键字段的值
P_Id int PRIMARY KEY IDENTITY
ALTER TABLE Persons AUTO_INCREMENT=100  设置主键初始值为100，一般初始值为1
12.1
curdate timestamp not null default current_timestamp 每次添加数据会自动记录添加数据时的时间