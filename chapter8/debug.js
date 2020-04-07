// funciton canYouSpotTheProblem() {
//   "use strict";
//   for (counter = 0; counter < 10; counter++){
//     console.log("Happy happy");
//   }
// }

// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand");
// console.log(ferdinand);
// console.log(name);
// "use strict";
// function Person(name) { this.name = name; }
// let ferdinand = Person("Ferdinand");
// // (VillageState, Array) -> {direction: string, memory: Array}
// function goalOrientedRobot(state, memory){
//   //...
// }
//test example
// function test(label, body) {
//   if (!body()) console.log('Failed: ${label}');
// }
// test("convert Latin text to uppercase",() => {
//   return "hello".toUpperCase() == "HELLO";
// });
// test("convert Greek text to uppercase",() => {
//   return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
// })
//
// test("don't convert case-less characters", () => {
//   return "مرحبا".toUpperCase() == "مرحبا";
// });
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0){
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    n = Math.floor(n / base);
  } while (n > 0);
  return sign + result;
}
console.log(numberToString(12));



function promptNumber(question) {
  let result = Number(prompt(question));
  if (Number.isNaN(result)) return null;
  else return result;
}


console.log(Number.isNaN(0/0));
console.log(promptNumber("How many tree do you see?"));
