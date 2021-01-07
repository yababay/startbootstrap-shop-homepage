const mysql = require('mysql')

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'simpleapi'
})
