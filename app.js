var express = require('express');
var app = express();
var router = require('./router/index.js');
var db = require('./models/db.js');

app.get('/health', router.showHealth);

app.listen(3000, () => {
	console.log('node服务器监听3000端口成功');
})