class Group {
  constructor() {
    this.content = [];
  }

  add(value) {
    if (this.content.includes(value)) {
      console.log(`${value} already exist`);
    } else {
      this.content.push(value);
    }
  }

  delete(value) {
    this.content = this.content.filter(element => element != value);
    return this.content;
  }

  has(value) {
    if (this.content.indexOf(value) == -1) {
      return false;
    }
    return true;
  }

  static from(object) {
    let addElement = new Group;
    for (let element of object) {
      addElement.add(element);
    }
    return addElement;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.position = 0;
    this.group = group;
  }
  next() {
      if (this.position == this.group.content.length) return {done: true};
      let value = {value: this.group.content[this.position]};
      this.position++;
      return value;
    }
  //   if (this.position == this.group.count - 1) return {done: true};
  //
  //   let value = {value: this.group[this.position]};
  //   this.position++;
  //   return {value, done: false};
  // }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}



//Group.from(["a", "b", "c"][Symbol.iterator]);

// let object = { a: 1, b: 2};
// console.log(object);
// objectIterator = object[Symbol.iterator]();



// Group.prototype[Symbol.iterator] = function() {
//   return new GroupIterator(this);
// };

//Group.from(["a", "b", "c"][Symbol.iterator]);

//Group.from(["a", "b", "c"])
// console.log(Group.from(["a", "b", "c"])[Symbol.iterator]());
//
// for (let value of a.content) {
//   console.log(value);
// }

// for (let value of Group.from(["a", "b", "c"])) {
//   console.log(value);
// }
