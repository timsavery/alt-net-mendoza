module.exports = function database() {
	var users = [
		require('./users/alejandro.json'),
		require('./users/juan.json'),
		require('./users/tim.json')
	];

	this.select = function(id) {
		for (var i = 0; i < users.length; i++) {
			if (users[i].id == id) {
				console.log('returning %s', JSON.stringify(users[i]));
				return users[i];
			}
		}
	};
};