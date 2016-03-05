#js-monads-page1 

This repository is the code for an interactive online presentation available at [schalk.net](http://schalk.net). It is a brief introduction to the definition and use of the function "Monad". The definition of Monad and of three function we will use shown below.
```javascript
    var Monad = function Monad(z, g) {
      var _this = this;
    
      this.x = z;
      if (arguments.length === 1) {
        this.id = 'anonymous';
      } else {
        this.id = g;
      }
    
      this.bnd = function (func, ...args) {
         return func(_this.x, ...args);
      };
    
      this.ret = function (a) {
        window[_this.id] = new Monad(a, _this.id);
        return window[_this.id]
      };
    };
    
    var cube = function(v) {
      var mon = new Monad(v*v*v);
      return mon;
    }
    
    var add = function(a, b) {
      var mon = new Monad(a+b);
      return mon;
    }
    
    var ret = function ret(v) {
      var mon = new Monad(v);
      return mon;
    }
```
None of the functions, methods, variables, or attributes are mutated in this demonstration. The functions used by the "bnd" method return new anonymous monads. mon.ret(v) for some monad named "mon" and a value "v" returns a new monad, also named "mon", having the original mon's id and the value a (mon.x = a). It looks like mon got its value replaced, but actually the original monad named "mon" got superseded by a new monad with the same name.

Later in this series we will switch to Cycle.js, where using only pure functions and immutable data structures is standard practice.


