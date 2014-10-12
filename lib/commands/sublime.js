var osascript = require('node-osascript');
var fs = require('fs');
var shell = require('shelljs');

var sublime = function(flag) {
	if (! shell.which('subl')) {
		return;
	}

	var scheme = flag ? 'light' : 'dark';
	var theme = flag ? 'Spacegray Light' : 'Spacegray';

	var configFile = process.env['HOME'] + '/Library/Application Support/Sublime Text 3/Packages/User/Preferences.sublime-settings';
	var contents = fs.readFileSync(configFile);
	var settings = JSON.parse(contents.toString('utf-8'));

	settings['color_scheme'] = 'Packages/Theme - Spacegray/base16-ocean.' + scheme + '.tmTheme';
	settings['theme'] = theme + '.sublime-theme';

	contents = JSON.stringify(settings);
	fs.writeFileSync(configFile, contents);
};

module.exports = sublime;
