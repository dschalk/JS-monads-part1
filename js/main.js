"use strict";
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
import cow from './cow.js';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
     
var oldVnode = document.getElementById('placeholder');


var style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '22px' };
var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '5px', marginRight: '3px',
  marginLeft: '12px', fontSize: '22px' };
var style3 = { marginTop: '40px', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '22px', textAlign: 'left' };
var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '28px' };
var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '22px' };
var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function view(m1, m2, m3, m4, m5, m6, m7, m8) { 
    return h('div',{style: style3}, 
    [  h('div',{style: { width: '65%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '24px'}}, 
    [ h('h2', {style: {textAlign: 'center', color:  '#BBFFFF'}}, 'JS Monads Part 1'),
      h('span', {style: {marginLeft: '18px'}},  'The code for this single-page site is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk/js-monads-page1'}, style: {color: '#EECCFF'}}, 'js-monads-page1' ),
    h('p', ' Here is how the Monad class is defined:'),
      cow.monad,
    h('p', 'And here are the functions we will use in this brief demonstration: '  ),  
      cow.functions1,
    h('p',' Here we create an anonymous monad with value 0 (ret(0)), add 3 to it, cube the value. We then put the value in a monad named "mM5". mM5.x is displayed in the right column. ' ), 
   h('button', {on: { mouseenter: update7e, mouseleave: update7l, click: updateDemo1 }, style: style7},
   `mM5.ret(ret(0).bnd(add,3).bnd(cube))` ),
   h('p', 'Here is another way to assign "mM5" to a new monad. '   ),
   h('button', {on: { mouseenter: update7e, mouseleave: update7l, click: updateDemo4 }, style: style7},
   `ret(0).bnd(add,3).bnd(cube).bnd(v => mM5.ret(v))` ),
   h('p', 'The following computation yields the same result: ' ),
   h('button', {on: { mouseenter: update8e, mouseleave: update8l, click: updateDemo2 }, style: style8},
  `ret(0).bnd(x => add(x,3).bnd(cube).bnd(x => mM6.ret(x)));`  ),
   h('p', 'Notice how x was handed to mM6 in the above computation. In the next computation, we send x even further down the line and combine it with mM2\'s value to get the result.'  ), 
   h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: update2 }, style: style5},
               'mM1.ret(6).bnd(x => mM2.ret(7).bnd(y => mM3.ret(x * y)))'  ),
   h('p', ' The bnd method provides the means to incorporate lambda expressions into a chain of monads. '  ),
   h('p', 'The following relationships help explain why I call Monad instances "monads": ' ),
   h('pre', 
`ret(v).bnd(f) = f(v)
ret(v).bnd(ret) = ret(v)
`
    ),
   h('p', 'They can be derived from the definitions or "ret" and "Monad". Here, we show that they hold in a specific example. The monads are distinct and not equal under "===", but 64 === 64 and "cow" === "cow". The results are placed in mM1 and mM2 respectively. '  ),
   h('button', {on: { mouseenter: update9e, mouseleave: update9l, click: updateDemo5 }, style: style9},
               `mM1.ret(ret(4).bnd(cube).x === cube(4).x)` ),
   h('br'),
   h('br'),
   h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateDemo6 }, style: style4},
               `mM2.ret(ret('cow').bnd(ret).x === ret('cow').x)`  ),
    h('p', 'The value of a monad can be any javascript value, even an object containing arrays of monads and functions. There are no limitations. For any Javascript value v and function f such that f(v) = z, there is a monad m with value v and a function f\' such that "new Monad(v).bnd(f\')" returns a monad with value z. It follows that that just about anything that is possile in javascript can be done inside the monads. For example, "ret(0).bnd(x => add(x,3).bnd(cube).bnd(x => mM6.ret(x)))" (above) is a computation in monads whose result is exposed in the final step as "mM6.x" (right column). '  ), 
      h('p', ),
      h('h3', 'Next: Websocket interractions with MonadIter instances. ' ),
      h('p', 'In the next section, "JS-monads-part2", we will see how MonadIter facilitates building chains and trees of sometimes asynchronous computations. It utilyzes a Haskell websockets server. ' ),
      h('span','The open source code for this page is at '  ),  
      h('a', {props: {href: 'https://github.com/dschalk/JS-monads-part1'}, style: {color: '#EECCFF'}}, 'JS-monads-part1' ),
      h('span', '  Demonstrations of this and the next pages in "Javascript Monads" project can be found at ',   ),
      h('a', {props: {href: 'http://schalk.net'}, style: {color: '#EECCFF'}}, 'schalk.net' ),
      h('br', ),   
      h('div', {style: {height: '300px'}} ),
   ] ), 
      h ('div',{style: { width: '20%', position: 'fixed', top: '60px', right: '15px', color: '#CCFDDA', fontSize: '26px'}},
        [
          h('br'),
          h('span', 'mM1.x: '),
          h('span', {style: styleM}, '  ' + m1),
          h('br'),
          h('span', 'mM2.x: '),
          h('span', {style: styleM}, '  ' + m2),
          h('br'),
          h('span', 'mM3.x: '),
          h('span', {style: styleM}, '  ' + m3),
          h('br'),
          h('span', 'mM4.x: '),
          h('span', {style: styleM}, '  ' + m4),
          h('br'),
          h('span', 'mM5.x: '),
          h('span', {style: styleM}, '  ' + m5),
          h('br'),
          h('span', 'mM6.x: '),
          h('span', {style: styleM}, '  ' + m6),
          h('br'),
          h('span', 'mM7.x: '),
          h('span', {style: styleM}, '  ' + m7),
          h('br'),
          h('span', 'mM8.x: '),
          h('span', {style: styleM}, '  ' + m8),
          h('br'),
          h('br'),
      h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                     'RE-SET'   )           
        ] )        
    ] )
}  

