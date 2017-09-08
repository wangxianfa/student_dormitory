const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const serverConfig = require('./config/serverConfig')
const expressJwt = require('express-jwt')
const tokenConfig = require('./config/configurable/token')

const router = require('./router/index.js')
const indoorScene = require('./router/indoorScene.js')
const visitors = require('./router/visitors')
const inout = require('./router/inout')
const login = require('./router/login')

const vertifyIgnore = ['/login', '/health', '/health/fetchdorm', '/health/fetchroom'];

app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressJwt({secret:'wangxianfa vertify'}).unless({path: vertifyIgnore}))

app.use((err ,req, res, next) => {
	if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token");
  }
})

app.all('*', (req, res, next) => {
		res.header('Access-Control-Allow-Origin', "*");
		res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
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

// 登录
app.post('/login', login.doLogin);



app.listen(serverConfig.port, serverConfig.host, () => {
	console.log('node服务器监听3000端口成功');
})