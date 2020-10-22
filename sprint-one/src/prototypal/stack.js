var Stack = function() {
  var temp;
  const newMethods = Object.create(stackMethods);
  newMethods.count = 0;
  newMethods.storage = {};
  newMethods.temp = temp;

  return newMethods;

};


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
