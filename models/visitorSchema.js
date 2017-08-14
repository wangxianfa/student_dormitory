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
    // console.log(orderBy)

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

    var orderByCondition = {}

    if (orderBy === 'inTime') {
      orderByCondition = {'inTime': '-1'}
    } else if (orderBy === 'dorm') {
      orderByCondition = {'dorm': '1'}
    } else if (orderBy === 'room') {
      orderByCondition = {'room': '1'}
    }

		return visitorModel.find(condition).skip((page - 1) * limit).limit(limit).sort(orderByCondition).exec(callback);

}

visitorSchema.statics.saveRecords = function (condition, callback) {

  return (new visitorModel(condition)).save(callback)

}

visitorSchema.statics.getRoomByDorm = function (dorm, callback) {
  let condition = {}
  if (dorm !== '') {
    condition = {'dorm': dorm}
  }
  return visitorModel.find(condition).select('room').exec(callback)
}

visitorSchema.statics.getDorm = function (callback) {
  return visitorModel.find({}).select('dorm').exec(callback)
}

// model
var visitorModel = db.model('mongoose', visitorSchema, 'visitors');



module.exports = visitorModel;