var Stack = function() {
  this.temp;
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function(value) {
  this.temp = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return this.temp;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var newStack = new Stack();
