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
  (file) ->
    file._obj?[key]

obj.destroy = ->
  (file) ->
    delete file._obj

module.exports = obj
