module.exports = app => {
  const router = require('express').Router()
  const mysql = require('mysql');
  const jwt = require('jsonwebtoken')// token
  const cnt = require('../connect/db');

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
      if (err) return res.send(err);
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
      if (err) return res.send(err);
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
      if (err) return res.send(err);
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
    let selectSql = `select *,(select count(*) from user where userid != 3 and userid != ${body.userid}) as 'total',(select count(*) from article where article.userid = user.userid) as 'articleNum' from user where userid != 3 and userid != ${body.userid} order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`
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

  // 添加文章
  router.post('/addArticle', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into article(title, category, tag, content, cover, count, userid) values(?,?,?,?,?,?,?)`
    let addSqlParams = [body.title, body.category, body.tag, body.content, body.cover, body.count, body.userid]
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

  // 获取 过往故事 文章列表  暂时停用
  router.post('/getArticleListStory', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like' from article,user where article.userid = user.userid and article.articleid != 13 and article.category = "过往故事" order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`//使用limit不用and
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      cnt.query(`select count(*) as total from article,user where article.userid = user.userid and article.category = "过往故事" `, function (err, result1) {
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

  // 获取 技术分享 文章列表  暂时停用
  router.post('/getArticleListShare', async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like' from article,user where article.userid = user.userid and article.articleid != 13 and article.category = "技术分享" order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`//使用limit不用and
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      cnt.query(`select count(*) as total from article,user where article.userid = user.userid and article.category = "技术分享" `, function (err, result1) {
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

  // 搜索文章
  router.post('/getArticleListByText', async (req, res) => {
    const body = req.body
    console.log(body);
    let arr = body.tag.split(',');
    let str = '';
    arr.forEach((item, index) => {
      str += ' and article.tag like "%' + item + '%"';
      // console.log(str);
    })
    let selectSql = `select article.*,(select count(*) from alike where alike.articleid = article.articleid) as 'like' from article where article.articleid != 13 and (article.title like "%${body.text}%" or article.content like "%${body.text}%") ${str} order by createTime desc`
    // console.log(selectSql)
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      cnt.query(`select count(*) as total from article,user where article.userid = user.userid`, function (err, result1) {
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

  // 根据用户id获取所有文章列表
  router.post('/getArticleListById', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select article.*,user.username,(select count(*) from alike where alike.articleid = article.articleid) as 'like' from article,user where article.userid = user.userid and article.articleid != 13 and article.userid = "${body.userid}" order by createTime desc limit ${(body.page - 1) * body.num}, ${body.num}`//使用limit不用and
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      cnt.query(`select count(*) as total from article,user where article.userid = user.userid and article.userid = "${body.userid}"`, function (err, result1) {
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

  // 根据用户id获取所有文章列表   个人归档
  router.get('/getArticleListByIdArch', auth, async (req, res) => {
    const query = req.query
    console.log(query);
    let selectSql = `select * from article where userid = "${query.userid}" order by createTime desc`//使用limit不用and
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj)
    })
  })

  // 根据文章id修改文章内容
  router.post('/editArticleById', async (req, res) => {
    const body = req.body
    console.log(body)
    let updateSql = `update article set title = ?, category = ?, tag = ?, cover = ?, content = ?, count = ? where articleid = ?`;
    let updateSqlParams = [body.title, body.category, body.tag, body.cover, body.content, body.count, body.articleid]
    cnt.query(updateSql, updateSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '修改文章成功',
        res: result
      }
      res.send(resultObj)
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

  // 文章点赞
  router.post('/addLike', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from alike where articleid = ${body.articleid} and userid = ${body.userid}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      if (!result.length) {
        console.log('空');
        // 点赞
        let addSql = `insert into alike(articleid, userid, status) value(?,?,?)`;
        let addParams = [body.articleid, body.userid, body.status]
        cnt.query(addSql, addParams, function (err, result1) {
          if (err) return res.send(err);
          var resultObj = {
            flag: true,
            msg: '点赞成功',
            res: result1
          }
          res.send(resultObj)
        })
      } else {
        console.log('不空');
        // 取消点赞
        let delSql = `delete from alike where articleid = ${body.articleid} and userid = ${body.userid}`;
        cnt.query(delSql, function (err, result1) {
          if (err) return res.send(err);
          var resultObj = {
            flag: true,
            msg: '取消点赞',
            res: result1
          }
          res.send(resultObj)
        })
      }
    })
  })

  // 添加评论
  router.post('/addComment', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into comment(articleid, userid, comment) value(?,?,?)`
    let addSqlParams = [body.articleid, body.userid, body.comment]
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      var resultObj = {
        flag: true,
        msg: '评论成功!',
        res: result
      }
      res.send(resultObj);
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

  // 根据文章id查询评论数量
  router.get('/getCommentSum', async (req, res) => {
    const query = req.query
    console.log(query);
    let selectSql = `select count(*) as commentSum from comment where articleid = ${query.articleid}`;
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

  // 根据文章id获取赞最多的评论
  // router.post('/getCommentListRe', async (req, res) => {
  //   const body = req.body
  //   console.log(body);
  //   let selectSql = `select comment.*,user.username,user.avator,(select count(*) from clike where comment.commentid = clike.commentid) as 'like' from comment,user where comment.userid = user.userid and articleid = ${body.articleid}`;
  //   cnt.query(selectSql, function (err, result) {
  //     if (err) return res.send(err);
  //     var resultObj = {
  //       flag: true,
  //       msg: '查询评论列表成功',
  //       res: result
  //     }
  //     res.send(resultObj);
  //   })
  // })


  // 评论点赞
  router.post('/addCLike', auth, async (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from clike where commentid = ${body.commentid} and userid = ${body.userid}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      if (!result.length) {
        console.log('空');
        // 点赞
        let addSql = `insert into clike(commentid, userid, status) value(?,?,?)`;
        let addParams = [body.commentid, body.userid, body.status]
        cnt.query(addSql, addParams, function (err, result1) {
          if (err) return res.send(err);
          var resultObj = {
            flag: true,
            msg: '点赞成功',
            res: result1
          }
          res.send(resultObj)
        })
      } else {
        console.log('不空');
        // 取消点赞
        let delSql = `delete from clike where commentid = ${body.commentid} and userid = ${body.userid}`;
        cnt.query(delSql, function (err, result1) {
          if (err) return res.send(err);
          var resultObj = {
            flag: true,
            msg: '取消点赞',
            res: result1
          }
          res.send(resultObj)
        })
      }
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

  // 添加待做事项
  router.post('/addWait', auth, async (req, res) => {
    const body = req.body;
    console.log(body);
    let addSql = `insert into wait(content, time, userid, istrue) values(?,?,?,?)`;
    let addSqlParams = [body.content, body.time, body.userid, body.istrue];
    cnt.query(addSql, addSqlParams, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '添加待做事项成功!',
        res: result
      }
      res.send(resultObj);
    });
  })

  // 获取待做事项列表
  router.get('/getWaitList', auth, async (req, res) => {
    const query = req.query;
    console.log(query);
    let selectSql = `select * from wait where userid = ${query.userid}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取待做事项列表成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 修改待做事项
  router.post('/editWait', auth, async (req, res) => {
    const body = req.body;
    console.log(body);
    let updateSql = `update wait set istrue = ? where waitid = ?`;
    let updateSqlParams = [body.istrue, body.waitid];
    cnt.query(updateSql, updateSqlParams, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '修改成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 删除待做事项
  router.get('/delWait', auth, async (req, res) => {
    const query = req.query;
    console.log(query);
    let delSql = `delete from wait where waitid = ${query.waitid}`;
    cnt.query(delSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '删除成功!',
        res: result
      }
      res.send(resultObj);
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

  app.use('/web/api', router)
}