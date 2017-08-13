var mongoose = require('mongoose');
var db = require('./db.js');

// Schema 结构
var visitorSchema = new mongoose.Schema({
	visitor: {
		type: String
	},
	dorm: {
		type: String
	},
	room: {
		type: String
	},
	student: {
		type: String
	},
	sno: {
		type: String
  },
  inTime: {
    type: String
  },
  outTime: {
    type: String
  }
},{collection: 'visitors'});

visitorSchema.statics.findByCondition = function (dorm, room, page, limit, orderBy, callback) {
    var condition;

    if (dorm && !room) {

      condition = {
        'dorm': dorm
      }

    } else if (!dorm && !room) {

      condition = {}

    } else if (!dorm && room) {

      condition = {
        'room': room
      }

    } else {

      condition = {
        'dorm': dorm,
        'room': room
      }

    }

		return visitorModel.find(condition).skip((page - 1) * limit).limit(limit).sort({orderBy: -1}).exec(callback);

}

visitorSchema.statics.saveRecords = function(condition, callback) {

  return (new visitorModel(condition)).save(callback)

}

// model
var visitorModel = db.model('mongoose', visitorSchema, 'visitors');



module.exports = visitorModel;