const express = require('express');
const app = express();
const serverConfig = require('./config/serverConfig');

const router = require('./router/index.js');
const indoorScene = require('./router/indoorScene.js');
const db = require('./models/db.js');
const visitors = require('./router/visitors')
const inout = require('./router/inout')

app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', "*");
		next();
})

app.get('/health/fetchdorm', router.fetchDorm);
app.get('/health/fetchroom', router.fetchRorm);
app.get('/health', router.showHealth);

// 访客管理
app.get('/indoorScene', indoorScene.showIndoorScene);
app.post('/visitor/saverecords', visitors.saveRecords);
app.get('/visitor/getrecords', visitors.getRecords);
app.get('/visitor/getdorm', visitors.getDorm);
app.get('/visitor/getroombydorm', visitors.getRoomByDorm);

// 出入管理
app.post('/inout/saveinoutrecord',inout.saveInOutRecords);



app.listen(serverConfig.port, serverConfig.host, () => {
	console.log('node服务器监听3000端口成功');
})