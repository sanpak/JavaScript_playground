require('./scripts.js');
// function dominantDirection(text){
//   console.log(textScripts(text));
// }
//
// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey, مساء الخير"));
// console.log("__________test_____________");
// console.log([1,2,3,4,5].map((n) => {
//   if (n > 2) return n;
// }).filter((n) => n != undefined));



// function textScripts(text) {
//   let countMax = 0;
//   let scripts = countBy(text, char => {
//     let script = characterScript(char.codePointAt(0));
//     return script ? script.direction : "none";
//   }).filter(({direction,count}) => {
//     direction != "none";
//   });
//
//   scripts.forEach(({direction,count}) => {
//     if (countMax < count) countMax = count;
//   });
//
//   return scripts;
  //return scripts.filter(({direction,count}) => countMax == count);
  // scripts.map(({direction,count}) => {
  //   if (countMax < count) countMax = count;
  // });
  // let total = scripts.reduce((n, {count}) => n + count, 0);
  // if (total == 0) return "No scripts found";
  //
  // return scripts.map(({name, count}) => {
  //   return Math.round(count * 100 / total)+ ":" + `${name}`;
  // });

// }
//
// function countBy(items,groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name,count: 1});
//     } else{
//       counts[known].count++;
//     }
//   }
//   return counts;
// }

// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));



function countBy(items,groupName){
  counts = [];
  for (let item of items) {
    let direction = groupName(item);
    let known = counts.findIndex(c => c.direction == direction );
    if (known == -1){
      counts.push({direction,count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code){
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from,to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}


function textScripts(text){
  let countMax = 0;
  let scripts = countBy(text,char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({direction}) => direction != "none");

  if (counted.length == 0) return "ltr";
  return scripts.reduce((first,next) => first.count > next.count ? first : next).direction;
}

// function findCountMax(element) {
//   let countMax = 0;
//   if (countMax < element) countMax = element;
//   return countMax;
// }
//
// console.log([1,2,3,4,5].reduce((first,next) => {return first > next ? first: next}));
console.log(textScripts("Hey, مساء الخير"));

// function characterCount(text,char){
//
// }



// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//       return code >= from && code < to;
//     })) {
//       return script;
//     }
//   }
//   return null;
// }

// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let direction = groupName(item);
//     let known = counts.findIndex(c => c.direction == direction);
//     if (known == -1) {
//       counts.push({direction, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }
