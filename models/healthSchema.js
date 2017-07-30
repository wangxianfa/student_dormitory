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
},{collection: 'health'});

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

healthSchema.statics.findDorm = function(callback) {

	return this.model('mongoose').find("").select("dorm").exec(callback);

}


healthSchema.statics.findRoom = function(dorm, callback) {

	if (dorm === "all") {

		return this.model('mongoose').find("").select("room").exec(callback);

	}

	return this.model('mongoose').find({
		"dorm": dorm
	}).select("room").exec(callback);

}

// model
var healthModel = db.model('mongoose', healthSchema, "health");



module.exports = healthModel;