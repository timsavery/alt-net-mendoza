var http = require('http');

var server = http.createServer(function(req, res) {
	switch (req.method) {
		case 'GET': {
			if (req.url == '/') { 
				res.end('default route');
			}
			else if (/\/[\d]+/.test(req.url)) { 
				res.end('get user route');
			}
			break;
		}
	}
});

var port = 8080;
server.listen(port, function() {
	console.log('Service is listening on port %s', port);
});