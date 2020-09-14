# HTML、CSS

### 1.header

title icon:<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
加入css：<link rel="stylesheet" type="text/css" href="css/index.css"/>
加入js：<script src="js/index.js"></script>

target 属性：设置页面打开位置
_blank:重新打开一个页面

base标签：<base target="_blank">设置成新窗口打开一个页面
target="_self"  设置成在本窗口打开一个页面

### 2.web标准

结构（HTML）、表现（css）、行为（JavaScript）

### 3.选择器、伪类选择器、伪元素

类选择器可使用多次，id选择器只能使用一次

后代选择器： div  .first
子元素选择器：div>strong   子元素选择器  符号  > 只选亲儿子 这些元素
交集选择器： div.first     交集选择器  既是div标签  又是 .frist 类选择器的关系
并集选择器： div,.first    并集选择器 用逗号隔开， 逗号理解为 和的意思  通常用于集体声明 就是因为这些选择器 里面的样式 相同

##### 结构（位置）伪类选择器（CSS3）：

first-child：选择属于其父元素的首个子元素                 li:first-child{}
last-child：选择属于其父元素的最后一个子元素		  li:last-child{}
nth-child（n）：选择属于其父元素的第N个子元素，n从0开始	  li:nth-child(n){}   li:nth-child(odd){color:pink;}//选择所有odd（奇数）的子元素  even（偶数）
nth-last-child(n)：选择属于其父元素的第N个子元素(从最后开始数)，n从0开始

<img src="../img/jiegouweilei.png"/>

##### 属性选择器列表

<img src="../img/attrcanshu.png"/>



