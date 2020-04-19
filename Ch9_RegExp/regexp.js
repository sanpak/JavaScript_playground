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

console.log("_________exec method____________");
let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);
console.log("____________match method_____________");
console.log("one two 100".match(/\d+/));

console.log("______________subexpression group___________");
let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("She said 'hello'"));
console.log(quotedText.exec("She 'said he'llo 'John'"));
console.log("She 'said he'llo 'John'".match(quotedText));

console.log("_______________question mark___________");
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("1234"));
console.log("___________Date Class________________");
console.log(new Date());
console.log(new Date(2009,11,9));
console.log(new Date(2009,11,9,12,59,59,999));
console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387429200000));
console.log(Date.now());

console.log("_______________getDate()_________________");
function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}
function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return [_, month, day, year];
}
console.log(getDate("1-30-2003"));
console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec("1-20-3002"));
console.log(getDate("100-1-30000"));
console.log();
console.log("__________word boundaries____________");
console.log(/cat/.test("concatenate"));
console.log(/\bcat0\b/.test("cat0"));
console.log("_____________Pipe_____________");
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("2342 cow"));
console.log(animalCount.test("15 pigchickens"));
