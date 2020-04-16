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
// let notBinary = /[^01]/;
// console.log(notBinary.test("11000000001000000001000000001000000001000000001000000002"));
// console.log(/'\d+'/.test("'123'"));
// console.log(/'\d+'/.test("''"));
// console.log(/'\d*'/.test("'123'"));
// console.log(/'\d*'/.test("''"));
console.log("___________try star____________");
let testStar = /\d*/;
console.log(testStar.test("asdfasdf"));
console.log(/\*/.test(""));
console.log("_______try question____________");
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbor"));

console.log("________________Braces_______________");
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("1-30-2003 8:45"));

console.log("_________Grouping Subexpressions____________");
let cartoonCrying = /boo+(hoo+)+/i; //i means case insensitive
let caseSensitive = /Bo+(Ho+)+/;
console.log(cartoonCrying.test("Booohoohoo"));
console.log("__________case sensitive___________");
console.log(cartoonCrying.test("BoHooHo"));

console.log("_________match method____________");
let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);
