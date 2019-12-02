// // let rabbit = {};
// // rabbit.speak = function(line) {
// //   console.log(`The rabbit says '${line}'`);
// // };
// // //rabbit.speak("I'm alive.");
// // function speak(line) {
// //   console.log(`The ${this.type} rabbit says '${line}'`);
// // }
// // let whiteRabbit = {type: "white", speak};
// // let hungryRabbit = {type: "hungry", speak};
// // // whiteRabbit.speak("oh my ears and whiskers, " + "how late it's getting!");
// // // hungryRabbit.speak("asdasd");
// // //
// // // speak.call(hungryRabbit, "Burp!");
// // // speak.call(whiteRabbit,"ajsdhakjshd");
// //
// // function normalize() {
// //   console.log(this.coords.map(n => n / this.length));
// // }
// // normalize.call({coords: [0,2,3], length: 5});
// // let empty = {};
// //
// // //
// // // console.log(Object.getPrototypeOf({}) == Object.prototype);
// // //
// // // console.log(Object.getPrototypeOf({}));
// // //
// // // console.log(Object.getPrototypeOf("asd"));
// // // console.log(Object.prototype);
// // // console.log({}.toString);
// // // console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// // // console.log(Object.getPrototypeOf(Math.max));
// // // console.log(Object.getPrototypeOf([]));
// // //
// // //
// // // console.log(empty.toString);
// // // console.log(empty.toString());
// // // console.log(Object.prototype.toString);
// // let protoRabbit = {
// //   speak(line) {
// //     console.log(`The ${this.type} rabbit says '${line}'`);
// //   }
// // };
// //
// // // let killerRabbit = Object.create(protoRabbit);
// // // killerRabbit.type = "Killer";
// // // killerRabbit.speak("SKREEE!");
// // //
// // // function makeRabbit(type) {
// // //   let rabbit = Object.create(protoRabbit);
// // //   rabbit.type = type;
// // //   return rabbit;
// // // }
// // //
// // // console.log(makeRabbit("killerRabbit"));
// // //
// // // function Rabbit(type) {
// // //   this.type = type;
// // // }
// // //
// // // Rabbit.prototype.speak = function(line) {
// // //   console.log(`The ${this.type} rabbit says '${line}'`);
// // // };
// // //
// // // // Rabbit.speak = function(line) {
// // // //   console.log(`The ${this.type} rabbit says '${line}'`);
// // // // };
// // //
// // // let weirdRabbit = new Rabbit("weird");
// // // console.log(Object.getPrototypeOf(weirdRabbit));
// // // console.log(weirdRabbit.speak("hello"));
// // // console.log(weirdRabbit);
// // //
// // // console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
// // // console.log(Object.getPrototypeOf(Rabbit));
// // // console.log(Object.getPrototypeOf(weirdRabbit));
// //
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// //
// // console.log(killerRabbit);
// // console.log(blackRabbit);
// // let object = new class { getWord() {return "hello"; }};
// // console.log(object.getWord());
// // Rabbit.prototype.teeth = "small";
// // console.log(killerRabbit.teeth);
// // killerRabbit.teeth = "long,sharp,bllody";
// // console.log(killerRabbit.teeth);
// // console.log(blackRabbit.teeth);
// // console.log(Rabbit.prototype.teeth);
// // console.log(Array.prototype.toString);
// // console.log(Object.prototype.toString);
// //
// // console.log(Array.prototype.toString == Object.prototype.toString);
// // console.log([1,2].toString());
// // console.log(Object.prototype.toString.call([1,2]));
// // let ages = {
// //   Boris: 39,
// //   Liang: 22,
// //   Julia: 62
// // };
// //
// // console.log("Is Jack's age known?", "Jack" in ages);
// // console.log("toString" in Object.create(null));
// // let agesMap = new Map();
// // agesMap.set("Boris", 39);
// // agesMap.set("Liang", 22);
// // agesMap.set("Julia", 62);
// //
// // console.log(`Julia is ${agesMap.get("Julia")}`);
// // console.log("Is Jack's age known?", agesMap.has("Jack"));
// // console.log(agesMap.has("toString"));
// // console.log({x: 1}.hasOwnProperty("x"));
// // let num = 15;
// // console.log(num.toString());
// // let num = 123;
// // console.log(typeof(num));
// // console.log(typeof(num.toString()));
// // console.log((1).toString());
// // console.log(2.34.toFixed(1));
// // console.log(toString(123));
// // console.log(toString(1.23));
//
// Rabbit.prototype.toString = function() {
//   return `a ${this.type} rabbit`;
// };
//
// console.log(String(blackRabbit));
//
// console.log(Object.getPrototypeOf(1));
//
// // Number.prototype.myString = function() {
// //   return this.toString() + " is a number";
// // };
// // console.log((12).myString());
// let sym = Symbol("name");
// console.log(sym == Symbol("name"));
// Rabbit.prototype[sym] = 55;
// console.log(blackRabbit[sym]);
// console.log(killerRabbit[sym]);
// console.log(sym);
// const toStringSymbol = Symbol("toString");
// Array.prototype[toStringSymbol] = function() {
//   return `${this.length} cm of blue yarn`;
// };
// let a = "b";
// a = "d"
//
//
// let sym2 = Symbol("name");
//
// Rabbit.prototype[sym2] = "acd";
// console.log(sym2);
// console.log(killerRabbit[sym2]);
// console.log([1,2][toStringSymbol]());
//
// let stringObject = {
//   [toStringSymbol]() { return "a jute rope"; }
// };
//
// console.log(stringObject[toStringSymbol]());
//
// let okIterator = "OK"[Symbol.iterator]();
// console.log(okIterator);
// console.log(okIterator.next());


class Matrix {
  constructor(width, height, element = (x,y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x ++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }
  get(x, y) { return this.content[y * this.width + x]; }

  set(x, y, value) { this.content[y * this.width + x] = value; }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y)
    };

    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

Matrix.prototype[Symbol.iterator] = function() {
  return new MatrixIterator(this);
};

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
  console.log(x, y, value);
}
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  }
};

console.log(varyingSize.size);
console.log(varyingSize.size);


class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32)/1.8);
  }
}

// let temp = new Temperature(22);
// console.log(temp.fahrenheit);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 86;
// console.log(temp.celsius);
let temp = Temperature.fromFahrenheit(100);
console.log(temp.fahrenheit);

class 
