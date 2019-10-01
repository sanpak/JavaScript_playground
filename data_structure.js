// // // // let listOfNumbers = [2,3,5,7,11];
// // // // console.log(listOfNumbers[2]);
// // // // console.log(listOfNumbers[0]);
// // // // console.log(listOfNumbers[2 - 1]);
// // // //
// // // // console.log(null.length);
// // // // let doh = "Doh";
// // // // console.log(typeof doh.toUpperCase);
// // //
// // // let day1 = {
// // //   squirrel: false,
// // //   events: ["work","touched tree","pizza","running"]
// // // };
// // //
// // // console.log(day1["events"]);
// // //
// // // // for (let counter = 0; counter < day1.length; counter++){
// // // //   console.log(day1[counter])
// // // // }
// // // let descriptions = {
// // //   work: "Went to work",
// // //   "touch tree": "Touched a tree"
// // // };
// // // console.log(descriptions["\"touch tree\""]);
// // // let anObject = {left:1, right:2};
// // // console.log(anObject.left);
// // //
// // // delete anObject.left;
// // // console.log(anObject);
// // // console.log("left" in anObject);
// // // console.log("right" in anObject);
// // // console.log(Object.keys(day1));
// // // let objectA = {a: 1, b: 2};
// // // Object.assign(objectA, {b:3,c:4});
// // // console.log(objectA);
// //
// //
// // let journal = [
// //   {events: ["work","touched tree","pizza","running","television"],
// //   squirrel: false},
// //   {events: ["work","ice cream","cauliflower","lasagna","touched tree","brushed teeth"],
// //   squirrel: false},
// //   {events: ["weekend","cycling","break","peanuts","beer"],
// //   squirrel: true}
// // ];
// // let object1 = {value: 10};
// // let object2 = object1;
// // let object3 = {value: 10};
// // console.log(object1 == object3);
// // console.log(object1 === object3);
// // object2.value = 15;
// // console.log(object1);
// // const score = {visitors: 0, home: 0};
// //
// // score.visitors = 1;
// // console.log(score);
// // score = {a: 0,b: 1};
// let journal = [];
//
// function addEntry(events, squirrel){
//   journal.push({events,squirrel});
// }
// // addEntry("events", "squirrel");
// // journal.push()
// // journal.push("2");
// // console.log(journal);
// // journal.push([2,1]);
// // console.log(journal);
// // journal.push({events:"1"});
// // console.log(journal);
// // console.log(journal[2].events);
// addEntry(["work","touched tree","pizza","running","television"],false);
// addEntry(["work","ice cream","cauliflower","lasagna","touched tree","brushed teeth"], false);
// addEntry(["weekend","cycling","break","peanuts","beer"],true);
// console.log(journal);
require('./journal.js');
function tableFor(event,journal) {
  let table = [0,0,0,0];
  for (i = 0; i < JOURNAL.length; i++){
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
  Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));

}

//writing my own function

// function eventJorunal(jorunal){
//   let events = [];
//   for (let entry of journal) {
//     for (let event of entry.events ) {
//       if (!events.includes(event)) events.push(event);
//     }
//   }
// }
//   return events;
// }

console.log(tableFor("pizza",JOURNAL));

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

// console.log(journalEvents(JOURNAL));
// for (let event of journalEvents(JOURNAL)) {
//   console.log(event + ":", phi(tableFor(event,JOURNAL)));
// }

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event,JOURNAL))
  if (correlation > 0.1 || correlation < -0.1 ) console.log(event + ":" ,correlation);
}

for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
      !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
      }
}
console.log(phi(tableFor("peanut teeth",JOURNAL)));
