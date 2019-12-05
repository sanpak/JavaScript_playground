class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return `Vec {x:${this.x + vec.x}, y:${this.y + vec.y}}`;
  }

  minus(vec) {
    return `Vec {x:${this.x - vec.x}, y:${this.y - vec.y}}`;
  }

  outputCurrentVec(){
    return `${this.x}, ${this.y}`;
  }
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
