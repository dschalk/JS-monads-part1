import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

const monad = h('pre', {style: {color: '#AFEEEE' }}, `  class Monad {
    constructor(z,g) {

      this.x = z;
      if (arguments.length === 1) {this.id = 'anonymous'}
      else {this.id = g}

      this.bnd = (func, ...args) => {
        func(this.x, ...args);
      };

      this.ret = a => {
        var str = this.id
        if (str === 'anonymous') {return new Monad(a,'anonymous')};
        eval(str + '= new Monad(a,' + "str" + ')'); 
        return window[this.id];
      };

      this.fmap = (f, mon = this, ...args) => {      
        mon.ret( f(mon.x, ...args));
        return mon;

      };
    }
  };
` );  
  
const monadIter = h('pre', {style: {color: '#AFEEEE' }}, `  class MonadIter {
    constructor(z,g) {
      this.x = z;
      this.id = g;
      this.p = [];
      this.block = () => {
        this.x = true;
        return this;
        }
      this.release = () => {
        this.x = false;
        let self = this;
        let p = this.p;
        if (p[1] === 'bnd') {
          p[2](self.x, self, ...p[3]);
          return self;
        }
        if (p[1] === 'ret') {
          self.x = p[2];
          return self;
        }
        if (p[1] === 'fmap') { 
          p[3].ret(p[2](p[3].x, ...p[4]));
          return p[3];
        }
     }
      this.bnd = (func, ...args) => {
        let self = this;
        if (self.x === false) {
          func(self.x, ...args);
          return self;
        }
        if (self.x === true) {
          self.p = [self.id, 'bnd', func, args];
          return self;
        }
      }
      this.fmap = (f, mon = this, ...args) => {   
        let self = this;
          if (self.x === false) {
            mon.ret(f(mon.x,  ...args));
            return mon;
          }
          if (self.x === true) {
            self.p = [self.id, 'fmap', f, mon, args];
            return self;
          }
      }
    }
  }
    constructor(z,g) {

        this.x = z;
        this.id = g;
        this.flag = false;
        this.p = [];
  
        this.block = () => {
            this.flag = true;
            return this;
        }

        this.release = () => {
            let self = this;
            let p = this.p;
  
            if (p[1] === 'bnd') {
                p[2](self.x, self, ...p[3]);
                self.flag = false;
                return self;
            }
  
            if (p[1] === 'ret') {
                self.x = p[2];
                self.flag = false;
                return self;
            }
  
            if (p[1] === 'fmap') { 
                p[3].ret(p[2](p[3].x, ...p[4]));
                self.flag = false;
                return p[3];
            }
        }
    };
` );  

const steps = h('pre', {style: {color: '#AFEEEE' }}, `
    mM1.ret(0)
     .bnd(x => mM2.ret(x)
     .bnd(() => mM3.ret(0()
     .bnd(x => mM4.ret(x)
     .bnd(() => mM1.ret('Click the mMI2.release() button to proceed')
     .bnd(() => mMI2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMI2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMI2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMI2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) ))))
     update0();
` );  

const test = h('pre', {style: {color: '#AFEEEE' }}, 
`mM8.ret('test');
mM2.ret(mM8.x);
mM3.fmap(_ => mM8.x);
mM8.bnd(mM4.ret);` );  

const functions1 = h('pre', {style: {color: '#AFEEEE' }}, 
`
var cube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var add = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
}

var ret = function ret(v) {
  var mon = new Monad(v);
  return mon;
}
` );  

const lambdas  = h('pre', {style: {color: '#AFEEEE' }}, 
`
    mM3.ret(2)
     .bnd(() => mM2
     .ret(7)
     .bnd(() => mM1
     .ret(3)
     .bnd(x => mM2
     .bnd(y => mM3
     .bnd(z => mM4
     .ret(x*y*z) 
     .bnd(() => mM5.ret('Lambda!')           
        ))))))
` );  

const test3 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test4 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test5 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test6 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const test7 = h('pre', {style: {color: '#AFEEEE' }}, 
`
` );  

const next = h('div', {style: {fontSize: '28px', color: 'FFFF00'}}, 'mMI2.release()'  );


export default {monad, monadIter, steps, next, test, functions1, lambdas};



// Cows and horses.














