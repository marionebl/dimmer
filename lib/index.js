var include = require('include-all');
var pkg = require('../package.json');
var path = require('path');
var fs = require('fs');
var defaults = require('../defaults.json');
var extend = require('util-extend');
var rc = require('rc');

var config = extend(defaults, rc(pkg.name) || {});

var commands = include({
	dirname: __dirname + '/commands',
	filter: /(.*)\.js/
});

var dimmer = function(flag) {
	var state;

	if (typeof flag !== 'undefined') {
		state = flag ? 'light' : 'dark';
	} else {
		var prev = require('../state.json').current;
		state = prev === 'dark' ? 'light' : 'dark';
	}

	var stateContents = JSON.stringify({ current: state });
	fs.writeFileSync(path.resolve(__dirname, '..', 'state.json'), stateContents);

	Object.keys(commands).forEach(function(name){
		if (typeof commands[name] !== 'function' || ! config[name] || ! config[name].enabled) {
			return;
		}
		commands[name](state === 'light', config[name]);
	});
};

module.exports = dimmer;
