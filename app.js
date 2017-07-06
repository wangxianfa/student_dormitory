var express = require('express');
var app = express();
var router = require('./router/index.js');

app.get('/', router.showIndex);

app.listen(3000, () => {
	console.log('node服务器监听3000端口成功');
})