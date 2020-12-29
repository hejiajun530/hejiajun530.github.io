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
    var add = `insert into teacher(bianhao,phone,grade,zhiwu,name) value(?,?,?,?,?)`;
    var addBody = [body.bianhao, body.phone, body.grade, body.zhiwu, body.name];
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
    var add = `update teacher set bianhao = ?,phone = ?,grade = ?,zhiwu = ?,name = ? where id = ?`;
    var addBody = [body.bianhao, body.phone, body.grade, body.zhiwu, body.name, body.id];
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

  app.use('/web', router)
}