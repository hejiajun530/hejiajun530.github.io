module.exports = app => {
  const router = require('express').Router()
  const cnt = require('./db');

  // 登录接口
  router.get('/login', async (req, res) => {
    const query = req.query;
    console.log(query);
    var select = `select * from user where username = '${query.username}' and password = '${query.password}'`;
    cnt.query(select, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 添加教师接口
  router.post('/addTeacher', async (req, res) => {
    let body = req.body;
    // body = JSON.parse(body.data);
    console.log(body, 'body');
    console.log(body.name);
    var add = `insert into teacher(avator,bianhao,phone,grade,zhiwu,name) value(?,?,?,?,?,?)`;
    var addBody = [body.avator, body.bianhao, body.phone, body.grade, body.zhiwu, body.name];
    cnt.query(add, addBody, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 修改教师接口
  router.post('/updateTeacher', async (req, res) => {
    let body = req.body;
    // body = JSON.parse(body.data);
    console.log(body, 'body');
    var add = `update teacher set avator = ?,bianhao = ?,phone = ?,grade = ?,zhiwu = ?,name = ? where id = ?`;
    var addBody = [body.avator, body.bianhao, body.phone, body.grade, body.zhiwu, body.name, body.id];
    cnt.query(add, addBody, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 获取教师列表/教师接口
  router.get('/getTeacherList', async (req, res) => {
    let query = req.query;
    console.log(query, 'query');
    var select = `select * from teacher where name like '%${query.name}%'`;
    cnt.query(select, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 根据id获取教师
  router.get('/getTeacher', async (req, res) => {
    let query = req.query;
    console.log(query, 'query');
    var select = `select * from teacher where id = ${query.id}`;
    cnt.query(select, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 删除教师
  router.get('/delTeacher', async (req, res) => {
    let query = req.query;
    console.log(query, 'query');
    var select = `delete from teacher where id = ${query.id}`;
    cnt.query(select, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 添加留言接口
  router.post('/addLiuyan', async (req, res) => {
    let body = req.body;
    // body = JSON.parse(body.data);
    console.log(body, 'body');
    var add = `insert into liuyan(username,content) value(?,?)`;
    var addBody = [body.username, body.content];
    cnt.query(add, addBody, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
    })
  })

  // 获取留言接口
  router.get('/getLiuyan', async (req, res) => {
    let query = req.query;
    console.log(query, 'query');
    var select = `select * from liuyan`;
    cnt.query(select, function (err, result) {
      if (err) return res.send(err);
      console.log(result)
      res.send(result);
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
  router.post('/upload', upload.single('file'), async (req, res) => {
    // res.send('ok')
    const file = req.file
    console.log(file, 'file-------------------------')
    // file.url = `http://www.tyq121.top:80/upload/${file.filename}` // 网络图片地址 目前有问题
    file.url = `http://localhost:3000/upload/${file.filename}` // 本地图片地址
    res.send(file)
  })

  app.use('/web', router)
}