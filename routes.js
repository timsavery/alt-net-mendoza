var users = [
	require('./users/alejandro.json'),
	require('./users/juan.json'),
	require('./users/tim.json')
];

exports.getAllUsers = function(req, res) {
	res.json(users);
};

exports.getUser = function(req, res) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == req.params.id) {
			return res.json(users[i]);
		}
	}

	res.json({});
};

exports.insertUser = function(req, res) {
	var maxId = users[0].id;
	for (var i = 0; i < users.length; i++) {
		if (users[i].id > maxId) {
			maxId = users[i].id;
		}
	}

	var newUser = {
		id: ++maxId,
		name: req.params.name,
		email: req.params.email,
		age: req.params.age
	};

	users.push(newUser);

	res.json(newUser);
};

exports.updateUser = function(req, res) {
	var userIndex = -1;
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == req.params.id) {
			userIndex = i;
			break;
		}
	}

	if (userIndex < 0) {
		return res.json({ 
			success: false,
			message: 'User with id #' + req.params.id + ' not found.'
		});
	}

	if (req.params.name) {
		users[userIndex].name = req.params.name;
	}

	if (req.params.email) {
		users[userIndex].email = req.params.email;
	}

	if (req.params.age) {
		users[userIndex].age = req.params.age;
	}

	res.json({
		success: true
	});
};

exports.deleteUser = function(req, res) {
	var userIndex = -1;
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == req.params.id) {
			userIndex = i;
			break;
		}
	}

	if (userIndex < 0) {
		return res.json({
			success: false,
			message: 'User with id #' + req.params.id + ' not found.'
		});
	}

	delete users[userIndex];

	res.json({ success: true });
};