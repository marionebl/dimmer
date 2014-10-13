var path = require('path');
var shell = require('shelljs');
var os = require('os');

var terminal = function(flag, config) {
	if (os.platform() !== 'darwin') {
		console.warn('Only MacOS is supported for terminal theme switching.');
		return;
	}

	if (config.schemesEnabled) {
		var theme = flag ? config.schemeLight : config.schemeDark;
		shell.exec(path.resolve(__dirname, '../helpers/terminal.sh ' + theme));
	}
};

module.exports = terminal;
