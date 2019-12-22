let ages = {
  Boris: 39,
  Liang: 22,
  Julia: 62
};

let ages2 = new Map();
ages2.set("John", 22);
ages2.set("Petter",20);

let map = {one: true, two: true, hasOwnProperty: true};
let map2 = {one: true, two: true, three: false};
console.log(map);
console.log(map2.hasOwnProperty("one"));
console.log(ages2);

// console.log(`Julia is ${ages["Julia"]}`);
// console.log("Is Jack's age know?", "Jack" in ages);
// console.log("Is Jack's age know?", "Jack" in ages);
// console.log("John" in ages);
// console.log("toString" in ages);
// console.log(Object.getPrototypeOf("toString"));
//
// var toString = Object.prototype.toString;
// console.log(toString.call(new Date));
// console.log(Object.prototype.toString == Array.prototype.toString)
