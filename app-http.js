var http = require('http');

var server = http.createServer(function(req, res) {
	// TODO: say hello to the world
});

var port = 8080;
server.listen(port, function() {
	console.log('Service is listening on port %s', port);
});