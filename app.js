var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由
const user = require('./routes/user');
const article = require('./routes/article');

// 数据库操作
let db = require('./models/db');

var app = express();

// view engine setup 视图渲染设置 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 数据库中间件
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 路由
app.use('/user', user);
app.use('/article', article);


// 404错误捕获
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler错误处理
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
