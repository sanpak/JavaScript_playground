// // // // // //while loop 2 to the 10th power
// // // // // let result = 1;
// // // // // let counter = 0;
// // // // //
// // // // // while (counter < 10) {
// // // // //   result *= 2;
// // // // //   counter += 1;
// // // // // }
// // // // //
// // // // // console.log(result);
// // // // let yourName;
// // // //
// // // // do {
// // // //   yourName = prompt("Who are you?");
// // // // } while (!yourName);
// // // // console.log(yourName);
// // // if (false != true) {
// // //   console.log("That makes sense.");
// // //   if (1 < 2) {
// // //     console.log("No surprise there.");
// // //   }
// // // }
// // for (let number = 0; number <= 12; number += 2){
// //   console.log(number);
// // }
// let result = 1;
// for (let counter = 0; counter < 10; counter += 1){
//   result *= 2;
// }
//
// console.log(result);
//
//
for (let current = 20; ; current += 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
switch(prompt("What is the weather like?")){
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unkonw weather type!");
    break;
}
