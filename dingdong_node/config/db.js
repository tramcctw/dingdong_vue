const mysql = require('mysql')

const pool = mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'123456',
  database:'dingdong',
  charset: "UTF8_GENERAL_CI",
  typeCast: true,
  multipleStatements: false,
})

pool.connectionLimit = 10;

exports.query = function (sql,arr,callback) {

  //连接池连接
  pool.getConnection(function (err,connection) {
    //查询数据，arr中更替？？？
    connection.query(sql,arr,function (err,res) {
      if(err) throw err
      connection.release()
      // 释放连接
      callback(res)
    })
  })

}