// // // // // const square = function(x) {
// // // // //   return x * x;
// // // // // }
// // // // //
// // // // // console.log(square(2));
// // // // // const makeNoise = function(){
// // // // //   console.log("Pling!");
// // // // // };
// // // // // makeNoise();
// // // // // const power = function(base,exponent){
// // // // //   let result = 1;
// // // // //   for (let count = 0; count < exponent; count++) {
// // // // //     result *= base;
// // // // //   }
// // // // //   return result;
// // // // // };
// // // // // console.log(power(2,10));
// // // // // let x = 10;
// // // // // if(true) {
// // // // //   let y = 20;
// // // // //   var z = 30;
// // // // //   console.log(x + y +z);
// // // // // }
// // // // // console.log(x+ z);
// // // // //
// // // // // const halve = function(n) {
// // // // //   return n /2;
// // // // // };
// // // // // let n = 10;
// // // // // console.log(halve(100));
// // // // // console.log(n);
// // // // const hummus = function(factor) {
// // // //   const ingredient = function(amount,unit,name){
// // // //     let ingredientAmount = amount * factor;
// // // //     if (ingredientAmount > 1){
// // // //       unit += "s";
// // // //     }
// // // //     console.log(`${ingredientAmount} ${unit} ${name}`);
// // // //   };
// // // //   ingredient(1,"can","chcikpea");
// // // //   ingredient(0.25,"cup","tahini");
// // // //   ingredient(0.25,"cup","lemon juice");
// // // //   ingredient(1,"clove","garlic");
// // // //   ingredient(2,"tablespoon","olive oil");
// // // // }
// // // // hummus(2)
// // //
// // // let launchMissiles = function(){
// // //   missileSystem.lauch("now");
// // // };
// // //
// // // if (safeMode){
// // //   launchMissiles = function(){/* do nothing */};
// // // }
// // //Declaration Notation
// // // function square(x) {
// // //   return x*x;
// // // }
// // // console.log(square(2));
// //
// // console.log("The future says:", future());
// // function future(){
// //   return "You'll never have flying cars";
// // }
// //Arrow function
// const power = (base,exponent) => {
//   let result = 1;
//   for (let count = 0; count < exponent; count++){
//     result *= base;
//   }
//   return result;
// }
//
// console.log(power(2,3));
// const square1 = (x) => { return x * x };
// const square2 = x => x * x;
// console.log(square2(3));
// console.log(square1(10));

// function greet(who) {
//   console.log("hello " + who);
// }
//
// greet("Harray");
// console.log("Bye");
