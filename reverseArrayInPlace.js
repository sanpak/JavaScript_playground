//cheating
// function reverseArrayInPlace(array) {
//   transferHold = array.splice(0,array.length-1);
//   while (transferHold.length > 0) {
//     array.push(transferHold.pop());
//   }
//   console.log(array);
//
// }
// reverseArrayInPlace([1,2,3,4]);
// array = [1,2,3,4,5,6,7,8];
function reverseArrayInPlace(array) {
  let middle = Math.floor(array.length / 2);
  let temp = 0;
  for (let i = 0; i < middle; i++) {
    temp = array[i];
    array[i] = array[(array.length - 1) - i];
    array[(array.length - 1) - i] = temp;
  }
  console.log(array);
}

reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10]);
