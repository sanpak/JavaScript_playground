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

  //solution from book
  // if (!this.has(value)) {
    //this.members.push(value);
//}
  has(value) {
    if (this.content.indexOf(value) == -1) {
      return false;
    }
    return true;
  }
  //solution from book
  //has(value) {
    //return this.members.includes(value);
//}
  static from(object) {
    let addElement = new Group;
    for (let element of object) {
      addElement.add(element);
    }
    return addElement;
  }

}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
