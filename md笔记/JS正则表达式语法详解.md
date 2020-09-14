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

    