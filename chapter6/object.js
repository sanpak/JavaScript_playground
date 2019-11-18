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
whiteRabbit.speak("oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("asdasd");
