//find the mimimun number.
function findMinimum(num1,num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

console.log(findMinimum(5,-10));
