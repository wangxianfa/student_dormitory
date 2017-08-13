// var fs = require('fs');
var indoorSceneModel = require('../models/indoorSceneSchema.js');


exports.showIndoorScene = (req, res) => {

	// console.log('1111')

	const dorm = Number(req.query.dorm);
	const room = Number(req.query.room);

	res.header('Access-Control-Allow-Origin', "http://localhost:8088");

	console.log(indoorSceneModel.finddata)

	indoorSceneModel.finddata(dorm, room, function (err, data) {

		console.log(data);
		res.send(data);

	})

}