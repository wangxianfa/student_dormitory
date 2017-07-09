var fs = require('fs');
var healthModel = require('../models/healthSchema.js');

exports.showHealth = (req, res) => {

	const page = parseInt(req.query.page);
	const pageSize = parseInt(req.query.pageSize);
	const orderBy = req.query.orderBy;
	const dorm_filter = req.query.dorm_filter;
	const room_filter = req.query.room_filter;


	res.header('Access-Control-Allow-Origin', "http://localhost:8088");

	healthModel.findall(orderBy, dorm_filter, room_filter, page, pageSize, (err, data) => {

		if (err) {

			console.log('err');
			return;

		}
		//console.log(data)
		healthModel.countSum(dorm_filter, room_filter, (err, count) => {

			if (err) {

				return;

			}

			var newData = {
				"data": data,
				"count": count
			}

			console.log(newData)

			res.send(newData)

		})

	})

}

exports.fetchDorm = (req, res) => {

	res.header('Access-Control-Allow-Origin', "http://localhost:8088");

	healthModel.findDorm((err, data) => {
		console.log(data);
		res.send(data);
	})

}

exports.fetchRorm = (req, res) => {

	const dorm = req.query.dorm;

	res.header('Access-Control-Allow-Origin', "http://localhost:8088");

	healthModel.findRoom(dorm, (err, data) => {

		console.log(data);
		res.send(data);

	})

}