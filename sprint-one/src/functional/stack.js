var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.pop = function() {
    var temp = storage[count];
    delete storage[count];
    count--;
    return temp;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
