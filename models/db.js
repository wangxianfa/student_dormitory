// mongoose 链接
// 
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/student_dormitory');

// 链接错误
db.on('error', function(error) {
	console.log(error);
});

// 链接成功
db.once('open', function(error) {
	console.log("数据库连接成功");
});

module.exports = db;