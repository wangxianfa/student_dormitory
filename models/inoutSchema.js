const db = require('./db')
const mongoose = require('mongoose')
const convertTime = require('./convertTime')

var inoutSchema = new mongoose.Schema({
  student: {
    type: String
  },
  sno: {
    type: String
  },
  itemName: {
    type: String
  },
  dorm: {
    type: String
  },
  inORout: {
    type: Number
  },
  dateTime: {
    type: String
  },
  message: {
    type: String
  }
}, {collection: 'inout'})

inoutSchema.statics.saveInOutRecords = (student, sno, itemName, dorm, inORout, message, callback) => {

  const date_time = convertTime()
  const content = {
    'student': student,
    'sno': sno,
    'itemName': itemName,
    'dorm': dorm,
    'inORout': inORout,
    'dateTime': date_time,
    'message': message
  }

  return inoutModel.create(content, callback)

}

var inoutModel = db.model('inoutSchema', inoutSchema, 'inout')

module.exports = inoutModel;