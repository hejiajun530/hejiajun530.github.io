const mysql = require('mysql');
var cnt = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'school'
});
cnt.connect();
module.exports = cnt;