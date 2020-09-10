const express = require('express')
const app = express()
const mysql = require('mysql')

var cnt = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'test'
})
cnt.connect()
// 添加数据
// var addSql = 'insert into user(userId, userName, userAge, usreSex) values(0,?,?,?)'
// var addSqlParams = ['王小虎', '19', '男']
// cnt.query(addSql, addSqlParams, function (err, res) {
//   if (err) return console.log(err.toString());
//   console.log(res);
// })
// 更新/修改数据
// var updateSql = 'update user set userName = ?, userAge = ?, usreSex = ? where userId = ?';
// var updateSqlParams = ['王小花', '18', '女', 0]
// cnt.query(updateSql, updateSqlParams, function (err, res) {
//   if (err) return console.log(err.toString());
//   console.log(res);
// })
// 删除数据
var deletwSql = 'delete from user';//删除表中所有数据
// var deletsSql = 'delete from user where id=0';//删除某一条数据
cnt.query(deletwSql, function (err, res) {
  if (err) return console.log(err.toString());
  console.log(res);
})
// 查询数据
var selectSql = 'select * from user';
cnt.query(selectSql, function (err, res) {
  if (err) return console.log(err.toString());
  console.log(res);
})

app.use(require('cors')())

app.get('/api/ceatroyList', async (req, res) => {
  const list = [{
    date: "2015-07-01",
    name: "王小虎",
    address: "上海市普陀区金沙江路 1518 弄"
  }, {
    date: "2016-05-02",
    name: "士大夫",
    address: "上海市普陀区金沙江路 1518 弄"
  }, {
    date: "2016-07-12",
    name: "符号",
    address: "上海市普陀区金沙江路 1518 弄"
  }, {
    date: "2016-08-22",
    name: "佛哈德",
    address: "上海市普陀区金沙江路 1518 弄"
  }, {
    date: "2016-09-02",
    name: "飒飒东风",
    address: "上海市普陀区金沙江路 1518 弄"
  },]
  res.send(list);
})

app.listen(3001, () => {
  console.log('http://localhost:3001')
})