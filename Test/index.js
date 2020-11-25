// var http = require('http') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
var https = require('https') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
var url = 'https://y.qq.com/portal/player.html' //输入任何网址都可以
var cheerio = require('cheerio') // 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现
var fs = require("fs")

https.get(url,function(res){  //发送get请求
  var html=''
  res.on('data',function(data){
    html += data  //字符串的拼接
  })
  res.on('end',function(){
    var courseData = filterChapters(html)
    let content = courseData.map((o)=>{
       return JSON.stringify(o) // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
    })

    fs.writeFile('./tvlist.json',content, function(err){ //文件路经，写入的内容，回调函数
      if(err) throw new Error ('写文件失败'+err);
      console.log("成功写入文件")
    })
  })
}).on('error',function(){
  console.log('获取资源出错！')
})

function filterChapters(html) {
  var $ = cheerio.load(html)  // 加载需要的html
  var chapters = $('.movie-item')  //在html里寻找需要的资源的class
  var courseData = [] // 创建一个数组，用来保存资源
  chapters.each(function(item, index) {  //遍历html文档
      var chapter = $(this)
      var chapterTitle = chapter.children('a').attr('title') 
      var tvUrl = chapter.children('a').attr('href').split('show/')[1]
      var imgUrl = chapter.find('img').attr('src')
      var updateStatus = chapter.find('.hdtag').text()
      var type = chapter.find('.otherinfo a').text()
      var url = `http://www.m4yy.com/show/${tvUrl}`
      courseData.push({
        chapterTitle: chapterTitle,
        tvUrl: tvUrl,
        imgUrl: imgUrl,
        updateStatus: updateStatus,
        type: type,
        url: url
      })
  })
  return courseData //返回需要的资源
}