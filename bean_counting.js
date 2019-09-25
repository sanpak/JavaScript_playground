function countBs(string){
  let b = 0;
  for (let count = 0; count < string.length; count++){
    if (string[count] == "B") b += 1;
  }
  return b;
}
// console.log(countBs("BBbBC"));

function countChar(string,char) {
  let charCount= 0;
  for (let count = 0; count < string.length; count++){
    if (string[count] == char) charCount += 1;
  }
  return charCount;
}
console.log(countChar("kakkerlak","k"));
