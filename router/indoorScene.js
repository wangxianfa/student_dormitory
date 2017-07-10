var fs = require('fs');
var indoorSceneModel = require('../models/indoorSceneSchema.js');


exports.showIndoorScene = (req, res) => {

	const dorm = parseInt(req.query.dorm);
	const room = parseInt(req.query.room);

	res.header('Access-Control-Allow-Origin', "http://localhost:8088");

	indoorSceneModel.findData(dorm, room, (err, data) => {

		console.log(data);
		res.send(data);

	})

}