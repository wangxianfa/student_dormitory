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
}, {collection: 'users'})

loginSchema.statics.vertifyCont = (username, password, callback) => {
  const condition = {
    'nickname': username,
    'password': password
  }

  return loginModel.find(condition).exec(callback)
}

var loginModel = db.model('mongoose', loginSchema, 'users')

module.exports = loginModel;