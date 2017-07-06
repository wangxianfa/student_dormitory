var fs = require('fs');

exports.showIndex = (req, res) => {
	fs.readFile('../student_dormitory/virtualData/health.json', (err, data) => {
		if (err) {
			throw err;
		}
		res.header("Access-Control-Allow-Origin", "http://localhost:8088");
		res.send(JSON.parse(data));

	})
}