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
    await cnt.query('select * from user where userid = "' + id + '"', function (err, result) {
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

  // 获取用户信息
  router.get('/getUser', auth, async (req, res) => {
    // 传过过来的值
    const query = req.query
    console.log(query);
    cnt.query('select * from user where username = "' + query.username + '"', function (err, result) {
      if (err) return console.log(err.toString());
      res.send(result)
    })
    // console.log(data);
  })

  // 根据id获取用户信息
  router.get('/getUserById', auth, async (req, res) => {
    // 传过过来的值
    const query = req.query
    console.log(query);
    cnt.query('select * from user where userid = "' + query.userid + '"', function (err, result) {
      if (err) return console.log(err.toString());
      res.send(result)
    })
    // console.log(data);
  })

  // 修改用户信息
  router.post('/editUser', auth, async (req, res) => {
    // 传过过来的值
    const body = req.body
    console.log(body);
    let updateSql = 'update user set avator = ?, username = ?, tips = ?, email = ?, password = ? where userid = ?'
    let updateParams = [body.avator, body.username, body.tips, body.email, body.password, body.userid]
    cnt.query(updateSql, updateParams, function (err, result) {
      if (err) return console.log(err.toString());
      console.log(result, 'editUser')
      res.send(result)
    })
    // console.log(data);
  })


  // 上传图片
  const multer = require('multer')
  // const upload = multer({ dest: __dirname + '/../upload' })
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/upload');
    },
    filename: function (req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
  })
  var upload = multer({ storage: storage })
  router.use(upload.single('file'))
  // 要想使图片显示，还需要静态资源托管 express.static
  router.post('/upload', upload.single('file'), async (req, res) => {
    // res.send('ok')
    const file = req.file
    file.url = `http://localhost:3000/upload/${file.filename}`
    console.log(file)
    res.send(file)
  })

  app.use('/web/api', router)
}