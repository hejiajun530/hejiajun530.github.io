# Flex布局

### 1-flex布局体验

**传统布局**

​		兼容性好

​		布局繁琐

​		不能在移动端很好的布局

**flex布局**

​		操作方便，布局简单，移动端应用广泛

​		PC端支持较差，IE11或更低版本不支持或仅部分支持

​		建议：PC端用传统布局，移动端用flex布局

### 2-flex布局原理

​	任何一个盒子都可以设为flex盒子/容器

​	flex盒子/容器的子元素称为项目，flex项目可以设为flex盒子/容器

​	父盒子设为flex布局后，子元素的float，clear，vertical-align属性将失效

### 3-flex属性

**flex-direction：**设置主轴方向（默认为x轴）/属性值 

​	row x轴 row-reverse 反向，位置也会发生改变（原左，现右）  

​	column y轴 column-reverse反向，位置也会发生改变（原上，现下）

**justify-content：**设置主轴上项目的排列方式/属性值  

​	flex-start 从头对齐，类似于左对齐

​	flex-end 从结尾开始，类似于右对齐

​	center  居中对齐

​	space-around  平分剩余空间/相当于每一个容器( flex盒子 )左右有外边距

​	space-between  先贴两边，在平分剩余空间

**align-items(单行) ：**设置侧轴上项目的排列方式/属性值  

​	flex-start 从头对齐，类似于左对齐

​	flex-end 从结尾开始，类似于右对齐

​	center  居中对齐

​	stretch  拉伸，默认值，不能给项目设置高度

**flex-wrap：** 默认值 nowrap  不换行，如果装不下，项目会压缩  wrap换行

**align-content（多行）：**align-content用来控制项目在侧轴上的排列方式   

​	注意：与`flex-wrap: wrap;`没有直接关系，即使设置了换行，但未呈现换行样式，也是**没用**的属性值        

​	flex-start：默认值，从头开始

​	flex-end：从尾开始    

​	center：居中   

​	space-around：平分剩余空间   

​	space-between：先贴两边，再平分剩余空间  

​	stretch：拉伸，平分容器剩余空间             

​	align-item和align-content可以同时设置，单行样式自动应用align-item，出现多行样式时自动应用align-content

**flex-flow：** flex-flow 就是flex-direction和flex-wrap的结合属性

**子项flex属性使用：**

flex：控制项目自己所占的剩余空间的份数     **可以设置百分比%**

align-self：控制项目自己在侧轴上的排列方式 默认值是auto  继承父元素的align-items属性  

order：控制顺序 默认值0，可以为负数，数值越小，排列越靠前

### 4-背景渐变linear-gradient

语法：background: -webkit-linear-gradient(起始方向);

属性支持不好，需要加浏览器私有前缀

起始方向可以是方位名词或者度数，默认值是top

颜色可以写多个,不止两个,直接用逗号隔开

background: -webkit-linear-gradient ( left,red,blue );

background: -webkit-linear-gradient ( left  top,red,blue );

background: -webkit-linear-graditen ( left  bottom,red,blue );





align-items: center;
justify-content: center;  居中对齐，水平、垂直都居中

	justify-content: flex-start; 水平方向从开始位置对齐，类似于左对齐  flex-end 水平方向从结束位置对齐，类似于右对齐 
	
	align-items: flex-start;垂直方向从开始位置对齐，类似于上对齐  flex-end 垂直方向从结束位置对齐，类似于下对齐
	
	justify-content: space-between; 左右盒子贴近父盒子，中间的平均分布空白间距 space-around  相当于给每个盒子添加了左右外边距
			
	align-items: stretch; 让子元素的高度拉伸适用于父容器，在子元素不给高度的前提下
	
	flex-wrap: nowrap; nowrap 在盒子挤满一行后不换行
	flex-wrap: wrap; wrap 在盒子挤满一行后换行
	flex-wrap: wrap-reverse; wrap-reverse 在盒子挤满一行后换行,但以相反位置，顺序不变，上下行位置改变
	
	flex-flow: row wrap; 这句话必须有  否则下面的不起效果  row水平方向  column垂直方向
	align-content: center; 多行垂直对齐,有属性值: space-between,space-around,flex-start,flex-end
	order: 1; /* 调换位置，order后面的数值越小越靠前 */