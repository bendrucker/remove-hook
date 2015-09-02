# remove-hook [![Build Status](https://travis-ci.org/bendrucker/remove-hook.svg?branch=master)](https://travis-ci.org/bendrucker/remove-hook)

> virtual-dom hook for element remove


## Install

```
$ npm install --save remove-hook
```


## Usage

```js
var RemoveHook = require('append-hook')
var h = require('virtual-dom/h')

var vtree = h('div', {
  onRemove: RemoveHook(callback)  
})

function callback (node) {
  //=> div removed from the DOM
}
```

## API

#### `RemoveHook(callback)` -> `object`

##### callback

*Required*  
Type: `function`

A callback to call when the virtual node is removed from the DOM.


## License

MIT © [Ben Drucker](http://bendrucker.me)
