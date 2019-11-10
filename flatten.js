let array = [[1,2,3],[4,5],[6]];
let array2 = [1,2,3,4];
function flatten(array) {
  return array.reduce((a,b) => a.concat(b));
}

// console.log(typeof(flatten(array)));
console.log(flatten(array));
// console.log(typeof([1].concat([2])));
// console.log(typeof([]));