/*未访问过链接的状态 正常状态*/
a:link {color: #333;/*取消下划线*/text-decoration: none;}
/*已经访问的链接  我们点击过*/
a:visited {color: orange;}
/*鼠标经过链接时候的状态*/
a:hover {color: red;}
/*当我们点击的时候（按下鼠标，别松开的时候）*/
a:active {color: green;}
这四个伪类位置尽量不要颠倒

##### 伪元素：

标签:target目标伪类选择器，选择器可用于选取当前活动的目标元素
标签:target{ color:red; }  当使用锚点时，跳转的地方颜色变红色
标签::first-letter伪元素选择器（选择第一个字）
标签::first-line（选择第一行）
标签::selection（鼠标选中的文字））
标签::before/after{content:"我"；}（在标签选中的内容前面插入或后面）

### 4.单位及属性、字体标签、字体属性

长度单位：em  相对于当前对象内文本的字体尺寸；px  像素；in  英寸；cm  厘米；mm  毫米；pt  点；
img 属性：src  URL；alt  文本（图片显示不出来时显示的文字）；title  文本（鼠标放上面显示文字）；
<b>  <strong>:粗体（推荐strong）
<i>  <em>:斜体（推荐em）
<s>  <del>:删除线（推荐del）
<u>  <ins>:下划线（推荐ins）

text-indent:2em; : 首行缩进2个字符
line-height:28px; : 行高28像素;
letter-spacing:2px; : 字间距为2个像素
word-spacing:10px; : 单词间距为10个像素（只对英文有效）
white-space: nowrap;:文字强制不换行
text-overflow: ellipsis;:文字超出隐藏

字符、字体：

<img src="../img/zifu.png"/>

<img src="../img/font.PNG"/>

### 5.表格table

caption 属性：表格标题

cellspacing:设置单元格与单元格边框之间的空白间距
cellpadding:设置单元格内容与单元格边框之间的空白间距

rowspan = "2"：合并上下2个单元格
colspan = "2"：合并左右2个单元格

```html
<tr>
       <!-- 合并第一列和第二列 从左往右，把要合并的不写用  用colspan写要合并的列-->
         <td colspan = "2">第一行第一列</td>
         <!-- <td>第一行第二列</td> -->
         <td>第一行第三列</td>
         <td>第一行第四列</td>
       </tr>
       <tr>
       <!--合并行 从上往下  把要合并的不写用  用rowspan写要合并的行-->
         <td rowspan="3">第二行第一列</td>
         <td>第二行第二列</td>
         <td>第二行第三列</td>
         <td>第二行第四列</td>
       </tr>
       <tr>
         <!-- <td>第三行第一列</td> -->
         <td>第三行第二列</td>
         <td>第三行第三列</td>
         <td>第三行第四列</td>
       </tr>
```



### 6.P属性

p里面不能包含 div  段落p h  dt 里面尽量不要放块级元素

### 7.背景属性

/*背景固定的*/
background-attachment: fixed;
/*background: 背景颜色 背景图片地址 背景平铺 背景滚动 背景位置;*/
background: #ccc url(images/sms.jpg) no-repeat fixed center top;
background-size:40px(50%/宽度) 40px(50%/高度);改变背景图片大小
background-size；属性值为cover时，图片自动调整比例，图片充满背景区域，溢出部分隐藏
属性值为contain时，图片自动调整比例，图片在背景区域，会有部分背景区域不会被覆盖
background:多背景图片时，用逗号隔开

<img src="../img/bgsize.png"/>

### 8.权重

/*标签选择器 权重 0,0,0,1  小组长*/
div {color: pink!important;}
/*类选择器 权重 0,0,1,0 班长*/
.one {color: blue;}
/*id 选择器 权重 0,1,0,0  班主任*/
#two {color: green;}
/*style= 行内样式表 权重 1,0,0,0  校长*/
/*!important 在样式属性的后面添加 权重最高 ∞  教育局局长*/

div ul li >  0,0,0,3
.nav ul li  >  0,0,1,2
a:hover  > 0,0,1,1
.nav a  > 0,0,1,1

### 9.HTML5新增标签、CSS3动画

<header>语义：定义页面的头部 页眉</header>
<nav>语义：定义导航栏</nav>
<footer>语义：定义页面底部  页脚</footer>
<article>语义：定义文章</article>
<section>语义：定义区域</section>
<aside>语义：定义其所处内容之外的内容  侧边</aside>
图像按钮:<input type="image" src="tu.jpg"/>
input属性：size 表单显示长度   maxlength=""最多输入值

datalist:

```html
<input type="text" value="" list="star"/>//input里面用list
<datalist id="star">//datalist 里面用id 来实现input链接
	<option>刘德华</option>//类似于select下拉列表，datalist自带提示功能，输入一个刘会显示有刘(比如刘德华、刘若英)的词语
	<option>刘若英</option>
</datalisrt>
```

fieldset元素可将表单内的相关元素分组，打包  legend搭配使用
fieldset:
<fieldset>
	<legend>用户登录</legend>
	用户名：<input type="text"/>
	密  码：<input type="passwrod"/>
</fieldset>

##### 新增表单

email:<input type="email"/>  输入邮箱格式
tel:<input type="tel"/>  输入手机号码格式
url:<input type="url"/>  输入URL格式(网址)
number:<input type="number"/>  输入数字格式
search:<input type="search"/>  搜索框
range:<input type="range"/>  自由拖动滑块
time:<input type="time"/>  小时分钟
date:<input type="date"/>  年月日
datetime:<input type="datetime"/>  时间
month:<input type="month"/>  月年
week:<input type="week"/>  星期 年
color:<input type="color"/>  颜色

##### 新增表单属性

placeholder：鼠标点击表单时，表单中的文字消失,删除文字后，原文字返回显示
autofocus : input自动获得焦点  <input type="text" placeholder="请输入值" autofocus/>
multiple : 多文件上传 <input type="file" multiple />
autocomplete:
1.autocomplete 首先需要提交按钮（需要有form）
2.这个表单您必须给他名字
3.autocomplete默认值为on（开）  可设置为off（关）autocomplete="off"

<form action="">
姓名:<input type="text" autocomplete  name="username"/>
<input type="submit"/>
</form>

required:<input type="text" required/>  必填项,内容不能为空
accesskey:<input type="text" required  accesskey="s"/>  快速定位光标，按alt+字母（s），焦点跳入该表单中

防止拖拽文本域:   resize: none;

表单属性：

<img src="../img/input.png"/>

##### 音频与视频

audio:<audio src="see you again.mp3" autoplay controls loop="2"></audio>
autoplay:自动播放  可写成  autoplay="autoplay"
controls:是否显示播放控件  默认不显示，加上controls后显示播放控件
loop:循环播放  loop=2就是循环两次 loop或者loop="-1"无限循环

为了浏览器兼容，我们需要做三种声音文件  ogg mp3 wav
<audio controls autoplay>
	<source src="music.mp3"/>
	<source src="music.ogg"/>
	您的浏览器不支持播放声音
</audio>
谷歌把视频自动播放autoplay 给禁用了  给视频加一个禁音属性 muted="muted";  
poster 加载等待时画面的图片
html5支持3种视频：ogg MPEG4(mp4) WebM
video  可改宽，高  方法跟audio一样

<img src="../img/video.png"/>

##### 块级元素的特点：

1.总是从新行开始(独占一行)
2.高度，行高、外边距以及内边距都可以控制
3.宽度默认是容器的100%
4.可以容纳内联元素和其他块元素

##### 行内元素的特点：

1.和相邻行内元素在一行上
2.高、宽无效，但水平方向的padding和margin可以设置，垂直方向的无效
3.默认宽度就是它本身内容的宽度
4.行内元素只能容纳文本或其他行内元素

##### css3动画简写

animation: 动画名称  持续时间  运动曲线  何时开始  播放次数  是否反方向  动画起始或结束状态
动画结束后的状态  默认是backwards  回到起始状态   forwards 停留在结束状态
animation-fill-mode: forwards;

<img src="../img/动画属性.PNG"/>

<img src="../img/动画速度.PNG"/>

##### CSS3盒子模型：

<img src="../img/css3盒子模型.png"/>

##### CSS书写顺序:

<img src="../img/css书写顺序.PNG"/>

##### 鼠标样式:

<img src="../img/鼠标样式.png"/>

##### 面试可用:

<img src="../img/面试可用.png"/>

##### 隐藏的区别：

相同点：  都能隐藏元素

不同点：

display:  none; //不占位置

visibility:  hidden;  //占位置

overflow: hidden;  //超出部分隐藏

##### 清除浮动：

overflow: hidden;

img {

​	float: left;

​	clear: both;//图像的左侧和右侧均不允许出现浮动元素：

}

a::after {

​	content: "";

​	display: block;

​	clear: both;

}

a {

​	zoom: 1;

}

##### 定位：

z-index只对有定位的盒子有效果定位的盒子比标准流和浮动流盒子 层级高

当两个有边框的盒子连接在一起  可以用margin-left/right/top/bottom:-1px;  让其中一条边与另一盒子的边框重合

1. ::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的
2. ::-webkit-scrollbar-button 滚动条两端的按钮
3. ::-webkit-scrollbar-track  外层轨道
4. ::-webkit-scrollbar-track-piece  内层滚动槽
5. ::-webkit-scrollbar-thumb 滚动的滑块
6. ::-webkit-scrollbar-corner 边角
7. ::-webkit-resizer 定义右下角拖动块的样式