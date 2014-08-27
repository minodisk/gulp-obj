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
    return unlesmino(s(file._obj != null));
    return delete file._obj[key];
  };
};
obj.destroy = function() {
  return function(file) {
    return delete file._obj;
  };
};
obj.val = function(key) {
  return function(file) {
    if (!file._obj) {
      return;
    }
    return file._obj[key];
  };
};
obj.ok = function(key) {
  return function(file) {
    var _ref;
    return !!((_ref = file._obj) != null ? _ref[key] : void 0);
  };
};
obj.ng = function(key) {
  return function(file) {
    var _ref;
    return !!!((_ref = file._obj) != null ? _ref[key] : void 0);
  };
};
obj.equal = function(key, val) {
  return function(file) {
    var _ref;
    return ((_ref = file._obj) != null ? _ref[key] : void 0) === val;
  };
};
module.exports = obj;
