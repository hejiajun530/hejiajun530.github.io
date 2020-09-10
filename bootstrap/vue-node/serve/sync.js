var fs = require('fs')
// 同步
// var data = fs.readFileSync('input.txt')
// console.log(data.toString())
// 异步   使用回调函数
fs.readFile('input.txt', function (err, data) {
  if (err) return console.log(err);
  console.log(data.toString())
})
console.log('程序执行结束')