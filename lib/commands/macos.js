/*var os = require('os');
var shell = require('shelljs');

var macos = function(flag) {
	if (os.platform() !== 'darwin') {
		console.warn('Only MacOS is supported for theme switching.');
		return;
	}

	var theme = flag ? 'Light' : 'Dark';
	shell.exec('defaults write -g AppleInterfaceStyle ' + theme);
};

module.exports = macos;*/
