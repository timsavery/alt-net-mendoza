var restify = require('restify')
  , server = restify.createServer();

var routes = require('./app-restify-routes');

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', routes.getAllUsers);
server.get('/:id', routes.getUser);
server.post('/', routes.insertUser);
server.put('/:id', routes.updateUser);

var port = 8080;
server.listen(port, function() {
  console.log('Service is listening on port %s', port);	
});