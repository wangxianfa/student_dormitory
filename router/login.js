const loginModel = require('../models/loginSchema')
const jwt = require('jsonwebtoken')
const token = require('../config/configurable/token')

exports.doLogin = (req, res) => {

  console.log(req.headers)

  var reqBody = ''
  req.on('data', (chunk) => {
    reqBody += chunk
  })

  req.on('end', () => {

    const { username, password } = JSON.parse(reqBody)

    loginModel.vertifyCont(username, password, (err, result) => {

      if (err) {
        res.send({'code': 'E01', 'message': '登录验证失败', 'content': ''})
        return;
      }

      if (result.length === 0) {
        res.send({'code': 'S03', 'message': '用户名不存在或密码错误', 'content': ''})
        return;
      }

      // 生成token
      jwt.sign({username: username, privilgeLevel: 1}, 'wangxianfa vertify', token.options, function(err, token) {
        console.log(token)

        jwt.verify(token, 'wangxianfa vertify', function(err, decoded) {
          if (err) {
            console.log(err)
          } else {
            console.log(decoded)
          }
        })

        res.setHeader("token", token);
        res.send({'code': 'S01', 'message': '登录验证成功', 'content': token})
      });

    })

  })
}