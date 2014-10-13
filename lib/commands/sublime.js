var osascript = require('node-osascript');
var fs = require('fs');
var path = require('path');
var shell = require('shelljs');

var sublime = function(flag, config) {
	if (! shell.which('subl')) {
		return;
	}

	var configFile = path.resolve(process.env['HOME'], config.settingsPath);
	var contents = fs.readFileSync(configFile);
	var settings = JSON.parse(contents.toString('utf-8'));

	if (config.schemesEnabled) {
		settings['color_scheme'] = flag ? config.schemeLight : config.schemeDark;
	}

	if (config.themesEnabled) {
		settings.theme = flag ? config.themeLight : config.themeDark;
	}

	contents = JSON.stringify(settings);
	fs.writeFileSync(configFile, contents);
};

module.exports = sublime;
