/**
 * * sudo defaults write /Library/Preferences/.GlobalPreferences.plist _HIEnableThemeSwitchHotKey -bool true
 * * log out
 * * log in again
 * * toggle dark mode via ctrl + alt + cmd + t
 */
var osascript = require('node-osascript');
var shell = require('shelljs');
var os = require('os');

function osx(flag, config) {
	if (os.platform() !== 'darwin') {
		console.warn('Only MacOS is supported for os theme switching.');
		return;
	}

	var target = flag ? 'light' : 'dark';
	var current = shell.exec('defaults read -g AppleInterfaceStyle', { silent: true }).output.trim().toLowerCase();

	if (target !== current) {
		osascript.execute('tell application "System Events" to keystroke "t" using {control down, command down, option down}');
	}
}

module.exports = osx;