function update0() {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x);
  oldVnode = patch(oldVnode, newVnode);
}

function updateR(event) {
  mM1.ret(0);
  mM2.ret(0);
  mM3.ret(0);
  mM4.ret(0);
  mM5.ret(0);
  mM6.ret(0);
  mM7.ret(0);
  mM8.ret(0)
  .bnd(update);
}       
       
       
function update(event) {
  mM2.bnd(v => add(v,mM2,5).bnd(cube));
  update0();
}

function update2() {
  mM1.ret(6).bnd(x => mM2.ret(7).bnd(y => mM3.ret(x * y)))
  update0();
}
// ((((((((((***********************************************************

function updateDemo3() {
  mM3
  .ret(2)
  .bnd(x => mM4
  .ret(21)
  .bnd(y => mM5
  .ret(x*y)))
  update0();
}

function updateAnon() {
  new Monad(0).bnd(add,3).bnd(cube).bnd(x => mM1.ret(x))
  update0();
}

function updateDemo1 () {
  ret(0).bnd(add,3).bnd(cube).bnd(x => mM5.ret(x));
  update0();
}

function updateDemo2() {
  ret(0).bnd(x => add(x,3).bnd(cube).bnd(x => mM6.ret(x)));
  update0();
}

function updateDemo4() {
  ret(0).bnd(add,3).bnd(cube).bnd(v => mM5.ret(v))
  update0();
}

function updateDemo5() {
  let w = (ret(4).bnd(cube).x === cube(4).x);
  mM1.ret(w);
  update0();
}

function updateDemo6() {
  let w = (ret('cow').bnd(ret).x === ret('cow').x);
  mM2.ret(w);
  update0();
}

function updateDemo7() {
  mM1.bnd(val => add(mM1.x, mM1, v).bnd(cube))
  update0();
}

function updateDemo8() {
  mM1.bnd(add,1).bnd(cube)
  update0();
}

function updateDemo9() {

  update0();
}

function update3e(event) {
  style0 = style1;
  update0();
}

function update3l(event) {
  style0 = style2;
  update0();
}

function update4e(event) {
  style4 = style1;
  update0();
}

function update4l(event) {
  style4 = style2;
  update0();
}

function update5e(event) {
  style5 = style1;
  update0();
}

function update5l(event) {
  style5 = style2;
  update0();
}

function update6e(event) {
  style6 = style1;
  update0();
}

function update6l(event) {
  style6 = style2;
  update0();
}

function update7e(event) {
  style7 = style1;
  update0();
}

function update7l(event) {
  style7 = style2;
  update0();
}

function update8e(event) {
  style8 = style1;
  update0();
}

function update8l(event) {
  style8 = style2;
  update0();
}

function update9e(event) {
  style9 = style1;
  update0();
}

function update9l(event) {
  style9 = style2;
  update0();
}

function updateRe(event) {
  styleR = style1;
  update0();
}

function updateRl(event) {
  styleR = style2;
  update0();
}

oldVnode = patch(oldVnode, view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x));

var update = function update(v) {
  var mon = ret(5)
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x);
  oldVnode = patch(oldVnode, newVnode);
  return mon;
}


