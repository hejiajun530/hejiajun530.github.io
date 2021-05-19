module.exports = app => {
  const router = require('express').Router();
  const formidable = require("formidable");
  const path = require("path");
  const fs = require('fs');
  const jwt = require('jsonwebtoken'); // token
  const cnt = require('../connect/db');
  const https = require('https');

  // 获取openid
  router.post('/getOpenid', async (req, res) => {
    const body = req.body
    console.log(body);
    let appid = "wxfac328c3ee26f0d2";//自己小程序后台管理的appid，可登录小程序后台查看
    let secret = "3a9768e01b9322ddc18221208d2cc663";//小程序后台管理的secret，可登录小程序后台查看
    let grant_type = "authorization_code";// 授权（必填）默认值
    //请求获取openid
    let url = "https://api.weixin.qq.com/sns/jscode2session?grant_type="+grant_type+"&appid="+appid+"&secret="+secret+"&js_code="+body.code;
    let openid,sessionKey;
    // let https = require("https");
    https.get(url, (res) => {
        res.on('data', (d) => {
            console.log('返回的信息: ', JSON.parse(d));
            openid = JSON.parse(d).openid;//得到openid
            sessionKey = JSON.parse(d).session_key;//得到session_key
        }).on('error', (e) => {
            console.error(e);
        });
    });
    res.send('11');
  })

  // 用户登录
  router.post('/login', async (req, res) => {
    // 传过来的值
    const query = req.body
    console.log(query);
    cnt.query('select * from xcxuser where openid = "' + query.openid + '"', function (err, result) {
      if (err) return res.send(err);
      const token = jwt.sign({ openid: query.openid }, query.session_key);
      console.log(result);
      if (result.length) {
        var resultObj = {
          flag: true,
          msg: '登录成功!',
          res: result,
          token: token
        }
        res.send(resultObj)
      } else {
        let addSql = `insert into xcxuser(openid) values(?)`;
        let addParams = [query.openid];
        cnt.query(addSql, addParams,function (err1, result1) {
          if (err1) return res.send(err1);
          var resultObj1 = {
            flag: true,
            msg: '登录成功!',
            res: result1,
            token: token
          }
          res.send(resultObj1)
        })
      }
    })
  })

  // 保存图片
  router.post("/saveImg", (req, res) => {
    const body = req.body
    console.log(body);
    let addSql = `insert into img(text, img) values(?, ?)`;
    let addParams = [body.text, body.img];
    cnt.query(addSql, addParams, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '添加成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 查看所有/分类图片
  router.post("/getImgList", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from img where text like '%${body.text}%' order by createTime desc limit ${(body.page - 1) * 20}, ${20}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 查看点赞/收藏/记录图片
  router.post("/getLCJImgList", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select b.imgid, img.img, img.text from ${body.text} as b, img where b.imgid = img.imgid and openid = '${body.openid}' order by b.updateTime desc limit ${(body.page - 1) * 20}, ${20}`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 查看图片
  router.post("/getImg", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from img where imgid = '${body.imgid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 下一张
  router.post("/getImgNext", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from img where text like '%${body.text}%' and imgid = (select imgid from img where imgid > ${body.imgid} order by imgid asc limit 1)`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 上一张
  router.post("/getImgPrev", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from img where text like '%${body.text}%' and imgid = (select imgid from img where imgid < ${body.imgid} order by imgid desc limit 1)`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  
	// 上一条：
	// select * from table where id = (select id from table where id < {$id} order by id desc limit 1); 
	// 下一条：
	// select * from table where id = (select id from table where id > {$id} order by id asc limit 1);

  // 图片 点赞
  router.post("/likeImg", (req, res) => {
    const body = req.body
    console.log(body);
    
    let selectSql = `select * from xcxlike where imgid = '${body.imgid}' and openid = '${body.openid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      console.log(result, 'result')
      if (!result.length) {
        let addSql = `insert into xcxlike(imgid, openid) values(?, ?)`;
        let addParams = [body.imgid, body.openid];
        cnt.query(addSql, addParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '点赞成功!',
            res: result1
          }
          res.send(resultObj);
        })
      } else {
        let deleteSql = `delete from xcxlike where imgid = '${body.imgid}' and openid = '${body.openid}'`
        let deleteParams = [body.imgid, body.openid]
        cnt.query(deleteSql, deleteParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '取消点赞成功!',
            res: result1
          }
          res.send(resultObj);
        })
      }
    })
    // let addSql = `insert into xcxlike(imgid, openid) values(?, ?)`;
    // let addParams = [body.imgid, body.openid];
    // cnt.query(addSql, addParams, function (err, result) {
    //   if (err) return res.send(err);
    //   let resultObj = {
    //     flag: true,
    //     msg: '点赞成功!',
    //     res: result
    //   }
    //   res.send(resultObj);
    // })
  })

  // 图片 是否点赞
  router.post("/getLikeImg", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from xcxlike where imgid = '${body.imgid}' and openid = '${body.openid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取点赞成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 图片 收藏
  router.post("/collectImg", (req, res) => {
    const body = req.body
    console.log(body);
    
    let selectSql = `select * from collect where imgid = '${body.imgid}' and openid = '${body.openid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      console.log(result, 'result')
      if (!result.length) {
        let addSql = `insert into collect(imgid, openid) values(?, ?)`;
        let addParams = [body.imgid, body.openid];
        cnt.query(addSql, addParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '收藏成功!',
            res: result1
          }
          res.send(resultObj);
        })
      } else {
        let deleteSql = `delete from collect where imgid = '${body.imgid}' and openid = '${body.openid}'`
        let deleteParams = [body.imgid, body.openid]
        cnt.query(deleteSql, deleteParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '取消收藏成功!',
            res: result1
          }
          res.send(resultObj);
        })
      }
    })
    // let addSql = `insert into collect(imgid, openid) values(?, ?)`;
    // let addParams = [body.imgid, body.openid];
    // cnt.query(addSql, addParams, function (err, result) {
    //   if (err) return res.send(err);
    //   let resultObj = {
    //     flag: true,
    //     msg: '收藏成功!',
    //     res: result
    //   }
    //   res.send(resultObj);
    // })
  })

  // 图片 是否收藏
  router.post("/getCollectImg", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from collect where imgid = '${body.imgid}' and openid = '${body.openid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      let resultObj = {
        flag: true,
        msg: '获取收藏成功!',
        res: result
      }
      res.send(resultObj);
    })
  })

  // 图片 记录
  router.post("/recordImg", (req, res) => {
    const body = req.body
    console.log(body);
    let selectSql = `select * from record where imgid = '${body.imgid}' and openid = '${body.openid}'`;
    cnt.query(selectSql, function (err, result) {
      if (err) return res.send(err);
      console.log(result, 'result')
      if (!result.length) {
        let addSql = `insert into record(imgid, openid) values(?, ?)`;
        let addParams = [body.imgid, body.openid];
        cnt.query(addSql, addParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '记录成功!',
            res: result1
          }
          res.send(resultObj);
        })
      } else {
        let updateSql = 'update record set imgid = ?, openid = ? where id = ?'
        let updateParams = [body.imgid, body.openid, result[0].id]
        cnt.query(updateSql, updateParams, function (err, result1) {
          if (err) return res.send(err);
          let resultObj = {
            flag: true,
            msg: '更新记录成功!',
            res: result1
          }
          res.send(resultObj);
        })
      }
    })

  })

  // 删除图片
  router.post("/delImg", (req, res) => {
    const body = req.body
    console.log(body);
    let delSql = `delete from img where imgid = '${body.imgid}'`;
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

  // 图片上传
  router.post("/uploadXcx", (req, res) => {
    var form = new formidable.IncomingForm();//既处理表单，又处理文件上传
    //设置文件上传文件夹/路径，__dirname是一个常量，为当前路径
    let uploadDir = path.join(__dirname, "/../xcx");
    form.uploadDir = uploadDir;//本地文件夹目录路径

    form.parse(req, (err, fields, files) => {
      console.log(files)
        let oldPath = files.file.path;//这里的路径是图片的本地路径
        console.log(files.file.name)//图片传过来的名字
        let newPath = path.join(path.dirname(oldPath), files.file.name);
        //这里我传回一个下载此图片的Url
        var downUrl = "https://www.tyq121.top:3000/xcx/" + files.file.name;//这里是想传回图片的链接
        fs.rename(oldPath, newPath, () => {//fs.rename重命名图片名称
            res.send(downUrl)
        })
    })
  })

  app.use('/xcx/api', router)
}