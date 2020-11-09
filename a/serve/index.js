const express = require('express')
const app = express()

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

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
