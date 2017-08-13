var visitorModel = require('../models/visitorSchema')

exports.saveRecords = (req, res) => {

  var body = '';

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {

    console.log(body)

    const { visitor, dorm, room, student, sno } = JSON.parse(body)

    const condition = {
      'visitor': visitor,
      'dorm': dorm,
      'room': room,
      'student': student,
      'sno': sno,
      'inTime': convertDate(),
      'outTime': ''
    }

    console.log(condition)

    visitorModel.saveRecords(condition, (error) => {
      if (error) {
        res.send('-1')
        return
      }

      res.send('1')
    })

  })

}

exports.getRecords = (req, res) => {

  const dorm = req.query.dorm
  const room = req.query.room
  const page = Number(req.query.page)
  const limit = Number(req.query.limit)
  const orderBy = req.query.orderBy

  visitorModel.findByCondition(dorm, room, page, limit, orderBy, (err, data) => {
    if (err) {
      res.send('-1')
      return
    }
    res.send(data)
  })

}

function convertDate () {
  //  时间戳是整数，否则要parseInt转换
  var time = new Date()
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return y + '-' + convert(m) + '-' + convert(d) + '  ' + convert(h) + ':' + convert(mm) + ':' + convert(s)
}

function convert (m) {
  return m < 10 ? '0' + m : m
}