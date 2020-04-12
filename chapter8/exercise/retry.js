class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a,b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
//iterative method
function reliableMultiply(a,b) {
  for (;;) {
    try{
      let result = primitiveMultiply(a,b);
      return result;
      break;
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.log("Something wrong, " + e);
      } else {
        throw console.log("Something wrong " + e);
      }
    }
  }
}

console.log(reliableMultiply(2,3));


//recursion
function reliableMultiply(a,b) {
  try {
    return primitiveMultiply(a,b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log("something wrong , " + e);
      reliableMultiply(a,b);
    } else {
      throw e;
    }
  }


}


// function reliableMultiply(a, b) {
//   if (primitiveMultiply(a,b))
// }
