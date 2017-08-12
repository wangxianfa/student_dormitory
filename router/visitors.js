

exports.saveRecords = (req, res) => {

  var body = '';

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {

    console.log(body)
    res.send(body)

  })

}