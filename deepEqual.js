let obj = {here: {is: "an"}, object: 2};
let obj2 = {here: {is: "an"}, object: 2};


// function deepEqual(obj1,obj2) {
//   // if (typeof(obj1) != "object" || typeof(obj2) != "object" ) {
//   //   return false;
//   // }
//   //
//   // if (typeof(obj1) == "object" && obj1 != null && typeof(obj2) == "object" && obj2 != null)  {
//   //   return obj1;
//   // }
//
//
//
//   let obj1key = Object.keys(obj1);
//   let obj2key = Object.keys(obj2);
//
//   let obj1values = Object.values(obj1);
//   let obj2values = Object.values(obj2);
//
//   if (typeof(obj1) == "object") {
//     return obj1values;
//   }
//
//   if (typeof(obj1values) == "object") {
//     deepEqual(obj1values,obj2);
//   }
//
//
//
//   // if (obj1key.length == obj2key.length) {
//   //   for (let key of obj1key) {
//   //     if (!obj2key.include(key)) {
//   //       return false;
//   //     }
//   //
//   //     if (obj1.indexOf(key) != obj2.indexOf(key) {
//   //       return false;
//   //     }
//   //
//   //   }
//   // } else {
//   //   return false;
//   // }
//   //
//   // return true;
// }

console.log(deepEqual(obj,obj2));
