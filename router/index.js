var fs = require('fs');
var healthModel = require('../models/healthSchema.js');

exports.showHealth = (req, res) => {

	const page = parseInt(req.query.page);
	const pageSize = parseInt(req.query.pageSize);

	healthModel.findall(page, pageSize, (err, data) => {

		if (err) {

			console.log('err');
			return;

		}
		res.header('Access-Control-Allow-Origin', "http://localhost:8088");
		//console.log(data)
		healthModel.countSum((err, count) => {

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