var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student_dormitory');

var db = mongoose.connection;

// 链接错误
db.on('error', function(error) {
	console.log(error);
});

// Schema 结构
var healthSchema = new mongoose.Schema({
	sid: {
		type: Number
	},
	dorm: {
		type: String
	},
	room: {
		type: String
	},
	score: {
		type: Number
	},
	date_time: {
		type: Date,
		default: Date.now
	}
});

// 添加 mongoose 静态方法，静态方法在Model层就能使用
healthSchema.statics.findbydorm = function(dorm, callback) {
	return this.model('mongoose').find({
		dorm: dorm
	}, callback);
}

// model
var healthModel = db.model('mongoose', healthSchema);

// 基于静态方法的查询
healthModel.findbydorm('516', function(error, result) {
	if (error) {
		console.log(error);
	} else {
		console.log(result);
	}
	//关闭数据库链接
	db.close();
});