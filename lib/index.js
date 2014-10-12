var include = require('include-all');

var commands = include({
	dirname: __dirname + '/commands',
	filter: /(.*)\.js/
});

var dimmer = function(flag) {
	Object.keys(commands).forEach(function(name){
		if (typeof commands[name] !== 'function') {
			return;
		}
		commands[name](flag);
	});
};

module.exports = dimmer;
