const inoutModel = require('../models/inoutSchema')


exports.saveInOutRecords = (req, res) => {

  var body = ''

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {

    const { student, sno, itemName, dorm, inORout, message } = body

    if (student && sno && itemName && dorm && inORout) {

      inoutModel.saveInOutRecords(student, sno, itemName, dorm, inORout, message, (err, data) => {
        if (err) {
          res.send('-1')
          return;
        }

        console.log(data)
        res.send(data)

      })

    } 
    else {
      res.send('数据格式错误！')
    }

  })

}