'use strict';


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Monad = function Monad(z, g) {
  var _this = this;

  _classCallCheck(this, Monad);

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
    _this.x = a;
    return _this;
  };
};

;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var MonadIter = function MonadIter(z, g) {
  var _this = this;

  _classCallCheck(this, MonadIter);

  this.x = z;
  this.id = g;
  this.flag = false;
  this.p = [];

  this.block = function () {
    _this.flag = true;
    return _this;
  };

  this.release = function () {
    var self = _this;
    var p = _this.p;
    p[0].apply(p, [self.x].concat(_toConsumableArray(p[1])));
    self.flag = false;
    return self;
  };

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var self = _this;
    if (self.flag === false) {
      func.apply(undefined, [self.x].concat(args));
      return self;
    }
    if (self.flag === true) {
      self.p = [func, args];
      return self;
    }
  };
};

var ret = function ret(v) {
  var mon = new Monad(v, 'anonymous');
  return mon;
}

var cube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var add = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
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
var MI = function MI(a, b) {
  return new MonadIter(a, b);
};

var mMI1 = MI(0, 'mMI1');
var mMI2 = MI(0, 'mMI2');
var mMI3 = MI(0, 'mMI3');
var mMI4 = MI(0, 'mMI4');
var mMI5 = MI(0, 'mMI5');
var mMI6 = MI(0, 'mMI6');

var doub = function doub(v) {
  let mon = new Monad(v + v);
  return mon;
};

var square = function square(v) {
  let mon = new Monad(v * v);
  return mon;
};

var tripple = function tripple(mon) {
  mon.ret(mon.x + mon.x + mon.x);
  return mon;
};

var mult = function mult(x, y) {
  let mon = new Monad(x * y);
  return mon;
};

var rand = function rand(a, b) {
  return Math.floor(Math.random() * (a - b)) + b;
};

var ran = function ran(mon) {
  mon.ret(Math.floor(Math.random() * -4 + 5));
  return mon;
};

var chance = function chance(mon) {
  var a = rand(1, 5);
  var b = rand(1, 5);
  var c = rand(1, 5);
  mM1.ret(a);
  mM2.ret(b);
  mM3.ret(c);
  if (a === b && a === c) {
    mM4.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mM4.ret('Pair. Try for three');
    return mon;
  }
  mM4.ret('Zilch. Don\'t give up now.');
  return mon;
};

var ch = function ch(mon, a, b, c) {
  if (a === b && a === c) {
    mon.ret('Winner! Three of a kind');
    return mon;
  }
  if (a === b || a === c || b === c) {
    mon.ret('Pair. Try for three');
    return mon;
  }
  mon.ret('Zilch. Don\'t give up now.');
  return mon;
};

var jackpot = function jackpot(mon) {
  var k = 1;
  for (k; k < 5; k += 1) {
    if (x === [k, k, k, k, k, k]) {
      mM10.ret("Jackpot!");
      return mon;
    }
  }
  mM10.ret("No jackpot time");
  return mon;
};

var cu = function cu(x) {
  return x * x * x;
};
var sq = function sq(x) {
  return x * x;
};
var du = function du(x) {
  return x * x;
};
var ad = function ad(a, b) {
  return a + b;
};
var id = function id(x) {
  return x;
};
var lo = function lo(x) {
  return console.log(x);
};

var block = function block(mon, mon2) {
  mon2.flag = true;
  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var release = function release(mon, mon2) {
  mon2.flag = false;
  console.log('***************************', mon2.id, mon2.x, mon2.flag);
  return mon;
};

var delay = function delay(mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
};


