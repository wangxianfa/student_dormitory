var mongoose = require('mongoose');
var db = require('./db.js');

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

healthSchema.statics.findall = function(page, limit, callback) {
	return this.model('mongoose').where("").skip((page - 1) * limit).limit(limit).exec(callback);
}

healthSchema.statics.countSum = function(callback) {
	return this.model('mongoose').count("", callback);
}

// model
var healthModel = db.model('mongoose', healthSchema, "health");



module.exports = healthModel;