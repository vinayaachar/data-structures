var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

// Object to store stack methods
var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;

  },
  pop: function(value) {
    this.temp = this.storage[this.count];
    delete this.storage[this.count];
    this.count--;
    return this.temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
