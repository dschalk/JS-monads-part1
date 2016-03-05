'use strict';


function _classCallCheck(instance, Constructor) { 
  if (!(instance instanceof Constructor)) { 
    throw new TypeError('Cannot call a class as a function'); 
  } 
}

var Monad = function Monad(z, g) {
  var _this = this;

  this.x = z;
  if (arguments.length === 1) {
    this.id = 'anonymous';
  } else {
    this.id = g;
  }

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, [_this.x].concat(args));
  };

  this.ret = function (a) {
    window[_this.id] = new Monad(a, _this.id);
    return window[_this.id];
  };
};

;

var cube = function(v) {
  return new Monad(v*v*v);
}

var add = function(a, b) {
 return new Monad(a+b);
}

var ret = function ret(v) {
  return new Monad(v);
}

var M = function M(a,b) {
  return new Monad(a,b);
};


var mM1 = M(0,'mM1');
var mM2 = M(0,'mM2');
var mM3 = M(0,'mM3');
var mM4 = M(0,'mM4');
var mM5 = M(0,'mM5');
var mM6 = M(0,'mM6');
var mM7 = M(0,'mM7');
var mM8 = M(0,'mM8');
var mM9 = M(0,'mM9');
var mM10 = M(0,'mM10');

var doub = function doub(id, v) {
  let mon = new Monad(v + v, id);
  return mon;
};

var square = function square(id, v) {
  let mon = new Monad(v * v, id);
  return mon;
};

var mult = function mult(id, x, y) {
  let mon = new Monad(x * y, id);
  return mon;
};

