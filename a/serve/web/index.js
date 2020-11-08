module.exports = app => {
  const router = require('express').Router()
  const mysql = require('mysql');
  const jwt = require('jsonwebtoken')// token
  var cnt = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'people'
  });
  cnt.connect();

  // 用户注册
  router.post('/regist', async (req, res) => {
    // 传过来的值
    const body = req.body
    console.log(body);
    // 判断是否有该用户
    // var userFlag = await getUser(body.username);
    // console.log(userFlag, 'userFlag');
    // if (!userFlag) {
    //   var resultObj = {
    //     flag: false,
    //     msg: '用户已存在!'
    //   }
    //   res.send(resultObj)
    //   return false;
    // }
    cnt.query('select * from user where username = "' + body.username + '"', function (err, result) {
      if (err) return console.log(err.toString());
      console.log(result, 'result')
      if (result == '') {
        // 添加用户
        var addSql = 'insert into user(username, password, email) values(?,?,?)'
        var addSqlParams = [body.username, body.password, body.email]
        cnt.query(addSql, addSqlParams, function (err, result) {
          // 报错，有可能该用户名已存在
          if (err) {
            var resultObj = {
              flag: false,
              msg: '注册失败! 该用户名或已存在!',
              res: result
            }
            res.send(resultObj)
            return console.log(err.toString());
          }
          var resultObj = {
            flag: true,
            msg: '注册成功!',
            res: result
          }
          res.send(resultObj)
        })
      } else {
        res.send({
          flag: false,
          msg: '用户已存在!'
        })
      }
    })
  })

  // 用户登录
  router.get('/login', async (req, res) => {
    // 传过来的值
    const query = req.query
    console.log(query);
    // 判断是否有该用户
    // var userFlag = await getUser(query.username);
    // console.log(userFlag, 'userFlag')
    // if (userFlag) {
    //   var resultObj = {
    //     flag: false,
    //     msg: '用户不存在!'
    //   }
    //   // console.log(userFlag);
    //   res.send(resultObj)
    //   return false;
    // }
    cnt.query('select * from user where username = "' + query.username + '"', function (err, result) {
      if (err) return console.log(err.toString());
      console.log(result, 'result')
      if (result == '') {
        res.send({
          flag: false,
          msg: '用户不存在!'
        })
      } else {
        // 判断用户名和密码是否正确
        var addSql = 'select * from user where username = "' + query.username + '" and password = "' + query.password + '"';
        cnt.query(addSql, function (err, result) {
          if (err) return console.log(err.toString());
          // console.log(result == '');
          // console.log(result);
          // 返回的值为空，有可能是用户名或密码输入错误
          if (result == '') {
            var resultObj = {
              flag: false,
              msg: '用户名或密码错误!',
              res: result
            }
            res.send(resultObj)
          } else if (result[0].username == query.username) {
            const token = jwt.sign({ id: result[0].userid }, app.get('secret'))
            var resultObj = {
              flag: true,
              msg: '登录成功!',
              res: result,
              token: token
            }
            res.send(resultObj)
          }
        })
      }
    })
  })

  // 判断是否登录
  async function auth(req, res, next) {
    const token = (req.headers.authorization || '').toString().split(' ').pop()
    // console.log(token)
    if (!token) {
      return res.status(401).send({
        flag: false,
        msg: '请先登录!'
      })
    }
    // console.log(req.app.get('secret'))
    let { id } = jwt.verify(token, req.app.get('secret'))
    // console.log(id)
    if (!id) {
      return res.status(401).send({
        flag: false,
        msg: '请先登录!'
      })
    }
    cnt.query('select * from user where userid = "' + id + '"', function (err, result) {
      if (err) return console.log(err.toString());
      // console.log(result)
      if (!result) {
        return res.status(401).send({
          flag: false,
          msg: '请先登录!'
        })
      }
    })
    await next()
  }
  // 测试
  router.get('/test', auth, async (req, res) => {
    res.send('true');
  })

  app.use('/web/api', router)
}