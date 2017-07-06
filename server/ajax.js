/**
 * ajax封装
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
exports.ajax = function ajax(config) {

	var url = config.url,
		method = config.method || 'GET',
		async = config.async || true,
		data = config.data || '';

	console.log(url)

	var xhr;

	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xhr = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.open(method, url, async);


	if (method === 'GET') {

		xhr.send();


	} else if (method === 'POST') {

		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);

	}


	return new Promise(function(resolve, reject) {

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4 && xhr.status === 200) {

				var response = JSON.parse(xhr.responseText);
				resolve(response);

			} else {

				reject(new Error(xhr.status))

			}

		}
	});

}