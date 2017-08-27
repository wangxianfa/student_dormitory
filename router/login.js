const loginModel = require('../models/loginSchema')

exports.doLogin = (req, res) => {

  // console.log(req.body)
  // res.send('1')

  var reqBody = ''
  req.on('data', (chunk) => {
    reqBody += chunk
  })

  req.on('end', () => {

    console.log(JSON.parse(reqBody))

    res.send('1')
  })
}