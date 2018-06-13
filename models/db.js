// 数据库文件
const mysql = require('mysql');

// 连接数据库,创建连接数据库
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: ''
})

module.exports = userModel;