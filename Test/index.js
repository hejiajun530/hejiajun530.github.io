// // var http = require('http') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
// var https = require('https') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
// var url = 'https://y.qq.com/portal/player.html' //输入任何网址都可以
// var cheerio = require('cheerio') // 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现
// var fs = require("fs")

// https.get(url,function(res){  //发送get请求
//   var html=''
//   res.on('data',function(data){
//     html += data  //字符串的拼接
//   })
//   res.on('end',function(){
//     var courseData = filterChapters(html)
//     let content = courseData.map((o)=>{
//        return JSON.stringify(o) // JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。
//     })

//     fs.writeFile('./tvlist.json',content, function(err){ //文件路经，写入的内容，回调函数
//       if(err) throw new Error ('写文件失败'+err);
//       console.log("成功写入文件")
//     })
//   })
// }).on('error',function(){
//   console.log('获取资源出错！')
// })

// function filterChapters(html) {
//   var $ = cheerio.load(html)  // 加载需要的html
//   var chapters = $('.movie-item')  //在html里寻找需要的资源的class
//   var courseData = [] // 创建一个数组，用来保存资源
//   chapters.each(function(item, index) {  //遍历html文档
//       var chapter = $(this)
//       var chapterTitle = chapter.children('a').attr('title') 
//       var tvUrl = chapter.children('a').attr('href').split('show/')[1]
//       var imgUrl = chapter.find('img').attr('src')
//       var updateStatus = chapter.find('.hdtag').text()
//       var type = chapter.find('.otherinfo a').text()
//       var url = `http://www.m4yy.com/show/${tvUrl}`
//       courseData.push({
//         chapterTitle: chapterTitle,
//         tvUrl: tvUrl,
//         imgUrl: imgUrl,
//         updateStatus: updateStatus,
//         type: type,
//         url: url
//       })
//   })
//   return courseData //返回需要的资源
// }





// const fs = require('fs')
// const cheerio = require('cheerio')
// const http = require('http')
// let webUrl = 'http://news.ifeng.com' //爬取网页地址
// http.get(webUrl, req => {
//   let str = ''
//   req.on('data', chunk => {
//     str += chunk   //  chunk ：爬取到的数据会分成64k的流，所以这里需要将所有的流拼接起来
//   })
//   req.on('end', () => {
//     fs.writeFile('./data.json', getNewsData(str), function (err) {
//       //文件路经，写入的内容，回调函数
//       if (err) throw new Error('写文件失败' + err)
//       console.log('成功写入文件')
//     })
//   })
// })




// //  根据拿到的html结构，通过cheerio来获取相应需要的数据，再通过fs将数据保存到本地
// function getNewsData(str) {
//   let newsData = []  //用来存储新闻数据
//   const $ = cheerio.load(str) //str: 加载需要的html代码
//   let chapters = $('.news_item')  //.news_item： 在凤凰网，的html结构中，找到我们需要的列表元素
//   chapters.each(function (item, index) {
//     let chapter = $(this)
//     let title = chapter.children('a').attr('title')  //获取新闻标题
//     let content = chapter.find('a').text()   //获取新闻内容
//     let imgUrl = chapter.find('img').attr('src')  //获取新闻图片
//     let linkUrl = chapter.children('a').attr('href')  //获取新闻详情跳转链接
//     let source = chapter.find('span.news-stream-newsStream-text').text()  //获取新闻来源信息
//     let date = chapter.find('time.news-stream-newsStream-text').text()   //获取新闻发布时间日期
//     newsData.push({
//       title,
//       content,
//       imgUrl,
//       linkUrl,
//       source,
//       date
//     })
//   })
//   newsData = JSON.stringify(newsData)
//   return newsData
// }



// test
const fs = require('fs')
const cheerio = require('cheerio')
const http = require('https')
let webUrl = 'https://y.qq.com/' //爬取网页地址
http.get(webUrl, req => {
  let str = ''
  req.on('data', chunk => {
    str += chunk   //  chunk ：爬取到的数据会分成64k的流，所以这里需要将所有的流拼接起来
  })
  req.on('end', () => {
    fs.writeFile('./data.json', getNewsData(str), function (err) {
      //文件路经，写入的内容，回调函数
      if (err) throw new Error('写文件失败' + err)
      console.log('成功写入文件')
    })
  })
})

//  根据拿到的html结构，通过cheerio来获取相应需要的数据，再通过fs将数据保存到本地
function getNewsData(str) {
  let newsData = []  //用来存储歌曲数据
  const $ = cheerio.load(str) //str: 加载需要的html代码
  let chapters = $('.songlist__item')  //.songlist__item: 在qq音乐中，的html结构中，找到我们需要的列表元素
  chapters.each(function (item, index) {
    let chapter = $(this)
    let title = chapter.find('a').attr('title')  //获取歌曲标题
    let imgUrl = chapter.find('img').attr('src')  //获取歌曲图片
    let name = chapter.find('a.singer_name').attr('title')  //获取歌手名称
    newsData.push({
      title,
      imgUrl,
      name,
    })
  })
  newsData = JSON.stringify(newsData)
  return newsData
}