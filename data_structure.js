// let listOfNumbers = [2,3,5,7,11];
// console.log(listOfNumbers[2]);
// console.log(listOfNumbers[0]);
// console.log(listOfNumbers[2 - 1]);
//
// console.log(null.length);
// let doh = "Doh";
// console.log(typeof doh.toUpperCase);

let day1 = {
  squirrel: false,
  events: ["work","touched tree","pizza","running"]
};

console.log(day1["events"]);

// for (let counter = 0; counter < day1.length; counter++){
//   console.log(day1[counter])
// }
let descriptions = {
  work: "Went to work",
  "touch tree": "Touched a tree"
};
console.log(descriptions["\"touch tree\""]);
let anObject = {left:1, right:2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject);
console.log("left" in anObject);
console.log("right" in anObject);
console.log(Object.keys(day1));
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b:3,c:4});
console.log(objectA);
