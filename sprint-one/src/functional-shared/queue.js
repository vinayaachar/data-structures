var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newMethods = {};
  var temp;
  extend(newMethods, queueMethods);
  newMethods.count = 0;
  newMethods.pop = 1;
  newMethods.storage = {};
  newMethods.temp = temp;

  return newMethods;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;

  },
  dequeue: function(value) {
    this.temp = this.storage[this.pop];
    delete this.storage[this.pop];
    this.pop++;
    return this.temp;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};
