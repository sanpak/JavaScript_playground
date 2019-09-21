// // // // // // // const square = function(x) {
// // // // // // //   return x * x;
// // // // // // // }
// // // // // // //
// // // // // // // console.log(square(2));
// // // // // // // const makeNoise = function(){
// // // // // // //   console.log("Pling!");
// // // // // // // };
// // // // // // // makeNoise();
// // // // // // // const power = function(base,exponent){
// // // // // // //   let result = 1;
// // // // // // //   for (let count = 0; count < exponent; count++) {
// // // // // // //     result *= base;
// // // // // // //   }
// // // // // // //   return result;
// // // // // // // };
// // // // // // // console.log(power(2,10));
// // // // // // // let x = 10;
// // // // // // // if(true) {
// // // // // // //   let y = 20;
// // // // // // //   var z = 30;
// // // // // // //   console.log(x + y +z);
// // // // // // // }
// // // // // // // console.log(x+ z);
// // // // // // //
// // // // // // // const halve = function(n) {
// // // // // // //   return n /2;
// // // // // // // };
// // // // // // // let n = 10;
// // // // // // // console.log(halve(100));
// // // // // // // console.log(n);
// // // // // // const hummus = function(factor) {
// // // // // //   const ingredient = function(amount,unit,name){
// // // // // //     let ingredientAmount = amount * factor;
// // // // // //     if (ingredientAmount > 1){
// // // // // //       unit += "s";
// // // // // //     }
// // // // // //     console.log(`${ingredientAmount} ${unit} ${name}`);
// // // // // //   };
// // // // // //   ingredient(1,"can","chcikpea");
// // // // // //   ingredient(0.25,"cup","tahini");
// // // // // //   ingredient(0.25,"cup","lemon juice");
// // // // // //   ingredient(1,"clove","garlic");
// // // // // //   ingredient(2,"tablespoon","olive oil");
// // // // // // }
// // // // // // hummus(2)
// // // // //
// // // // // let launchMissiles = function(){
// // // // //   missileSystem.lauch("now");
// // // // // };
// // // // //
// // // // // if (safeMode){
// // // // //   launchMissiles = function(){/* do nothing */};
// // // // // }
// // // // //Declaration Notation
// // // // // function square(x) {
// // // // //   return x*x;
// // // // // }
// // // // // console.log(square(2));
// // // //
// // // // console.log("The future says:", future());
// // // // function future(){
// // // //   return "You'll never have flying cars";
// // // // }
// // // //Arrow function
// // // const power = (base,exponent) => {
// // //   let result = 1;
// // //   for (let count = 0; count < exponent; count++){
// // //     result *= base;
// // //   }
// // //   return result;
// // // }
// // //
// // // console.log(power(2,3));
// // // const square1 = (x) => { return x * x };
// // // const square2 = x => x * x;
// // // console.log(square2(3));
// // // console.log(square1(10));
// //
// // // function greet(who) {
// // //   console.log("hello " + who);
// // // }
// // //
// // // greet("Harray");
// // // console.log("Bye");
// // // function square(x) {return x * x; }
// // // console.log(square(4,true,"hedgehog"));
// // //
// // //
// // // function minus(a,b) {
// // //   if (b === undefined) return -a;
// // //   else return a - b;
// // // }
// // // console.log(minus(10));
// // // console.log(minus(3,2));
// // // function power(base, exponent = 2) {
// // //   let result = 1;
// // //   for (let count = 0; count < exponent; count++){
// // //     result *= base;
// // //   }
// // //   return result;
// // // }
// // // console.log(power(2));
// // // function wrapValue(n){
// // //   let local = n;
// // //   return () => local;
// // // }
// // // let test1 = wrapValue(1);
// // // let test2 = wrapValue(3);
// // // console.log(test1());
// // // console.log(test2());
// //
// // // function multiplier(factor){
// // //   return number => number * factor;
// // // }
// // // let multipy = multiplier(3);
// // // console.log(multipy(2));
// //
// // //RECURSION
// // function power(base,exp) {
// //   if (exp == 0) return 1;
// //
// //   return base * power(base,exp - 1);
// // }
// // console.log(power(2,4));
//
// function findSolution(target) {
//   function find(current, history){
//     if (current == target) {
//       return history;
//     } else if (current > target){
//       return null;
//     }
//     return find(current + 5, `(${history} + 5)`) || find(current * 3,`(${history} *3)`);
//   }
//   return find(1,"1");
// }
// console.log(findSolution(62));
//Growing funciton
function printFarmInventory(cows,chickens){
  let cowString = String(cows);
  while (cowString.length < 3){
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3){
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} chickens`);
}

printFarmInventory(7,11);
