class Stack {
  constructor() {
    this.temp;
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop(value) {
    this.temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return this.temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}

var newStack = new Stack();
