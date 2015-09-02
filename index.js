'use strict'

var Hook = require('virtual-hook')
var nextTick = require('next-tick')
var partial = require('ap').partial
var document = require('global/document')

module.exports = RemoveHook

function RemoveHook (callback) {
  return Hook({
    unhook: function unhook (node) {
      if (document.body.contains(node)) return
      nextTick(partial(callback, node))
    }
  })
}
