require('./scripts.js');
function filter(array,test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// console.log(filter(SCRIPTS,script => script.living));
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

function map(array,transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));

function reduce(array,combine,start){
  let current = start;
  for (let element of array) {
    current = combine(current,element);
  }
  return current;
}

function characterCount(script) {
  return script.ranges.reduce((count,[from,to]) => {
    return count + (to - from);
  }, 0);
}

// console.log(2 < 1 ? "yes":"no");

let biggest = null;
for (let script of SCRIPTS) {
  if (biggest == null ||
      characterCount(biggest) < characterCount(script)) {
        biggest = script;
      }
}

console.log(biggest);

function average(array) {
  return array.reduce((a,b) => a + b) /array.length;
}

console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));

let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));



// console.log(characterScript(121));

// let horseShoe = "🐴👟";
// console.log(horseShoe.length);
// console.log(horseShoe[0]);
// console.log(horseShoe.charCodeAt(0));
// console.log(horseShoe.codePointAt(0));
//
// let testChar = "👟";
// console.log(testChar.length);
// console.log(testChar[0]);
// console.log(testChar.charCodeAt(0));
// console.log(testChar.codePointAt(0));

let roseDragon = "🌹🐉";
console.log(roseDragon.charCodeAt(0));
console.log(roseDragon.codePointAt(0));

for (let char of roseDragon) {
  console.log(char);
}

function countBy(items,groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name,count:1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function isPrime(element,index,array){
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start < 1){
      return false;
    } else {
      start ++;
    }
  }
  return element > 2;
}
console.log([4,6,8,12].findIndex(isPrime));
console.log([4,3,7,12].findIndex(isPrime));

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let know = counts.findIndex(c => c.name == name);
    if (know == -1) {
      counts.push({name,count:1});
    } else {
      counts[know].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from,to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  });

  return scripts;
  // let total = scripts.reduce((n,{count}) => n + count, 0 );
  // if (total == 0) return "no scripts found";
  //
  // return scripts.map(({name,count}) => {
  //   return `${Math.round(count * 100 / total)}% ${name}`;
  // }).join(",");
}

console.log(textScripts('英国的狗说"woof'));



// console.log()
//
//
// console.log(reduce([1,2,3,4],(a,b) => a + b, 0));

// // // for (let i = 0; i < 10; i++) {
// // //   console.log(i);
// // // }
// // function repeatLog(n){
// //   for (let i = 0; i < n; i++) {
// //     console.log(i);
// //   }
// // }
// // console.log(repeatLog(3));
// function repeat(n,action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }
// // repeat(3, console.log);
// let labels = [];
// repeat(5,i => {
//   labels.push(`Unit ${i+1}`);
// });
//
// // console.log(labels);
//
//
// function greaterThan(n) {
//   return m => m > n;
// }
//
// function noisy(f) {
//   return (...args) => {
//     console.log("calling with",args);
//     let result = f(...args);
//     console.log("called with",args,", returned",result);
//     return result;
//   };
// }
// console.log(noisy(Math.min)(3,2,1));
//
// function unless(test,then) {
//   if (!test) then();
// }
//
// repeat(3,n => {
//   unless(n % 2 == 1, () => {
//     console.log(n, "is even");
//   });
// });
//
// ["A","B"].forEach(l => console.log(l));
//
//
//
// // let greaterThan10 = greaterThan(10);
// // console.log(greaterThan10(11));
//
// // const square1 = (x) => { return x * x; };
// // console.log(square1(2));
// //
// // const horn = () => {
// //   console.log("Toot");
// // };
//
// // console.log(labels);
