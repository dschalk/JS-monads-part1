import snabbdom from 'snabbdom';
import h from 'snabbdom/h';


const monad = h('pre', {style: {color: '#AFEEEE' }}, `  var Monad = function Monad(z, g) {
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
` );  
  
const functions1 = h('pre', {style: {color: '#AFEEEE' }}, 
`
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




export default {monad, functions1};


