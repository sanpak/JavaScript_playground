
// for (n = 1; n <= 100; n += 1) {
//   if (n % 5 == 0 && n % 3 ==0) {
//     console.log("FizzBuzz");
//   } else if (n % 3 == 0) {
//       console.log("Fizz");
//     } else if (n % 5 == 0 && n % 3 != 0) {
//       console.log("Buzz");
//     } else{
//       console.log(n);
//     }
// }
//version 2
// word = "";
// for (n = 1; n <= 100; n++) {
//   if (n % 3 == 0) {
//     word = "Fizz";
//     if (n % 5 == 0) {
//       word += "Buzz";
//     }
//   } else if (n % 5 == 0) {
//     word = "Buzz";
//   } else {
//     word = n;
//   }
//   console.log(word);
// }
// version2 shortcut

for (let n = 1; n <= 100; n ++){
  let word = "";
  if (n % 3 == 0) word += "Fizz";
  if (n % 5 == 0) word += "Buzz";
  console.log(word || n);
}
