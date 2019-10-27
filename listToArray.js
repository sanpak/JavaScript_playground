function arrayToList(array) {
  let list = null;
  for (i = array.length - 1; i >= 0; i--) {

    list = {value: array[i],rest: list};
  }
  return list;
}


function listToArray(list){
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}
// console.log(listToArray(arrayToList([1,2,3,4,5,6,7])));

function listToArrayRecursive(list,array=[]) {
  array.push(list.value);
  if (list.rest == null) {
    return list.value;
  }
  listToArrayRecursive(list.rest,array);
  return array;
}

// console.log(listToArrayRecursive(arrayToList([1,2,3,4,5])));

function prepend(element,list=null) {

  return {value: element, rest:list};
}
// console.log(prepend(10,prepend(20,null)));

function nth_rescursive(list,n){
  if (n == 0){
    return list.value;
  }
  return nth_rescursive(list.rest,n - 1);
}

function nth(list,n){
  let elements = list;
  for (i = 0; i < n; i++) {
    elements = elements.rest;
  }
  return elements.value;
}
console.log(nth(arrayToList([10, 20, 30, 40]), 0));
// console.log(nth_rescursive(arrayToList([10, 20, 30, 40]), 2));
