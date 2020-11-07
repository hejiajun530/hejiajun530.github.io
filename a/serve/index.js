const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

app.use('/', express.static(__dirname + '/dist'));

require('./connect/db')(app);
require('./web/index')(app);

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
