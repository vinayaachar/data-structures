var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.temp;
  this.count = 0;
  this.pop = 1;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
    this.count++;
    this.storage[this.count] = value;
  },

Queue.prototype.dequeue = function(value) {
    this.temp = this.storage[this.pop];
    delete this.storage[this.pop];
    this.pop++;
    return this.temp;
  },
Queue.prototype.size = function() {
    return Object.keys(this.storage).length;
  }

var newQueue = new Queue();
