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
  var isReverse;
  isReverse = key.charAt(0) === '!';
  if (isReverse) {
    key = key.substr(1);
  }
  return function(file) {
    var val;
    if (!file._obj) {
      return;
    }
    val = file._obj[key];
    if (isReverse) {
      return !val;
    }
    return val;
  };
};
obj.destroy = function() {
  return function(file) {
    return delete file._obj;
  };
};
module.exports = obj;
