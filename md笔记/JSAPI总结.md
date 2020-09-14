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