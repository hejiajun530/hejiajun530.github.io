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