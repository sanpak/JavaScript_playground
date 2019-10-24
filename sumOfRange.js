function range(start,end) {
  let rangeArray = [];
  while (start <= end) {
    rangeArray.push(start);
    start ++;
  }
  return rangeArray;
}

function rangeMod(start,end,step = 1) {
  let array = [];
  if (start < end) {
    while (start <= end) {
      array.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      array.push(start);
      start += step;
    }
  }
  return array;
}
// console.log(range(1,10));

function sum(arrayNumbers) {
  let sum = 0;
  for (let number of arrayNumbers) {
    sum += number;
  }
  return sum;
}
// console.log(sum([1,2,3]));
// console.log(sum(range(1,10)));
console.log(rangeMod(5,2,-1));
