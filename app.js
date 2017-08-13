const express = require('express');
const app = express();
const serverConfig = require('./config/serverConfig');

const router = require('./router/index.js');
const indoorScene = require('./router/indoorScene.js');
const db = require('./models/db.js');
const visitors = require('./router/visitors')

app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', "http://localhost:8088");
		next();
})

app.get('/health/fetchdorm', router.fetchDorm);
app.get('/health/fetchroom', router.fetchRorm);
app.get('/health', router.showHealth);
app.get('/indoorScene', indoorScene.showIndoorScene);
app.post('/visitor/saverecords', visitors.saveRecords);
app.get('/visitor/getrecords', visitors.getRecords);



app.listen(serverConfig.port, serverConfig.host, () => {
	console.log('node服务器监听3000端口成功');
})