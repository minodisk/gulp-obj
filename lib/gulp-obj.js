var obj, through;
through = require('through2');
obj = function(opts) {
  if (opts == null) {
    opts = {};
  }
  return through.obj(function(file, enc, callback) {
    file._obj = opts;
    this.push(file);
    return callback();
  });
};
obj["delete"] = function(key) {
  return function(file) {
    if (file._obj == null) {
      return;
    }
    return delete file._obj[key];
  };
};
obj.key = function(key) {
  return function(file) {
    var _ref;
    return (_ref = file._obj) != null ? _ref[key] : void 0;
  };
};
obj.destroy = function() {
  return function(file) {
    return delete file._obj;
  };
};
module.exports = obj;
