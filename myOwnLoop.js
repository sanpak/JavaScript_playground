//example!!
// function countBy(items, groupName) {
//   let counts = [];
//   for (let item of items) {
//     let name = groupName(item);
//     let known = counts.findIndex(c => c.name == name);
//     if (known == -1) {
//       counts.push({name, count: 1});
//     } else {
//       counts[known].count++;
//     }
//   }
//   return counts;
// }


function loop(value,test,update,body) {
  let currentValue = value;
  while (test(currentValue)) {
    body(currentValue);
    currentValue = update(currentValue);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
