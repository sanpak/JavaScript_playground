// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }
// function repeatLog(n){
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// console.log(repeatLog(3));
function repeat(n,action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
// repeat(3, console.log);
let labels = [];
repeat(5,i => {
  labels.push(`Unit ${i+1}`);
});

// console.log(labels);


function greaterThan(n) {
  return m => m > n;
}

function noisy(f) {
  return (...args) => {
    console.log("calling with",args);
    let result = f(...args);
    console.log("called with",args,", returned",result);
    return result;
  };
}
console.log(noisy(Math.min)(3,2,1));


// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

// const square1 = (x) => { return x * x; };
// console.log(square1(2));
//
// const horn = () => {
//   console.log("Toot");
// };

// console.log(labels);
