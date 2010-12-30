## jQuery Plugin Development

### Outline

* Not every plugin should be done in jQuery
* Standard Javascript is suitable for many cross-browser plugins
  - Show code to create a single interface to `console` across all browsers
* Advantages of using jQuery is cross-browser consistency
  - DOM manipulation
  - Ajax
  - Events
* Standard interface for plugin development

### Chainability
* `return this` should always be the last statement
* Manipulate DOM post plugin initialization

### Options
* Ensure all options have defaults
* Demo power of extend

### Use callbacks
* Don't force user to pass in options
* Demo power of isFunction

### Improve plugin using onTimer
* Runs continuously
* Maintains low memory footprint

### Info post plugin loading
* Load other plugin dependent on this plugin
* Since every plugin should return self, we need another way to get info
* Fire a custom event
* Especially useful for plugins which load themselves via a remote location and writ themselves into the DOM (i.e. Facebook)
