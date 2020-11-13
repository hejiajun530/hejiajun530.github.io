const express = require('express')
const app = express()
const https = require('https');
const fs = require('fs');
const options = {
  key:fs.readFileSync('./ssl/2_tyq121.top.key'),
  cert:fs.readFileSync('./ssl/1_tyq121.top_bundle.crt')
}

// 历史组件
var history = require('connect-history-api-fallback')
app.use(history())

// 全局生成一个密钥  用于用户的token
app.set('secret', 'asfasdfgsdagdsfg')

app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/dist'));

require('./connect/db')(app);
require('./web/index')(app);

const server = https.createServer(options, app);
server.listen(3000, () => {
  console.log('http://localhost:3000')
})
