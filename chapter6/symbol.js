
// var sym1 = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(Symbol('foo') === Symbol('foo'));
// let user = {
//   name: "John"
// };
//
//
//
// let id = Symbol("id");
// user[id] = 1;
//
// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
//
// let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator.next());

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator);
console.log(okIterator.next());

let a = "John"[Symbol.iterator]();
console.log(a.next());
console.log(a.next());
