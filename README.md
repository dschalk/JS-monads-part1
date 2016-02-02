#JS-monads-part1 

This repository is the code for an interactive online presentation available at [schalk.net](http://schalk.net). It is a brief introduction to the use of instances of the monad constructor "Monad" with the three functions shown below. 

  class Monad {
    var _this = this;
    constructor(z,g) {

      this.x = z;
      if (arguments.length === 1) {this.id = 'anonymous'}
      else {this.id = g}

      this.bnd = function (func, ...args) {
        return func(_this.x, ...args);
      };

      this.ret = function (a) {
        _this.x = a;
        return _this;
      };
    }
  };

  var cube = function(v) {
    var mon = new Monad(v, "v");
    return mon;
  }
  
  var add = function(a,b) {
    var mon = new Monad(a + b);
    return mon;
  }
  
  var ret = function ret(v) {
    var mon = new Monad(v);
    return mon;
  }
