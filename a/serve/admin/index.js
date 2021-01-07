module.exports = app => {
  const router = require('express').Router()
  const mysql = require('mysql');
  const jwt = require('jsonwebtoken')// token
  const cnt = require('../connect/db');

  // 添加用户
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
    cnt.query('select * from admin where adminname = "' + body.adminname + '"', function (err, result) {
      if (err) return res.send(err);
      console.log(result, 'result')
      if (result == '') {
        // 添加用户
        var addSql = 'insert into admin(adminname, password, role) values(?,?,?)'
        var addSqlParams = [body.adminname, body.password, body.role]
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
    cnt.query('select * from admin where adminname = "' + query.adminname + '"', function (err, result) {
      if (err) return res.send(err);
      console.log(result, 'result')
      if (result == '') {
        res.send({
          flag: false,
          msg: '用户不存在!'
        })
      } else {
        // 判断用户名和密码是否正确
        var addSql = 'select * from admin where adminname = "' + query.adminname + '" and password = "' + query.password + '"';
        cnt.query(addSql, function (err, result) {
          if (err) return res.send(err);
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
            const token = jwt.sign({ id: result[0].adminid }, app.get('secret'))
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
    console.log(token)
    if (!token) {
      return res.status(401).send({
        flag: false,
        msg: '请先登录!'
      })
    }
    // console.log(req.app.get('secret'))
    let { id } = jwt.verify(token, req.app.get('secret'))
    console.log(id)
    if (!id) {
      return res.status(401).send({
        flag: false,
        msg: '请先登录!'
      })
    }
    await cnt.query('select * from admin where adminid = "' + id + '"', function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      if (!result) {
        return res.status(401).send({
          flag: false,
          msg: '请先登录!'
        })
      }
    })
    await next()
  }

  // 添加分类
  router.post('/addCategory', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into category(text) values(?)`
    let addSqlParams = [body.text]
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '添加成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取分类
  router.get('/getCategory', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let getSql = `select * from category`
    cnt.query(getSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 删除分类
  router.get('/delCategory', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let delSql = `delete from category where categoryid = ${query.categoryid}`
    cnt.query(delSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '删除成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 添加标签
  router.post('/addTag', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into tag(text) values(?)`
    let addSqlParams = [body.text]
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '添加成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取标签
  router.get('/getTag', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let getSql = `select * from tag`
    cnt.query(getSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 删除标签
  router.get('/delTag', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let delSql = `delete from tag where tagid = ${query.tagid}`
    cnt.query(delSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '删除成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 添加轮播图
  router.post('/addSwiper', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into swiper(src) values(?)`
    let addSqlParams = [body.src]
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '添加成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取轮播图
  router.get('/getSwiper', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let getSql = `select * from swiper`
    cnt.query(getSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 删除轮播图
  router.get('/delSwiper', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let delSql = `delete from swiper where swiperid = ${query.swiperid}`
    cnt.query(delSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '删除成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取用户信息
  router.get('/getUser', auth, async (req, res) => {
    // 传过过来的值
    const query = req.query
    console.log(query);
    cnt.query('select * from user where username like "%' + query.username + '%"', function (err, result) {
      if (err) return res.send(err);
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
      if (err) return res.send(err);
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
      if (err) return res.send(err);
      console.log(result, 'editUser')
      res.send(result)
    })
    // console.log(data);
  })

  // 获取用户列表
  router.post('/getUserList', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select *,(select count(*) from user where userid != 3) as 'total' from user where userid != 3 limit ${(body.page - 1) * body.num}, ${body.num}`
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取用户列表成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取所有文章列表
  router.post('/getArticleList', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = '', totalSql = '';
    if (body.category) {
      // 获取某一分类
      selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like',(select count(*) from comment where comment.articleid = article.articleid) as 'comment' from article,user where article.userid = user.userid and article.category = "${body.category}" and article.articleid != 13 order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`//使用limit不用and
      totalSql = `select count(*) as total from article,user where article.userid = user.userid and article.category = "${body.category}" and article.articleid != 13`
    } else {
      // 获取所有
      selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like',(select count(*) from comment where comment.articleid = article.articleid) as 'comment' from article,user where article.userid = user.userid and article.articleid != 13 order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`//使用limit不用and
      totalSql = `select count(*) as total from article,user where article.userid = user.userid and article.articleid != 13`
    }
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      cnt.query(totalSql, function (err, result1) {
        if (err) return res.send(err);
        var resultObj = {
          flag: true,
          msg: '获取成功!',
          res: result,
          total: result1
        }
        res.send(resultObj)
      })
    })
  })

  // 根据文章id获取文章内容
  router.get('/getArticleByArticleId', async (req, res) => {
    const query = req.query
    console.log(query);
    let selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like' from article,user where article.userid = user.userid and articleid = ${query.articleid}`
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取文章成功',
        res: result
      };
      res.send(resultObj)
    })
  })

  // 根据文章id删除文章
  router.get('/delArticleById', auth, async (req, res) => {
    const query = req.query
    console.log(query)
    let delSql = `delete from article where articleid = ${query.articleid}`;
    cnt.query(delSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '删除成功',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 根据文章id查询所有评论
  router.post('/getCommentListById', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select comment.*,user.username,user.avator,(select count(*) from clike where comment.commentid = clike.commentid) as 'like',(select count(*) from comment where articleid = ${body.articleid}) as 'total' from comment,user where comment.userid = user.userid and articleid = ${body.articleid} order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '查询评论列表成功',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 添加歌曲
  router.post('/addMusic', async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into music(title, auther, content, text) values(?,?,?,?)`
    let addSqlParams = [body.title, body.auther, body.content, body.text]
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '发表成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 获取歌曲列表
  router.post('/getMusicList', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select *,(select count(*) from music) as 'total' from music order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取音乐列表成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 歌曲搜索
  router.get('/getMusicByText', async (req, res) => {
    const query = req.query
    console.log(query);
    let selectSql = `select * from music where title like '%${query.title}%' or auther like '%${query.title}%'`
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '搜索音乐成功!',
        res: result
      }
      res.send(resultObj)
    })
  })


  // 上传图片
  const multer = require('multer')
  // const upload = multer({ dest: __dirname + '/../upload' })
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  var upload = multer({ storage: storage })
  // 要想使图片显示，还需要静态资源托管 express.static
  router.post('/upload', auth, upload.single('file'), async (req, res) => {
    // res.send('ok')
    const file = req.file
    console.log(file, 'file-------------------------')
    // file.url = `http://www.tyq121.top:80/upload/${file.filename}` // 网络图片地址 目前有问题
    file.url = `http://localhost:3000/upload/${file.filename}` // 本地图片地址
    res.send(file)
  })

  app.use('/admin/api', router)
}