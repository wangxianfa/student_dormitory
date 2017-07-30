/**
 * ajax封装
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
exports.ajax = function ajax(config) {

	var ajaxConfig = {
		"url": config.url,
		"method": config.method || 'GET',
		"async": config.async || true,
		"data": config.data || ''
	}

	//console.log(ajaxConfig)

	var xhr;

	if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xhr = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.open(ajaxConfig.method, ajaxConfig.url, ajaxConfig.async);


	if (ajaxConfig.method === 'GET') {

		xhr.send();


	} else if (ajaxConfig.method === 'POST') {

		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(ajaxConfig.data);

	}


	return new Promise(function(resolve, reject) {

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {

				if (xhr.status === 200) {

					resolve(xhr.responseText);

				} else {

					reject(new Error(xhr.status));

				}


			}

		}
	});

}
