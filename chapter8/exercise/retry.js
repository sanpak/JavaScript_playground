class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a,b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}
//iterative method
// function reliableMultiply(a,b) {
//   for (;;) {
//     try{
//       return primitiveMultiply(a,b);
//       break;
//     } catch (e) {
//       if (e instanceof MultiplicatorUnitFailure) {
//         console.log("Something wrong, " + e);
//       } else {
//         throw console.log("Something wrong " + e);
//       }
//     }
//   }
// }




//recursion
function reliableMultiply(a,b) {
  try {
    return primitiveMultiply(a,b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      console.log("something wrong , " + e);
    } else {
      throw e;
    }
    return reliableMultiply(a,b);
  }
}
console.log(reliableMultiply(2,3));

// function reliableMultiply(a, b) {
//   if (primitiveMultiply(a,b))
// }
