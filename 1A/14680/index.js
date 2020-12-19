const express = require('express')
const app = express()

const mysql = require('mysql');
var cnt = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'NodeDB'
});
cnt.connect();

// let addSql = `insert into User(user_name, user_sex, user_age, user_email, user_address) values(?,?,?,?,?)`
// let addSqlParams = ['王老五', '男', '55', '15464564765@qq.com', '北京']
// cnt.query(addSql, addSqlParams, function (err, result) {
//   if (err) return res.send(err);
//   // result.send(true)
//   console.log(result);
// })

// 历史组件
// var history = require('connect-history-api-fallback')
// app.use(history())

app.get('/getUserlist', function (req, res) {
  const { username } = req.query;
  // console.log(req, username)
  let addSql = `select * from User where user_name like '%${username}%'`
  let addSqlParams = ['王老五', '男', '55', '15464564765@qq.com', '北京']
  cnt.query(addSql, addSqlParams, function (err, result) {
    if (err) return res.send(err);
    // result.send(true)
    // console.log(result);
    res.send(result);
  })
})

app.use('/public', express.static('./public'));

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
