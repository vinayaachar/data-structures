class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.temp;
    this.count = 0;
    this.pop = 1;
    this.storage = {};
  }

  enqueue(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  dequeue(value) {
    this.temp = this.storage[this.pop];
    delete this.storage[this.pop];
    this.pop++;
    return this.temp;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}


var newQueue = new Queue();
