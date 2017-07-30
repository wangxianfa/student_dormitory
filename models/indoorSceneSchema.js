var mongoose = require('mongoose');
var db = require('./db.js');

// Schema 结构
var indoorSceneSchema = new mongoose.Schema({
	did: {
		type: String
	},
	rid: {
		type: String
	},
	contents: {
		img: {
			type: Array
		},
		records: {
			type: Array
		}
	}
},{collection: 'indoorscene'});


indoorSceneSchema.statics.finddata = function(dorm, room, callback) {
	console.log(dorm, room)
	return indoorSceneModel.find({
		"did": dorm,
		"rid": room
	}).select("contents").exec(callback);
}

// model
var indoorSceneModel = db.model('mongoose', indoorSceneSchema, 'indoorscene');


module.exports = indoorSceneModel;