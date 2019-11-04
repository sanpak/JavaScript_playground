let obj = {here: 1, object: {a: {b: 1}}};
let obj2 = {here: 1, object: {a: {b: 1}}};

// console.log(typeof({a:1}));

function deepEqual(ob1,ob2) {
  if (ob1 === ob2) return true;

  if (ob1 == null || typeof(ob1) != "object" || ob2 == null || typeof(ob2) != "object") return false;

      let keysA = Object.keys(ob1), keysB = Object.keys(ob2);

  if (keysA.length != keysB.length) return false;

  for (key of keysA) {
    if (!keysB.includes(key) || !deepEqual(ob1[key],ob2[key])) return false;
  }
  return true;
}















// function deepEqual(a,b) {
//   if (a === b) return true;
//
//   if (a == null || typeof a != "object" ||
//       b == null || typeof b != "object") return false;
//
//   let keysA = Object.keys(a), keysB = Object.keys(b);
//
//   if (keysA.length != keysB.length) return false;
//
//   for (let key of keysA) {
//     if (!keysB.includes(key) || !deepEqual(a[key],b[key])) return false;
//   }
//
//   return true;
// }

console.log(deepEqual(obj,obj2));


// function findValue(obj) {
//   let objkeys = Object.keys(obj);
//   let objValues = Object.values(obj);
//
//   for (let value of objValues) {
//     if (typeof(value) == "object") {
//       return findValue(value);
//     }
//   }
//   return objValues;
// }
//
// // console.log(findValue(obj1));
//
// function deepEqual(obj1,obj2) {
//   let result = true;
//   let obj1keys = Object.keys(obj1);
//   let obj2keys = Object.keys(obj2);
//   let obj1Values = Object.values(obj1);
//   let obj2Values = Object.values(obj2);
//
//   if (obj1keys.length != obj2keys.length) {
//     return false;
//   }
//   for (let i = 0; i < obj1Values.length; i++) {
//     if (typeof(obj1Values[i]) != "object" && typeof(obj2Values[i]) != "object") {
//       if (obj1Values[i] != obj2Values[i]) {
//         return false;
//       }
//     }
//   }
//   for (let i = 0; i < obj1Values.length; i++) {
//     if (typeof(obj1Values[i]) == "object" && typeof(obj2Values[i]) == "object") {
//       result = deepEqual(obj1Values[i],obj2Values[i]);
//       //test
//       // console.log(obj1Values[i],obj2Values[i]);
//     }
//
//   }
//
//   // console.log(obj1Values[0],obj2Values[0]);
//   if (obj1Values[0] != obj2Values[0]) {
//     return false;
//   }
//   return result;
// }

// console.log(deepEqual(obj1,obj2));

// console.log(JSON.parse(string).);

// console.log(findValue(obj1));

// function deepEqual(obj1,obj2){
//
//   let obj1keys = Object.keys(obj1);
//   let obj1Values = Object.values(obj1);
//   let obj2keys = Object.keys(obj2);
//   let obj2Values = Object.values(obj2);
//
//   if (obj1keys.length != obj2keys.length) {
//     return false;
//   }
//   for (let i = 0; i < obj1keys.length; i++) {
//     if (obj1keys[i] != obj2keys[i]) {
//       return false;
//     }
//   }
//   for (let i = 0; i < obj1Values.length; i++) {
//     if (obj1Values[i] != obj2Values[i]) {
//       return false;
//     }
//   }
//
//   for (let i = 0; i < obj1Values.length; i++ ) {
//     if (typeof(obj1Values[i]) == "object" && typeof(obj2Values[i]) == "object"){
//       deepEqual(obj1Values[i],obj2Values[i]);
//     } else if (typeof(obj1Values[i]) == "object" || typeof(obj2Values[i]) == "object") {
//       return false;
//     }
//   }
//   return true;
// }


// console.log(deepEqual(obj1,obj2));

// console.log(findObjValue(obj));

// function deepEqual(obj1,obj2){
//
// }

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

// console.log(deepEqual(obj,obj2));
