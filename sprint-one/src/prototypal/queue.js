var Queue = function() {
  const newMethods = Object.create(queueMethods);
  var temp;
  newMethods.count = 0;
  newMethods.pop = 1;
  newMethods.storage = {};
  newMethods.temp = temp;

  return newMethods;
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
