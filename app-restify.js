var restify = require('restify')
  , server = restify.createServer()
  , routes = require('./routes');

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

var port = 8080;
server.listen(port, function() {
  console.log('Service is listening on port %s', port);	
});