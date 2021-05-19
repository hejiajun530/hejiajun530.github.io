// 导入express模块
const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/public'));
app.listen(3000);
console.log('http://192.168.31.164:3000');