var express = require('express');
var app = express();
var router = require('./router/index.js');
var indoorScene = require('./router/indoorScene.js');
var db = require('./models/db.js');

app.get('/health/fetchdorm', router.fetchDorm);
app.get('/health/fetchroom', router.fetchRorm);
app.get('/health', router.showHealth);
app.get('/indoorScene', indoorScene.showIndoorScene);

app.listen(3000, () => {
	console.log('node服务器监听3000端口成功');
})