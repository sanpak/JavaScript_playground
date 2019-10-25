function arrayToList(array) {
  let list = null;
  for (i = array.length - 1; i >= 0; i--) {

    list = {value: array[i],rest: list};
  }
  return list;
}

a = arrayToList([1,2,3,4,5,6]);
console.log(a.rest.rest.rest);
// function find(object) {
//   for (let element of object) {
//     console.log(element);
//   }
// }
//
// find(a);
