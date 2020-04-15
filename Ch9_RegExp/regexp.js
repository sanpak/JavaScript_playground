// console.log(/abc/.test("abcde"));
//
// console.log(/abc/.test("abxde"));
//
// console.log(/[0-9]/.test("in 1992"));
//
// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("01-30-2003 15:20"));
// console.log(dateTime.test("01-jan-2003 15"))
//
// let testReg = /\d::/;
// console.log(testReg.test("5::"));
let notBinary = /[^01]/;
console.log(notBinary.test("11000000001000000001000000001000000001000000001000000002"));
