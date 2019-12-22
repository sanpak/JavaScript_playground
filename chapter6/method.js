let map = {one: true, two: true, hasOwnProperty: "1"};
// console.log(Object.prototype.toString.call(map.hasOwnProperty));
// let test = Object.create(map);
// console.log(test);
// Object.prototype.hasOwnProperty = function() {
//   console.log("abc");
// }
// console.log(Object.prototype.hasOwnProperty());
// console.log(map.hasOwnProperty("one"));
console.log(({}).hasOwnProperty.call(map,"one"));
console.log(Object.prototype.hasOwnProperty.call(map,"one"));
