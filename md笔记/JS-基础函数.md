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

