var users = [
	require('./users/alejandro.json'),
	require('./users/juan.json'),
	require('./users/tim.json')
];

exports.getAllUsers = function(req, res) {
	res.json(users);
};

exports.getUser = function(req, res) {
	var indexOfUser = indexOf(users, function(user) {
		return user.id == req.params.id;
	});

	res.json(users[indexOfUser]);
};

exports.insertUser = function(req, res) {
	var maxUserId = users[0].id;
	users.forEach(function(user) { 
		if (user.id > maxUserId) {
			maxUserId = user.id;
		}
	});

	var newUser = {
		id: ++maxUserId,
		name: req.params.name,
		email: req.params.email,
		age: req.params.age
	};

	users.push(newUser);

	res.json(newUser);
};

exports.updateUser = function(req, res) {
	var indexOfUser = indexOf(users, function(user) { 
		return user.id == req.params.id; 
	});

	if (indexOfUser > -1) {
		if (req.params.name) {
			users[indexOfUser].name = req.params.name;
		}

		if (req.params.email) {
			users[indexOfUser].email = req.params.email;
		}

		if (req.params.age) {
			users[indexOfUser].age = req.params.age;
		}

		res.json({ success: true });
	} else {
		res.json({ success: false });
	}
};

function indexOf(collection, predicate) {
	for (var i = 0; i < collection.length; i++) {
		if (predicate(collection[i])) {
			return i;
		}
	}
};