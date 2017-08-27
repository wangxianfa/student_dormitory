const mongoose = require('mongoose')
const db = require('./db')

var loginSchema = new mongoose.Schema({
  userId: {
    type: String
  },
  nickname: {
    type: String
  },
  password: {
    type: String
  },
  token: {
    type: String
  }
}, {collection: 'user'})

loginSchema.statics.vertifyCont = (username, password) => {
  console.log(username, password)
}

var loginModel = db.model('mongoose', loginSchema, 'user')

module.exports = loginModel;