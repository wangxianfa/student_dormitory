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

healthSchema.statics.findall = function(orderBy, dorm_filter, room_filter, page, limit, callback) {
	if ((dorm_filter !== "all") && (room_filter !== "all")) {

		return this.model('mongoose').find({
			"dorm": dorm_filter,
			"room": room_filter
		}).skip((page - 1) * limit).limit(limit).sort(orderBy).exec(callback);

	}

	if ((dorm_filter === "all") && (room_filter !== "all")) {

		return this.model('mongoose').find({
			"room": room_filter
		}).skip((page - 1) * limit).limit(limit).sort(orderBy).exec(callback);

	}

	if ((dorm_filter !== "all") && (room_filter === "all")) {

		return this.model('mongoose').find({
			"dorm": dorm_filter
		}).skip((page - 1) * limit).limit(limit).sort(orderBy).exec(callback);

	}

	if ((dorm_filter === "all") && (room_filter === "all")) {

		return this.model('mongoose').find("").skip((page - 1) * limit).limit(limit).sort(orderBy).exec(callback);

	}
}

healthSchema.statics.countSum = function(dorm_filter, room_filter, callback) {


	if ((dorm_filter !== "all") && (room_filter !== "all")) {

		return this.model('mongoose').find({
			"dorm": dorm_filter,
			"room": room_filter
		}).count("", callback);

	}

	if ((dorm_filter === "all") && (room_filter !== "all")) {

		return this.model('mongoose').find({
			"room": room_filter
		}).count("", callback);

	}

	if ((dorm_filter !== "all") && (room_filter === "all")) {

		return this.model('mongoose').find({
			"dorm": dorm_filter
		}).count("", callback);

	}

	if ((dorm_filter === "all") && (room_filter === "all")) {

		return this.model('mongoose').count("", callback);

	}


}

// model
var healthModel = db.model('mongoose', healthSchema, "health");



module.exports = healthModel;