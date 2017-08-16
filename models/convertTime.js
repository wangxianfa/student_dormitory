module.exports = () => {
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