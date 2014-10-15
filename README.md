dimmer
======

Simple dark/light theme switcher.

### Installation
* `npm install -g marionebl/dimmer`

### Usage
* `dimmer up` - Show light themes
* `dimmer down` - Show dark themes
* `dimmer` - Toggle themes

### Configuration
* See some detailed documentation here, soon.
* For each command:

```js
{
  "sublime": {
    "enabled": true, // if the command should be executed
    "schemesEnabled": true, // if scheme toggleing should be executed
    "schemeDark": "Packages/Theme - Spacegray/base16-ocean.dark.tmTheme",
    "schemeLight": "Packages/Theme - Spacegray/base16-ocean.light.tmTheme",
    "themesEnabled": true, // if theme toggleing should be executed
    "themeDark": "Spacegray.sublime-theme",
    "themeLight": "Spacegray Light.sublime-theme"
  }
}
```

* Put stuff into `~/.dimmerrc/config` and `~/.dimmerrc/commands`. See [default.json][1] and [lib/commands][2] for reference.

[1]: https://github.com/marionebl/dimmer/blob/master/defaults.json
[2]: https://github.com/marionebl/dimmer/tree/master/lib/commands
