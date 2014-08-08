through = require 'through2'

obj = (opts = {}) ->
  through.obj (file, enc, callback) ->
    file._obj = opts
    @push file
    callback()

obj.delete = (key) ->
  (file) ->
    return unless file._obj?
    delete file._obj[key]

obj.key = (key) ->
  isReverse = key.charAt(0) is '!'
  if isReverse
    key = key.substr 1
  (file) ->
    return unless file._obj
    val = file._obj[key]
    if isReverse
      return !val
    val

obj.destroy = ->
  (file) ->
    delete file._obj

module.exports = obj
