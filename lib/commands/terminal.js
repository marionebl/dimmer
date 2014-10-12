var path = require('path');
var shell = require('shelljs');
var os = require('os');

var terminal = function(flag) {
	if (os.platform() !== 'darwin') {
		console.warn('Only MacOS is supported for terminal theme switching.');
		return;
	}

	var theme = flag ? 'light' : 'dark';
	shell.exec(path.resolve(__dirname, '../helpers/terminal.sh ' + theme));
};

module.exports = terminal;
