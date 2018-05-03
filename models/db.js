// 数据库文件
const mongoose = require('mongoose');

// 连接数据库， 数据库名为smallApp， 端口号为27017

mongoose.connect('mongodb://localhost:27017/smallApp');
const db = mongoose.connection;

// 监听连接  控制台输出

db.on('error', (e) => console.log('连接错误: ' + e));
db.on('open', () => console.log('连接成功'));

// 创建schema
const userSchema = new mongoose.Schema({
    userName:  { type:String },
    email: { type:String }
});

const collection = 'usercollection';

// 创建model
const userModel = mongoose.model('usercollection', userSchema, collection); //userModel为创建或者选中的集合;

module.exports = userModel;