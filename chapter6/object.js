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
console.log(empty.toString);
console.log(empty.toString());
