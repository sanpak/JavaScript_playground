function isEven(n) {
  if (n < 0) return errorMessage();
  if (n == 1) return false;
  if (n == 0) return true;

  return isEven(n - 2);
}

function errorMessage() {
  console.log("Postive Whole number only.");
}

console.log(isEven(-10));
