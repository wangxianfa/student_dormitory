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
	contents: new mongoose.Schema({
		img: {
			type: Array
		},
		records: {
			type: Array
		}
	})
});


indoorSceneSchema.statics.findData = function(dorm, room, callback) {
	return this.model('mongoose').find({
		"did": 1,
		"rid": 101
	}).select("contents").exec(callback);
}

// model
var indoorSceneModel = db.model('mongoose', indoorSceneSchema, "indoorscene");


indoorSceneModel.findData(1, 100, (err, data) => {
	console.log(data);
})



module.exports = indoorSceneModel;