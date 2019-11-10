//version 1 with a loop
function every(array,test){
  for (let element of array) {
    if (!test(element)) return false;
  }
  return true
}
//version 2 with some method
function every2(array,test) {
  let result = true;
  array.some( function (element) {
    if (!test(element)) {
      result = false;
    }
  });
  return result;
}



function multiples2_5(n){
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (!(i % 2 == 0) && !(i % 5 == 0)){
      count ++;
    }
  }
  return count;
}

console.log(multiples2_5(1000));

console.log("every with loop");
console.log(every([1, 3, 5], n => n < 10));

console.log(every([2, 4, 16], n => n < 10));

console.log(every([], n => n < 10));

console.log("___________________________");
console.log("every2 with some method");
console.log(every2([1, 3, 5], n => n < 10));

console.log(every2([2, 4, 16], n => n < 10));

console.log(every2([], n => n < 10));
