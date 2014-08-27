through = require 'through2'

obj = (opts = {}) ->
  through.obj (file, enc, callback) ->
    file._obj = opts
    @push file
    callback()

obj.delete = (key) ->
  (file) ->
    return unlesmino  s file._obj?
    delete file._obj[key]

obj.destroy = ->
  (file) ->
    delete file._obj

obj.val = (key) ->
  (file) ->
    return unless file._obj
    file._obj[key]

obj.ok = (key) ->
  (file) ->
    !!file._obj?[key]

obj.ng = (key) ->
  (file) ->
    !!!file._obj?[key]

obj.equal = (key, val) ->
  (file) ->
    file._obj?[key] is val

module.exports = obj
