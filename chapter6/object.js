let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};
//rabbit.speak("I'm alive.");
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
// whiteRabbit.speak("oh my ears and whiskers, " + "how late it's getting!");
// hungryRabbit.speak("asdasd");
//
// speak.call(hungryRabbit, "Burp!");
// speak.call(whiteRabbit,"ajsdhakjshd");

function normalize() {
  console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0,2,3], length: 5});
let empty = {};

//
// console.log(Object.getPrototypeOf({}) == Object.prototype);
//
// console.log(Object.getPrototypeOf({}));
//
// console.log(Object.getPrototypeOf("asd"));
// console.log(Object.prototype);
// console.log({}.toString);
// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// console.log(Object.getPrototypeOf(Math.max));
// console.log(Object.getPrototypeOf([]));
//
//
// console.log(empty.toString);
// console.log(empty.toString());
// console.log(Object.prototype.toString);
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "Killer";
// killerRabbit.speak("SKREEE!");

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

console.log(makeRabbit("killerRabbit"));

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

// Rabbit.speak = function(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };

let weirdRabbit = new Rabbit("weird");
console.log(Object.getPrototypeOf(weirdRabbit));
console.log(weirdRabbit.speak("hello"));
console.log(weirdRabbit);

console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(Rabbit));
console.log(Object.getPrototypeOf(weirdRabbit));
