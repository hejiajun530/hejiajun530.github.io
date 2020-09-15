const express = require('express')
const app = express()
const router = express.Router()
const mysql = require('mysql')
const querystring = require('querystring')
const { resolve } = require('path')

var cnt = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'test'
})
cnt.connect()

// 使用
app.use(require('cors')())
app.use(express.json())
app.use(router)

// 添加数据
router.post('/api/addlist', async (req, res) => {
  const body = req.body
  console.log(body)
  var addSql = 'insert into user(userId, userName, userAge, usreSex) values(?,?,?,?)'
  var addSqlParams = [body.userId, body.userName, body.userAge, body.usreSex]
  cnt.query(addSql, addSqlParams, function (err, result) {
    if (err) return console.log(err.toString());
    // console.log(result);
    res.send(true)
  })
})

// 更新/修改数据
router.put('/api/editlist/', async (req, res) => {
  const body = req.body
  var updateSql = 'update user set userName = ?, userAge = ?, usreSex = ? where userId = ?';
  var updateSqlParams = [body.userName, body.userAge, body.usreSex, body.userId]
  cnt.query(updateSql, updateSqlParams, function (err, result) {
    if (err) return console.log(err.toString());
    // console.log(result);
    res.send(true)
  })
})

// 删除数据
router.delete('/api/delList/:id', async (req, res) => {
  const query = req.params.id
  console.log(query);
  // var deletsSql = 'delete from user';//删除表中所有数据
  var deletsSql = 'delete from user where userId=' + query;//删除某一条数据
  cnt.query(deletsSql, function (err, result) {
    if (err) return console.log(err.toString());
    console.log(result);
    res.send(true)
  })
})

// 查询数据
router.get('/api/getlist', async (req, res) => {
  var selectSql = 'select * from user';
  cnt.query(selectSql, function (err, result) {
    if (err) return console.log(err.toString());
    // console.log(result);
    res.send(result)
  })
})

// 根据id查询数据
router.get('/api/getlistId/:id', async (req, res) => {
  const query = req.params.id
  var selectSql = 'select * from user where userId =' + query;
  cnt.query(selectSql, function (err, result) {
    if (err) return console.log(err.toString());
    // console.log(result);
    res.send(result)
  })
})


app.listen(3001, () => {
  console.log('http://localhost:3001')
})