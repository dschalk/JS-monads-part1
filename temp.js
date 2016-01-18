'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Monad = function Monad(z) {
  var _this = this;

  _classCallCheck(this, Monad);

  this.x = z;

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.apply(undefined, [_this.x].concat(args));
  };

  this.ret = function (a) {
    _this.x = a;
    return _this;
  };

  this.fmap = function (f) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this : arguments[1];

    mon.ret(f.apply(undefined, [mon.x].concat(args)));
    return mon;
  };
};

;

var MonadIter = function MonadIter(z, g) {
  var _this2 = this;

  _classCallCheck(this, MonadIter);

  this.x = z;
  this.id = g;
  this.p = [];
  this.block = function () {
    _this2.x = true;
    return _this2;
  };
  this.release = function () {
    _this2.x = false;
    var self = _this2;
    var p = _this2.p;
    if (p[1] === 'bnd') {
      p[2].apply(p, [self.x, self].concat(_toConsumableArray(p[3])));
      return self;
    }
    if (p[1] === 'ret') {
      self.x = p[2];
      return self;
    }
    if (p[1] === 'fmap') {
      p[3].ret(p[2].apply(p, [p[3].x].concat(_toConsumableArray(p[4]))));
      return p[3];
    }
  };
  this.bnd = function (func) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var self = _this2;
    if (self.x === false) {
      func.apply(undefined, [self.x].concat(args));
      return self;
    }
    if (self.x === true) {
      self.p = [self.id, 'bnd', func, args];
      return self;
    }
  };
  this.fmap = function (f) {
    for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
      args[_key4 - 2] = arguments[_key4];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this2 : arguments[1];

    var self = _this2;
    if (self.x === false) {
      mon.ret(f.apply(undefined, [mon.x].concat(args)));
      return mon;
    }
    if (self.x === true) {
      self.p = [self.id, 'fmap', f, mon, args];
      return self;
    }
  };
  this.ret = function (a) {
    var self = _this2;
    if (self.x === false) {
      self.x = a;
    }
    if (self.x === true) {
      self.p = [self.id, 'ret', a];
      return self;
    }
    _this2.x = false;
    return _this2;
  };
};
