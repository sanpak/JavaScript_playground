
function reverseArray(array) {
  let newArray = [];
  for (let element of array) {
    newArray.unshift(element);
  }
  return newArray;
}
// array = [];
// array.unshift(10);
// array.unshift(11);
// console.log(array);
console.log(reverseArray([1,2,3,4]));
